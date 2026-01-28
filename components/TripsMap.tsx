'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { trips } from '@/content/trips';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect, useState } from 'react';

// Fix for default marker icons in Next.js
const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export default function TripsMap() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return (
            <div className="w-full h-[600px] bg-mist rounded-xl flex items-center justify-center">
                <p className="text-charcoal/60">Načítání mapy...</p>
            </div>
        );
    }

    // Center map on Prášily area
    const center: [number, number] = [49.0667, 13.3833];
    const tripsWithCoordinates = trips.filter(trip => trip.coordinates);

    return (
        <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
            <MapContainer
                center={center}
                zoom={11}
                scrollWheelZoom={false}
                className="h-full w-full"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {tripsWithCoordinates.map((trip) => (
                    <Marker
                        key={trip.id}
                        position={[trip.coordinates!.lat, trip.coordinates!.lng]}
                        icon={icon}
                    >
                        <Popup>
                            <div className="p-2">
                                <h3 className="font-bold text-lg mb-1">{trip.title}</h3>
                                <p className="text-sm text-charcoal/70 mb-2">{trip.description.substring(0, 100)}...</p>
                                {trip.distance && (
                                    <p className="text-xs text-copper font-medium">📍 {trip.distance}</p>
                                )}
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}
