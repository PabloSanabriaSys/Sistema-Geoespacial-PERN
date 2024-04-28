import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet"; // Importa Leaflet
import "leaflet/dist/leaflet.css";
import { getCantones, getCantonUsers, getClients, getManzanos, getManznoUser } from '../../api/client';
import customIcon from "/imagenes/position2.png";
import ButtonLateral from "../../components/ButtonLateral";
import Title from '../../components/ui/Title';
import { Button } from "primereact/button";
import { useThema } from "../../contexts/ThemaContext";

// Define el ícono personalizado
const customMarkerIcon = new L.Icon({
    iconUrl: customIcon,
    iconSize: [32, 32], // Tamaño del ícono
    iconAnchor: [16, 32], // Punto de anclaje del ícono
    popupAnchor: [0, -32] // Punto de anclaje del popup
});

export default function UbicationClientManzanos() {
    const [clientLocations, setClientLocations] = useState([]);
    const [geojsonData, setGeojsonData] = useState(null);
    const { theme } = useThema();
    const [customers, setCustomers] = useState(null);
    const contClickRef = useRef(0);
    const nameSelection = useRef('');

    const filtrarClients = (clients) => {
        // Convertir los datos de los clientes en ubicaciones para el mapa
        const locations = clients.map(client => ({
            id: client.id,
            name: client.nombre_usuario,
            position: { lat: client.latitud, lng: client.longitud }
        }));

        // Filtrar las ubicaciones con posición válida
        return locations.filter(location => location.position);
    }

    const fetchClientLocations = async () => {
        try {
            const response = await getClients();
            const clients = response.data;
            const validLocations = filtrarClients(clients);
            const response2 = await getManzanos();
            const data = await response2.data;
            setGeojsonData(data);
            setClientLocations(validLocations);
            setCustomers(clients);
            contClickRef.current = 0; // Reinicia el contador cuando se actualizan los datos
        } catch (error) {
            console.log('Error al obtener ubicaciones de clientes', error);
        }
    }

    useEffect(() => {
        fetchClientLocations();
    }, []);


    const changeSection = async (manzanoName) => {
        try {
            const response = await getManznoUser(manzanoName);
            const data = response.data;
            const validLocations = filtrarClients(data.usuarios);
            const manzano = data.manzano;
            setGeojsonData(manzano);
            setClientLocations(validLocations);
            setCustomers(data.usuarios);

        } catch (error) {
            console.log('Error al obtener ubicaciones de clientes', error);
        }
    }

    const onEachSection = async (section, layer) => {
        if (section.properties != undefined && section.properties.nombre != undefined) {
            const sectionName = section.properties.nombre.toString();
            layer.bindPopup(sectionName)
            layer.on({
                click: async (even) => {
                    contClickRef.current += 1;

                    if (contClickRef.current >= 2 && nameSelection.current === sectionName) {
                        setGeojsonData(null);
                        setClientLocations([]);
                        await changeSection(section.properties.nombre)
                        contClickRef.current = 0;
                    }
                    nameSelection.current = sectionName;
                    //console.log(contClickRef.current)
                }
            })

        }
    }

    const reset = async () => {
        setGeojsonData(null);
        setClientLocations([]);
        await fetchClientLocations()
    }

    return (
        <div className="sm:px-20 py-10 px-2 overflow-hidden " style={{ height: "100vh" }}>
            <Title title="UBICACION DE LOS CLIENTES" subtitle="" titleSize="sm:text-6xl text-4xl" subtitleSize="sm:text-6xl text-4xl" />
            <MapContainer center={[-17.3959409, -66.1549126]} zoom={12} style={{ width: "100%", height: "80%", zIndex: "1", borderRadius: "1rem" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={theme === 'dark' ? "https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/256/{z}/{x}/{y}.png?key=quWUEdEIncmujSQycJWP" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
                {clientLocations.map(location => (
                    <Marker key={location.id} position={location.position} icon={customMarkerIcon}>
                        <Popup>{location.name}</Popup>
                    </Marker>
                ))}
                {geojsonData && <GeoJSON data={geojsonData} onEachFeature={onEachSection} />}
                <div style={{ position: "absolute", top: "5px", right: "5px", zIndex: "1000" }}>
                    <ButtonLateral customers={customers} />
                </div>
            </MapContainer>
            <div className="flex flex-col justify-center mt-2">
                <Button className="m-auto" onClick={reset}>RESETEAR MAPA</Button>
            </div>
        </div>
    );
}
