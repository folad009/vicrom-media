import { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  image?: string;
  schemaJsonLd?: Record<string, unknown>;
};

const SITE_NAME = 'Vicrom Media Services';
const SITE_URL = 'https://vicromng.com';
const DEFAULT_IMAGE = '/images/homepage-banner.jpg';

function upsertMeta(
  type: 'name' | 'property',
  key: string,
  content: string
): HTMLMetaElement {
  let element = document.head.querySelector(
    `meta[${type}="${key}"]`
  ) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(type, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
  return element;
}

export default function Seo({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_IMAGE,
  schemaJsonLd,
}: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', 'index, follow');

    if (keywords) {
      upsertMeta('name', 'keywords', keywords);
    }

    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:image', `${SITE_URL}${image}`);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', `${SITE_URL}${image}`);

    let canonical = document.head.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    let schemaScript = document.head.querySelector(
      'script[data-seo-schema="true"]'
    ) as HTMLScriptElement | null;

    if (schemaJsonLd) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.type = 'application/ld+json';
        schemaScript.setAttribute('data-seo-schema', 'true');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schemaJsonLd);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, path, keywords, image, schemaJsonLd]);

  return null;
}
