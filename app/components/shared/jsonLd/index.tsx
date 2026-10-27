import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/app/_config/site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#mariana`,
      name: SITE_NAME,
      jobTitle: 'Bibliotecária',
      image: `${SITE_URL}/images/Mariana.png`,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      url: SITE_URL,
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#servico`,
      name: `${SITE_NAME} | Bibliotecária`,
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      image: `${SITE_URL}/images/Mariana.png`,
      email: CONTACT.email,
      telephone: CONTACT.phone,
      founder: { '@id': `${SITE_URL}/#mariana` },
      areaServed: [
        { '@type': 'City', name: 'Porto Alegre' },
        { '@type': 'City', name: 'Novo Hamburgo' },
        { '@type': 'AdministrativeArea', name: 'Região Metropolitana de Porto Alegre' },
        { '@type': 'City', name: 'Caxias do Sul' },
        { '@type': 'Country', name: 'Brasil' },
      ],
      knowsAbout: [
        'Biblioteconomia',
        'Catalogação',
        'Classificação de acervos',
        'Organização de bibliotecas',
        'Gestão de acervos',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Serviços',
        itemListElement: [
          'Processamento técnico',
          'Organização física do acervo',
          'Consultoria e diagnósticos',
          'Gestão contínua do acervo',
        ].map((name) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name },
        })),
      },
    },
  ],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
      }}
    />
  );
};
