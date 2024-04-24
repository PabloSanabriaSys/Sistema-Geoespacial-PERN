import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function LocationMarker({ position, setPosition }) {
    const [firstClick, setFirstClick] = useState(true);
    const map = useMapEvents({
        click(e) {
            if (position == null && firstClick) {
                setFirstClick(false);
                map.locate({ enableHighAccuracy: true }); // Aquí agregamos la opción para una mayor precisión
            } else setPosition(e.latlng);
            //console.log(e.latlng)
        },

        locationfound(e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
        },
    });

    const handleDragEnd = (e) => {
        setPosition(e.target.getLatLng());
    };
    
    return position === null ? null : (
        <Marker position={position} draggable={true} eventHandlers={{ dragend: handleDragEnd }}>
            <Popup>Tu estas aqui</Popup>
        </Marker>
    );
}

export default function MapModal({ position, setPosition }) {
    return (
        <MapContainer center={{ lat: 51.505, lng: -0.09 }} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker position={position} setPosition={setPosition} />
        </MapContainer>
    );
}
