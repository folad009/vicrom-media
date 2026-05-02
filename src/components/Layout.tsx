import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import Seo from './Seo';

export default function Layout() {
  const location = useLocation();
  const routeSeo = {
    '/': {
      title: 'Creative Branding and Marketing Agency',
      description:
        'Vicrom Media Services helps brands grow through strategic marketing communication, branding, digital campaigns, print production, and media relations.',
      keywords:
        'Vicrom Media, branding agency Lagos, marketing communication, digital marketing Nigeria, print production',
      image: '/images/homepage-banner.jpg',
    },
    '/about': {
      title: 'About Vicrom Media Services',
      description:
        'Learn about Vicrom Media Services, a team of seasoned marketing communication and branding professionals with over 25 years of experience.',
      keywords:
        'about Vicrom Media, branding experts Nigeria, marketing communications team',
      image: '/images/about-vicrom-bg.jpg',
    },
    '/services': {
      title: 'Marketing and Branding Services',
      description:
        'Explore our services including concept development, digital marketing, strategic planning, branding, print production, and media content support.',
      keywords:
        'branding services, digital marketing services, strategic planning, print production Lagos',
      image: '/images/service-vicrom-bg.jpg',
    },
    '/work': {
      title: 'Portfolio and Project Showcase',
      description:
        'View selected portfolio projects delivered by Vicrom Media Services across branding, production, and marketing communication campaigns.',
      keywords:
        'portfolio, branding projects, marketing campaigns, Vicrom work',
      image: '/images/work-vicrom-bg.jpg',
    },
    '/blog': {
      title: 'Journal and Insights',
      description:
        'Read insights and updates from Vicrom Media Services on design, branding, marketing strategy, and digital communication trends.',
      keywords: 'marketing blog, branding insights, web design trends, agency journal',
      image: '/images/homepage-banner.jpg',
    },
    '/contact': {
      title: 'Contact Vicrom Media Services',
      description:
        'Get in touch with Vicrom Media Services for branding, marketing communication, and production support for your next project.',
      keywords:
        'contact branding agency, Vicrom email, marketing agency Lagos contact',
      image: '/images/homepage-banner.jpg',
    },
  } as const;

  const seo =
    routeSeo[location.pathname as keyof typeof routeSeo] ?? routeSeo['/'];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const scrollToId = () =>
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      requestAnimationFrame(scrollToId);
      const t = window.setTimeout(scrollToId, 150);
      return () => window.clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        image={seo.image}
        path={location.pathname === '/' ? '/' : location.pathname.replace(/\/+$/, '')}
        schemaJsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Vicrom Media Services',
          url: 'https://vicromng.com',
          email: 'info@vicromng.com',
          telephone: '+2348077807105',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '31, Olatilewa Street, Lawanson-Ikate',
            addressLocality: 'Surulere',
            addressRegion: 'Lagos',
            addressCountry: 'NG',
          },
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
