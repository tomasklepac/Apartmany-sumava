'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

interface ApartmentMapProps {
    address: string;
    coordinates: {
        lat: number;
        lng: number;
    };
}

export default function ApartmentMap({ address, coordinates }: ApartmentMapProps) {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY_HERE';

    return (
        <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
            <APIProvider apiKey={API_KEY}>
                <Map
                    defaultCenter={coordinates}
                    defaultZoom={15}
                    mapId="apartment-map"
                    gestureHandling="cooperative"
                    disableDefaultUI={false}
                >
                    <AdvancedMarker position={coordinates}>
                        <div className="bg-copper text-white rounded-full w-10 h-10 flex items-center justify-center font-bold shadow-lg">
                            📍
                        </div>
                    </AdvancedMarker>
                </Map>
            </APIProvider>
        </div>
    );
}
