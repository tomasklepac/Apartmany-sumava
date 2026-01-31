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
    coordinates?: { lat: number; lng: number }; // Pro mapu
}

export const trips: Trip[] = [
    {
        id: 'prasilske-jezero',
        title: 'Prášilské jezero',
        description: 'Vydejte se poznat jedno z pěti šumavských jezer ledovcového původu. Jezero leží v nadmořské výšce 1 080 m n.m. Příroda kolem jezera nabízí odpočinek a příjemnou nenáročnou procházku.',
        category: 'nature',
        image: '/images/trips/prasilske-jezero.jpg',
        distance: '3,5 km od Prášil',
        difficulty: 'easy',
        season: 'Celoročně',
        coordinates: { lat: 49.0667, lng: 13.3833 },
    },
    {
        id: 'rozhledna-polednik',
        title: 'Rozhledna Poledník',
        description: 'Oblíbené místo dalekých výhledů. Rozhledna měří 37 metrů a vede na ni 227 schodů. Po neobvykle širokém schodišti můžete vystoupat do třech vyhlídkových pater, kde je umístěna galerie fotografií šumavské přírody.',
        category: 'culture',
        image: '/images/trips/rozhledna-polednik.jpg',
        distance: '7,9 km od Prášil',
        difficulty: 'medium',
        season: 'Duben - Říjen',
        coordinates: { lat: 49.0833, lng: 13.4167 },
    },
    {
        id: 'cerne-jezero',
        title: 'Černé jezero',
        description: 'Největší české přírodní jezero ledovcového původu poskytuje jeden z nejhezčích zážitků při toulkách šumavskou přírodou. Černé jezero je největší karové ledovcové jezero na Šumavě.',
        category: 'nature',
        image: '/images/trips/cerne-jezero.jpg',
        distance: '25 km od Prášil',
        difficulty: 'medium',
        season: 'Celoročně',
        coordinates: { lat: 48.9833, lng: 13.5333 },
    },
    {
        id: 'roklansky-potok',
        title: 'Roklanský potok',
        description: 'Roklanský potok je jedním ze tří potoků, jejichž soutokem vzniká šumavská řeka Vydra, proslulá svým kamenitým řečištěm s množstvím tzv. obřích hrnců. Potok je téměř 14 km dlouhý.',
        category: 'nature',
        image: '/images/trips/roklansky-potok.jpg',
        distance: '18 km od Prášil',
        difficulty: 'easy',
        season: 'Duben - Říjen',
        coordinates: { lat: 49.0333, lng: 13.5167 },
    },
    {
        id: 'trijezerni-slat',
        title: 'Tříjezerní slať',
        description: 'Pod jihovýchodním svahem Oblíku leží malé vrchovištní rašeliniště Tříjezerní slať. Rašeliniště je pojmenované podle tří rašelinných jezírek a je nejlépe dostupné od geoparku a informačního centra NP Šumava na Rokytě.',
        category: 'nature',
        image: '/images/trips/trijezerni-slat.jpg',
        distance: '12,5 km od Prášil',
        difficulty: 'medium',
        season: 'Květen - Září',
        coordinates: { lat: 49.0500, lng: 13.5333 },
    },
    {
        id: 'hrad-kasperk',
        title: 'Hrad Kašperk',
        description: 'Vydejte se na hrad Kašperk a poznejte místa, kde se natáčela pohádka Anděl Páně. Hrad pro návštěvníky připravil prohlídky zaměřené na každodenní život na hradě i speciální prohlídky pro děti. Lákadlem je i velký model středověkého astrolábu.',
        category: 'culture',
        image: '/images/trips/hrad-kasperk.jpg',
        distance: '28 km od Prášil',
        difficulty: 'easy',
        season: 'Duben - Říjen',
        coordinates: { lat: 49.1500, lng: 13.5500 },
    },
    {
        id: 'jezero-laka',
        title: 'Jezero Laka',
        description: 'Nejmenší a nejvýše položené jezero české části Šumavy bylo na dlouhou dobu veřejnosti nepřístupné. O to víc se vyplatí se k tomuto krásnému jezeru ledovcového původu podívat. Jezero se nachází ve výšce 1 096 m n.m.',
        category: 'nature',
        image: '/images/trips/jezero-laka.jpg',
        distance: '8,3 km od Prášil',
        difficulty: 'medium',
        season: 'Celoročně',
        coordinates: { lat: 49.0667, lng: 13.3167 },
    },
    {
        id: 'certovo-jezero',
        title: 'Čertovo jezero',
        description: 'Pověstmi opředené Čertovo jezero ledovcového původu leží na jihovýchodním svahu Jezerní hory, poblíž Železné Rudy. Dolinu, v níž se jezero nachází, vyryl podle pověsti ďábel. Dodnes se prý z jezera vynořují skřeti a podivné postavy.',
        category: 'nature',
        image: '/images/trips/certovo-jezero.jpg',
        distance: '24 km od Prášil',
        difficulty: 'easy',
        season: 'Celoročně',
        coordinates: { lat: 49.1500, lng: 13.3333 },
    },
    {
        id: 'prirodni-koupaliste-zabak',
        title: 'Přírodní koupaliště Žabák',
        description: 'Přírodní koupaliště a biotop s čistou, osvěžující vodou se nachází v krásném prostředí Šumavy, přibližně 2 km od centra Železné Rudy.',
        category: 'nature',
        image: '/images/trips/koupaliste-zabak.jpeg',
        distance: '2 km od Železné Rudy',
        difficulty: 'easy',
        season: 'Léto',
        coordinates: { lat: 49.1530, lng: 13.2350 },
    },
];

export const getTripsByCategory = (category: Trip['category']): Trip[] => {
    return trips.filter(trip => trip.category === category);
};
