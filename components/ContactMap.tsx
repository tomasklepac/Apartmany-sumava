'use client';

import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix pro chybějící ikony v Leaflet + Next.js
const fixLeafletIcons = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
};

interface Location {
    id: string;
    title: string;
    description: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    address: string;
}

interface ContactMapProps {
    locations: Location[];
}

// Komponenta pro automatické vycentrování mapy na všechny body
function FitBounds({ locations }: { locations: Location[] }) {
    const map = useMap();

    useEffect(() => {
        if (locations.length > 0) {
            const bounds = L.latLngBounds(locations.map(loc => [loc.coordinates.lat, loc.coordinates.lng]));
            map.fitBounds(bounds, { padding: [50, 50] });
        }
    }, [locations, map]);

    return null;
}

export default function ContactMap({ locations }: ContactMapProps) {
    useEffect(() => {
        fixLeafletIcons();
    }, []);

    // Střední bod (fallback) - Šumava
    const center = { lat: 49.12, lng: 13.30 };

    return (
        <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg z-0 relative">
            <MapContainer
                center={[center.lat, center.lng]}
                zoom={11}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
                className="z-0"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />

                {locations.map((loc) => (
                    <Marker
                        key={loc.id}
                        position={[loc.coordinates.lat, loc.coordinates.lng]}
                    >
                        <Popup>
                            <div className="p-2 min-w-[200px]">
                                <h3 className="font-bold text-forest-dark text-lg mb-1">{loc.title}</h3>
                                <p className="text-sm text-gray-600 mb-2">{loc.address}</p>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${loc.coordinates.lat},${loc.coordinates.lng}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-copper font-medium hover:underline text-sm"
                                >
                                    Otevřít v Google Maps
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                ))}

                <FitBounds locations={locations} />
            </MapContainer>
        </div>
    );
}
