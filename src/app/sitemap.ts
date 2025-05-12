import { MetadataRoute } from 'next';

const cities = [
  'san-diego',
  'chula-vista',
  'el-cajon',
  'escondido',
  'la-mesa',
  'national-city',
  'oceanside',
  'carlsbad',
  'poway',
  'santee'
];

const services = [
  'demolition',
  'excavation',
  'dumpster-rentals',
  'concrete-washouts'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://crmconstruction.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Service pages
  const servicePages = services.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic service-city pages
  const dynamicPages = services.flatMap(service =>
    cities.map(city => ({
      url: `${baseUrl}/services/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))
  );

  return [...staticPages, ...servicePages, ...dynamicPages];
} 