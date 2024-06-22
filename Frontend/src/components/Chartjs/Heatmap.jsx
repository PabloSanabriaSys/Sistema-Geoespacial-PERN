import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import { getClients } from '../../api/client';
import ButtonLateral from "../../components/ButtonLateral";
import Title from '../../components/ui/Title';
import { useThema } from "../../contexts/ThemaContext";

const HeatLayer = ({ data }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !data) return;

    const points = data.map(point => [point.position.lat, point.position.lng, 100]);
    const heatLayer = L.heatLayer(points);
    map.addLayer(heatLayer);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, data]);

  return null;
};

export default function HeatmapClient() {
    const [heatmapData, setHeatmapData] = useState(null);
    const [customers, setCustomers] = useState(null);
    const { theme } = useThema();

    useEffect(() => {
        async function fetchClientLocations() {
            try {
                const response = await getClients();
                const clients = response.data;

                const locations = clients.map(client => ({
                    id: client.id,
                    name: client.nombre_usuario,
                    position: { lat: client.latitud, lng: client.longitud }
                }));

                const validLocations = locations.filter(
                    location => location.position && location.position.lat && location.position.lng
                );
                setHeatmapData(validLocations);
                setCustomers(clients);
            } catch (error) {
                console.log('Error al obtener ubicaciones de clientes', error);
            }
        }

        fetchClientLocations();
    }, []);

    return (
        <div className="w-full h-full border rounded-lg  dark:bg-slate-800 dark:border-none card flex flex-col  items-center m-auto" style={{ height: "100%" }}>
            <h3 className='text-2xl text-center font-extrabold  m-2 mt-5'>Mapa de Calor de Clientes</h3>
            <MapContainer 
                center={[-17.3959409, -66.1549126]} 
                zoom={12} 
                style={{ width: "90%", height: "24rem", zIndex: "1", borderRadius: "0.375rem" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={theme === 'dark' 
                        ? "https://api.maptiler.com/maps/ch-swisstopo-lbm-dark/256/{z}/{x}/{y}.png?key=quWUEdEIncmujSQycJWP" 
                        : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    }
                />
                {heatmapData && <HeatLayer data={heatmapData} />}
                
            </MapContainer>
        </div>
    );
}