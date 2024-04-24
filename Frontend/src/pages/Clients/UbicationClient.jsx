import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Importa Leaflet
import "leaflet/dist/leaflet.css";
import { getClients } from '../../api/client';
import customIcon from "/imagenes/position2.png";
import ButtonLateral from "../../components/ButtonLateral";
import Title from '../../components/ui/Title';

// Define el ícono personalizado
const customMarkerIcon = new L.Icon({
    iconUrl: customIcon,
    iconSize: [32, 32], // Tamaño del ícono
    iconAnchor: [16, 32], // Punto de anclaje del ícono
    popupAnchor: [0, -32] // Punto de anclaje del popup
});

export default function UbicationClient() {
    const [clientLocations, setClientLocations] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        async function fetchClientLocations() {
            try {
                const response = await getClients();
                const clients = response.data;

                // Convertir los datos de los clientes en ubicaciones para el mapa
                const locations = clients.map(client => ({
                    id: client.id,
                    name: client.nombre_usuario,
                    position: { lat: client.latitud, lng: client.longitud }
                }));

                // Filtrar las ubicaciones con posición válida
                const validLocations = locations.filter(location => location.position);

                setClientLocations(validLocations);
            } catch (error) {
                console.log('Error al obtener ubicaciones de clientes', error);
            }
        }

        fetchClientLocations();
    }, []);

    useEffect(() => {
        function handleThemeChange() {
            setDarkMode(document.body.classList.contains('dark'));
        }

        handleThemeChange(); // Verifica el tema actual al cargar la página

        // Escucha los cambios en el tema
        document.body.addEventListener('themechange', handleThemeChange);

        return () => {
            // Remueve el event listener cuando el componente se desmonta
            document.body.removeEventListener('themechange', handleThemeChange);
        };
    }, []);

    return (
        <div className="sm:px-20 py-10 px-2 overflow-hidden" style={{ height: "100vh" }}>
            <Title title="UBICACION DE LOS CLIENTES" subtitle="" titleSize="sm:text-6xl text-4xl" subtitleSize="sm:text-6xl text-4xl" />
            <MapContainer center={[-17.3959409, -66.1549126]} zoom={12} style={{ width: "100%", height: "80%", zIndex: "1", borderRadius: "0.375rem" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={darkMode ? "https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/256/{z}/{x}/{y}.png?key=quWUEdEIncmujSQycJWP" : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
                />
                {clientLocations.map(location => (
                    <Marker key={location.id} position={location.position} icon={customMarkerIcon}>
                        <Popup>{location.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            <ButtonLateral />
        </div>
    );
}
