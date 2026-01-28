'use client';

import { APIProvider, Map, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { trips } from '@/content/trips';
import { useState } from 'react';

export default function TripsMap() {
    const [selectedTrip, setSelectedTrip] = useState<string | null>(null);

    // Center map on Prášily area
    const center = { lat: 49.0667, lng: 13.3833 };
    const tripsWithCoordinates = trips.filter(trip => trip.coordinates);

    // Google Maps API key - POZOR: Toto je veřejný klíč, měl by být v .env
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE';

    return (
        <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-lg">
            <APIProvider apiKey={API_KEY}>
                <Map
                    defaultCenter={center}
                    defaultZoom={11}
                    mapId="trips-map"
                    gestureHandling="cooperative"
                    disableDefaultUI={false}
                >
                    {tripsWithCoordinates.map((trip) => (
                        <AdvancedMarker
                            key={trip.id}
                            position={{ lat: trip.coordinates!.lat, lng: trip.coordinates!.lng }}
                            onClick={() => setSelectedTrip(trip.id)}
                        >
                            <div className="bg-copper text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg cursor-pointer hover:scale-110 transition-transform">
                                📍
                            </div>
                        </AdvancedMarker>
                    ))}

                    {selectedTrip && (() => {
                        const trip = trips.find(t => t.id === selectedTrip);
                        if (!trip || !trip.coordinates) return null;

                        return (
                            <InfoWindow
                                position={{ lat: trip.coordinates.lat, lng: trip.coordinates.lng }}
                                onCloseClick={() => setSelectedTrip(null)}
                            >
                                <div className="p-2 max-w-xs">
                                    <h3 className="font-bold text-lg mb-1 text-charcoal">{trip.title}</h3>
                                    <p className="text-sm text-charcoal/70 mb-2">
                                        {trip.description.substring(0, 100)}...
                                    </p>
                                    {trip.distance && (
                                        <p className="text-xs text-copper font-medium">📍 {trip.distance}</p>
                                    )}
                                </div>
                            </InfoWindow>
                        );
                    })()}
                </Map>
            </APIProvider>
        </div>
    );
}
