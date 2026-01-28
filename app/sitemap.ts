import { MetadataRoute } from 'next';
import { apartments } from '@/content/apartments';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.sumava-apartmany.cz';

    // Static routes
    const routes = [
        '',
        '/galerie',
        '/cenik',
        '/okoli',
        '/kontakt',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic apartment routes
    const apartmentRoutes = apartments.map((apartment) => ({
        url: `${baseUrl}/apartman/${apartment.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...routes, ...apartmentRoutes];
}
