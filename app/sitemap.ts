import type { MetadataRoute } from 'next';
import { SITE_URL } from './_config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/servicos', '/atendimento', '/sobre', '/contato'].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
  }));
}
