import { companyContacts, companyLegal } from './data/company';
import { canonicalPath, origin, pages } from './seo';

/** Describe only documented public facts (src/data/company.ts); no invented prices or ratings. */
export function structuredData(path: string) {
  const route = canonicalPath(path);
  const page = pages.find(item => canonicalPath(item.canonicalPath) === route);
  if (!page) return null;
  const graph: Record<string, unknown>[] = [{
    '@type': 'WebPage', '@id': origin + route + '#webpage',
    url: origin + route, name: page.title, description: page.description,
    inLanguage: 'ru-RU', isPartOf: { '@id': origin + '/#website' },
  }];
  if (route === '/') graph.push(
    {
      '@type': 'Organization', '@id': origin + '/#organization', name: 'Lexicom', url: origin + '/',
      legalName: companyLegal.shortName, taxID: companyLegal.inn,
      email: companyContacts.email, telephone: companyContacts.phone,
      address: { '@type': 'PostalAddress', addressCountry: 'RU', streetAddress: companyLegal.address },
    },
    { '@type': 'WebSite', '@id': origin + '/#website', name: 'Lexicom', url: origin + '/', inLanguage: 'ru-RU', publisher: { '@id': origin + '/#organization' } },
  );
  return { '@context': 'https://schema.org', '@graph': graph };
}

export function serializeStructuredData(path: string) {
  const data = structuredData(path);
  return data ? JSON.stringify(data).replace(/</g, '\\u003c') : '';
}
