'use client';

import dynamic from 'next/dynamic';

const ContactMap = dynamic(() => import('./ContactMap'), {
    ssr: false,
    loading: () => <div className="h-[500px] w-full bg-gray-100 animate-pulse rounded-xl" />
});

export default ContactMap;
