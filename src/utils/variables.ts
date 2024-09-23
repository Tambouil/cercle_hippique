import ogImageSrc from '@images/social.png';

export const SITE = {
  title: 'Cercle Hippique de Gouvieux',
  tagline: 'Centre équestre familial orienté vers le loisir',
  description: 'Centre équestre familial orienté vers le loisir, offrant cours pour tous les niveaux et pensions',
  description_short: 'Centre équestre familial orienté vers le loisir, offrant cours pour tous les niveaux et pensions',
  url: 'https://cerclehippiquedegouvieux.com/',
  author: 'Valentin Berceaux',
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    inLanguage: 'fr_FR',
    '@id': SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      '@type': 'WebSite',
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: 'fr_FR',
  type: 'website',
  url: SITE.url,
  title: `${SITE.title}: : Cercle Hippique de Gouvieux`,
  description: 'Centre équestre familial orienté vers le loisir, offrant cours pour tous les niveaux et pensions',
  image: ogImageSrc,
};
