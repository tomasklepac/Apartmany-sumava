// Globální data webu
export interface SiteData {
    name: string;
    tagline: string;
    description: string;
    contact: {
        phone: string;
        email: string;
        phoneDisplay: string;
    };
    social?: {
        facebook?: string;
        instagram?: string;
    };
}

export const siteData: SiteData = {
    name: 'Apartmány Šumava',
    tagline: 'Dva apartmány. Jedna Šumava.',
    description: 'Ubytování v srdci Šumavy - Prášily a Železná Ruda. Klid, příroda a komfort pro vaši dovolenou.',
    contact: {
        phone: '+420123456789', // TODO: Nahradit skutečným telefonem
        phoneDisplay: '+420 123 456 789',
        email: 'info@apartmany-sumava.cz', // TODO: Nahradit skutečným emailem
    },
    social: {
        // facebook: 'https://facebook.com/...',
        // instagram: 'https://instagram.com/...',
    },
};

// Důvody proč si vybrat naše apartmány
export interface WhyUsItem {
    icon: string;
    title: string;
    description: string;
}

export const whyUs: WhyUsItem[] = [
    {
        icon: '🌲',
        title: 'Příroda na dosah',
        description: 'Všechny apartmány se nacházejí v srdci Šumavy s přímým přístupem k turistickým trasám a přírodním krásám.',
    },
    {
        icon: '✨',
        title: 'Čistota a komfort',
        description: 'Moderně vybavené apartmány s důrazem na čistotu a pohodlí našich hostů.',
    },
    {
        icon: '🏔️',
        title: 'Ideální poloha',
        description: 'Blízkost lyžařských areálů, turistických tras a přírodních památek. Perfektní výchozí bod pro výlety.',
    },
    {
        icon: '❤️',
        title: 'Rodinný přístup',
        description: 'Osobní péče a individuální přístup ke každému hostovi. Jsme tu pro vás.',
    },
];
