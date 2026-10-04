import type { Metadata } from 'next';
import './globals.css';
import { FOUNDER_INFO } from '@/data/portfolio-data';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.resence.in'),
  title: 'Piyush Singh — Founder & CEO of Resence | AI Systems Architect',
  description: 'Official portfolio and company hub of Piyush Singh (Piyush Thakur), Founder & CEO of Resence. Creator of Resence AI, WellBridge AI, RazorAgent MCP, and Google Student Ambassador (GSA \'26).',
  keywords: [
    'Piyush Singh',
    'Piyush Thakur',
    'Founder of Resence',
    'Resence',
    'Resence AI',
    'WellBridge AI',
    'RazorAgent',
    'ServeMATE',
    'Google Student Ambassador',
    'GSA 26',
    'AI Systems Architect',
    'GL Bajaj Institute of Management'
  ],
  authors: [{ name: 'Piyush Singh', url: 'https://www.resence.in' }],
  creator: 'Piyush Singh',
  publisher: 'Resence',
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://www.resence.in',
    title: 'Piyush Singh — Founder & CEO of Resence',
    description: 'Founder of Resence, AI Systems Architect, Google Student Ambassador (GSA \'26), and builder of next-generation AI platforms.',
    siteName: 'Resence',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piyush Singh — Founder & CEO of Resence',
    description: 'Founder of Resence, AI Systems Architect, Google Student Ambassador (GSA \'26).',
    creator: '@PiyushSingh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.resence.in',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdPerson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': 'https://www.resence.in/#founder',
    name: FOUNDER_INFO.name,
    alternateName: FOUNDER_INFO.alternateName,
    jobTitle: 'Founder & Chief Executive Officer',
    birthDate: FOUNDER_INFO.birthDate,
    description: FOUNDER_INFO.bio,
    url: 'https://www.resence.in',
    image: 'https://www.resence.in/piyush-singh.jpg',
    sameAs: [
      FOUNDER_INFO.github,
      FOUNDER_INFO.linkedin,
      'https://ai.resence.in',
      'https://wellbridgeai.resence.in',
      'https://razoragent.resence.in',
      'https://servemate.resence.in'
    ],
    worksFor: {
      '@type': 'Organization',
      '@id': 'https://www.resence.in/#organization',
      name: 'Resence',
      url: 'https://www.resence.in',
      logo: 'https://www.resence.in/logo.png',
      founder: {
        '@id': 'https://www.resence.in/#founder'
      }
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'GL Bajaj Institute of Management (GLBIM), Greater Noida',
      url: 'https://www.glbim.ac.in'
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'Model Context Protocol (MCP)',
      'Full-Stack Architecture',
      'Generative AI Systems',
      'Next.js & TypeScript'
    ]
  };

  const jsonLdOrg = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.resence.in/#organization',
    name: 'Resence',
    alternateName: 'Resence AI',
    url: 'https://www.resence.in',
    founder: {
      '@type': 'Person',
      name: 'Piyush Singh',
      url: 'https://www.resence.in'
    },
    foundingDate: '2026',
    description: 'Frontier AI technology company building multi-model intelligence platforms, multimodal medical tools, and agentic commerce protocols.',
    subOrganization: [
      {
        '@type': 'SoftwareApplication',
        name: 'Resence AI',
        url: 'https://ai.resence.in',
        applicationCategory: 'Multi-Model AI Assistant'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'WellBridge AI',
        url: 'https://wellbridgeai.resence.in',
        applicationCategory: 'Healthcare AI Application'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'RazorAgent MCP',
        url: 'https://razoragent.resence.in',
        applicationCategory: 'Agentic Commerce Protocol'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'ServeMATE',
        url: 'https://servemate.resence.in',
        applicationCategory: 'Social Impact Platform'
      }
    ]
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Who is the founder of Resence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Piyush Singh (also known as Piyush Thakur) is the Founder & CEO of Resence. He is an AI Systems Architect, Google Student Ambassador (GSA \'26, ID: 6403), and graduate of the Google Cloud Gen AI Academy.'
        }
      },
      {
        '@type': 'Question',
        name: 'Who is Piyush Singh?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Piyush Singh is the Founder & CEO of Resence, an AI Systems Architect, and creator of the Resence AI ecosystem, including Resence AI, WellBridge AI, RazorAgent MCP, and ServeMATE.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is Resence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Resence is a frontier AI technology company and multi-model ecosystem founded by Piyush Singh, engineering multi-model AI assistants, multimodal medical intelligence platforms, and Model Context Protocol (MCP) commerce rails.'
        }
      },
      {
        '@type': 'Question',
        name: 'What products are part of the Resence ecosystem?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Resence ecosystem includes Resence AI (ai.resence.in), WellBridge AI (wellbridgeai.resence.in), RazorAgent MCP (razoragent.resence.in), ServeMATE (servemate.resence.in), Resence Fitness (fitness.resence.in), and Anytime Converter (anytimeconverter.resence.in).'
        }
      }
    ]
  };

  const jsonLdWebSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.resence.in/#website',
    name: 'Resence',
    url: 'https://www.resence.in',
    description: 'Official ecosystem hub of Resence and founder portfolio of Piyush Singh.',
    publisher: {
      '@id': 'https://www.resence.in/#organization'
    }
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrg) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-[#070a12] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
