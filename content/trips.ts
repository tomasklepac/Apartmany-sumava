// Tipy na výlety a aktivity v okolí
export interface Trip {
    id: string;
    title: string;
    description: string;
    category: 'hiking' | 'skiing' | 'nature' | 'culture' | 'cycling';
    image: string;
    distance?: string;
    difficulty?: 'easy' | 'medium' | 'hard';
    season?: string;
}

export const trips: Trip[] = [
    {
        id: 'certovo-jezero',
        title: 'Čertovo jezero',
        description: 'Malebné ledovcové jezero obklopené hustými lesy. Ideální pro rodinnou procházku s možností koupání v létě.',
        category: 'nature',
        image: '/images/shared/certovo-jezero.jpg',
        distance: '12 km od Prášil',
        difficulty: 'easy',
        season: 'Celoročně',
    },
    {
        id: 'spicak-lyzovani',
        title: 'Lyžování na Špičáku',
        description: 'Největší lyžařský areál v oblasti s moderním vybavením a kvalitním zasněžováním. Sjezdovky pro všechny úrovně.',
        category: 'skiing',
        image: '/images/shared/spicak.jpg',
        distance: '3-8 km',
        difficulty: 'medium',
        season: 'Prosinec - Březen',
    },
    {
        id: 'sumavska-magistrala',
        title: 'Šumavská magistrála',
        description: 'Nejdelší česká turistická trasa vedoucí hřebeny Šumavy. Nádherné výhledy a divoká příroda.',
        category: 'hiking',
        image: '/images/shared/magistrala.jpg',
        difficulty: 'hard',
        season: 'Duben - Říjen',
    },
    {
        id: 'cyklotrasy',
        title: 'Cyklotrasy Šumavou',
        description: 'Síť značených cyklotras pro horská kola i elektrokola. Od rodinných výletů po náročné traily.',
        category: 'cycling',
        image: '/images/shared/cyklo.jpg',
        difficulty: 'medium',
        season: 'Květen - Říjen',
    },
    {
        id: 'pancirska-jezirka',
        title: 'Pancířská jezírka',
        description: 'Skupina ledovcových jezer v nedotčené přírodě. Jedna z nejkrásnějších lokalit Šumavy.',
        category: 'nature',
        image: '/images/shared/pancirska.jpg',
        distance: '10 km od Železné Rudy',
        difficulty: 'medium',
        season: 'Celoročně',
    },
    {
        id: 'modrava',
        title: 'Modrava a okolí',
        description: 'Nejzápadnější obec Česka s unikátní atmosférou a přístupem do národního parku.',
        category: 'culture',
        image: '/images/shared/modrava.jpg',
        distance: '15 km od Prášil',
        difficulty: 'easy',
        season: 'Celoročně',
    },
];

export const getTripsByCategory = (category: Trip['category']): Trip[] => {
    return trips.filter(trip => trip.category === category);
};
