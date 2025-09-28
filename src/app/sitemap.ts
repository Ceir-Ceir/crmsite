import { MetadataRoute } from 'next';

const baseUrl = 'https://crmco.us';

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

const serviceLandingPages = [
  { path: '/services/asphalt-paving', priority: 0.95 },
  { path: '/services/demolition-excavation', priority: 0.9 },
  { path: '/services/washouts-dumpster', priority: 0.85 },
  { path: '/services/trucking-deliveries', priority: 0.85 },
  { path: '/services/general-engineering', priority: 0.85 }
];

const dynamicServiceSlugs = [
  'asphalt-paving',
  'demolition',
  'excavation',
  'dumpster-rentals',
  'concrete-washouts'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7
    }
  ];

  const servicePages = serviceLandingPages.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority
  }));

  const dynamicPages = dynamicServiceSlugs.flatMap(service =>
    cities.map(city => ({
      url: `${baseUrl}/services/${service}/${city}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: service === 'asphalt-paving' ? 0.9 : 0.7
    }))
  );

  return [...staticPages, ...servicePages, ...dynamicPages];
}
