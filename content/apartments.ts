// Typy pro apartmány
export interface Feature {
    icon: string;
    label: string;
}

export interface PricingSeason {
    season: string;
    pricePerNight: string;
    minNights?: number;
}

export interface NearbyHighlight {
    title: string;
    description: string;
    distance: string;
    icon: string;
}

export interface Apartment {
    id: 'prasily' | 'zelezna-ruda';
    title: string;
    location: string;
    shortDescription: string;
    longDescription: string;
    capacity: string;
    features: Feature[];
    pricing: PricingSeason[];
    gallery: string[];
    heroImage: string;
    coordinates: {
        lat: number;
        lng: number;
    };
    nearbyHighlights: NearbyHighlight[];
    bookingLinks?: {
        booking?: string;
        airbnb?: string;
    };
}

// Data apartmánů
export const apartments: Apartment[] = [
    {
        id: 'prasily',
        title: 'Apartmán Prášily',
        location: 'Prášily',
        shortDescription: 'Útulný apartmán v srdci Šumavy s výhledem na okolní lesy a hory.',
        longDescription: 'Moderně zařízený apartmán v klidné části Prášil nabízí perfektní zázemí pro dovolenou v přírodě. Nachází se v blízkosti lyžařských areálů a turistických tras. Apartmán je vybaven plně vybavenou kuchyní, prostornou obývací částí a pohodlnou ložnicí. Ideální pro páry i rodiny s dětmi.',
        capacity: '2–4 osoby',
        heroImage: '/images/prasily/hero.jpg',
        features: [
            { icon: '🏠', label: 'Celý apartmán' },
            { icon: '🅿️', label: 'Parkování zdarma' },
            { icon: '📶', label: 'Wi-Fi' },
            { icon: '🍳', label: 'Plně vybavená kuchyň' },
            { icon: '📺', label: 'TV' },
            { icon: '🔥', label: 'Krb' },
            { icon: '🐕', label: 'Domácí mazlíčci povoleni' },
            { icon: '⛷️', label: 'Blízko lyžařských areálů' },
        ],
        pricing: [
            {
                season: 'Hlavní sezóna (léto, zima)',
                pricePerNight: 'od 1 800 Kč',
                minNights: 2,
            },
            {
                season: 'Mimo sezónu',
                pricePerNight: 'od 1 500 Kč',
                minNights: 2,
            },
        ],
        gallery: [
            '/images/prasily/gallery/01.jpg',
            '/images/prasily/gallery/02.jpg',
            '/images/prasily/gallery/03.jpg',
            '/images/prasily/gallery/04.jpg',
            '/images/prasily/gallery/05.jpg',
            '/images/prasily/gallery/06.jpg',
            '/images/prasily/gallery/07.jpg',
            '/images/prasily/gallery/08.jpg',
            '/images/prasily/gallery/09.jpg',
            '/images/prasily/gallery/10.jpg',
        ],
        coordinates: {
            lat: 49.0733,
            lng: 13.3978,
        },
        nearbyHighlights: [
            {
                title: 'Lyžařský areál Špičák',
                description: 'Moderní lyžařský areál s kvalitním zázemím',
                distance: '8 km',
                icon: '⛷️',
            },
            {
                title: 'Čertovo jezero',
                description: 'Malebné ledovcové jezero v srdci Šumavy',
                distance: '12 km',
                icon: '🏞️',
            },
            {
                title: 'Schwarzenberský plavební kanál',
                description: 'Historická technická památka',
                distance: '5 km',
                icon: '🚣',
            },
            {
                title: 'Modrava',
                description: 'Nejzápadnější obec Česka s unikátní přírodou',
                distance: '15 km',
                icon: '🌲',
            },
        ],
    },
    {
        id: 'zelezna-ruda',
        title: 'Apartmán Železná Ruda',
        location: 'Železná Ruda',
        shortDescription: 'Prostorný apartmán v centru horského městečka s výbornou dostupností.',
        longDescription: 'Nově zrekonstruovaný apartmán v centru Železné Rudy nabízí komfortní ubytování s moderním vybavením. Nachází se v těsné blízkosti lyžařských areálů Špičák a Belveder. Apartmán disponuje dvěma ložnicemi, prostornou obývací částí s kuchyňským koutem a moderní koupelnou. Ideální výchozí bod pro turistiku i lyžování.',
        capacity: '4–6 osob',
        heroImage: '/images/zelezna-ruda/hero.jpg',
        features: [
            { icon: '🏠', label: 'Celý apartmán' },
            { icon: '🅿️', label: 'Parkování zdarma' },
            { icon: '📶', label: 'Wi-Fi' },
            { icon: '🍳', label: 'Plně vybavená kuchyň' },
            { icon: '📺', label: 'Smart TV' },
            { icon: '🛁', label: 'Moderní koupelna' },
            { icon: '🏔️', label: 'Výhled na hory' },
            { icon: '🎿', label: 'Ski room' },
        ],
        pricing: [
            {
                season: 'Hlavní sezóna (léto, zima)',
                pricePerNight: 'od 2 200 Kč',
                minNights: 2,
            },
            {
                season: 'Mimo sezónu',
                pricePerNight: 'od 1 800 Kč',
                minNights: 2,
            },
        ],
        gallery: [
            '/images/zelezna-ruda/gallery/01.jpg',
            '/images/zelezna-ruda/gallery/02.jpg',
            '/images/zelezna-ruda/gallery/03.jpg',
            '/images/zelezna-ruda/gallery/04.jpg',
            '/images/zelezna-ruda/gallery/05.jpg',
            '/images/zelezna-ruda/gallery/06.jpg',
            '/images/zelezna-ruda/gallery/07.jpg',
            '/images/zelezna-ruda/gallery/08.jpg',
            '/images/zelezna-ruda/gallery/09.jpg',
            '/images/zelezna-ruda/gallery/10.jpg',
        ],
        coordinates: {
            lat: 49.1367,
            lng: 13.2353,
        },
        nearbyHighlights: [
            {
                title: 'Lyžařský areál Špičák',
                description: 'Největší lyžařský areál v oblasti',
                distance: '3 km',
                icon: '⛷️',
            },
            {
                title: 'Pancířská jezírka',
                description: 'Skupina ledovcových jezer',
                distance: '10 km',
                icon: '🏞️',
            },
            {
                title: 'Belveder',
                description: 'Rozhledna s úžasným výhledem',
                distance: '5 km',
                icon: '🗼',
            },
            {
                title: 'Šumavská magistrála',
                description: 'Nejdelší česká turistická trasa',
                distance: '0 km',
                icon: '🥾',
            },
        ],
    },
];

// Helper funkce
export const getApartmentById = (id: string): Apartment | undefined => {
    return apartments.find(apt => apt.id === id);
};

export const getAllGalleryImages = (): string[] => {
    return apartments.flatMap(apt => apt.gallery);
};
