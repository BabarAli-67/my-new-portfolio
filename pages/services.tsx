import Head from 'next/head';
import Services from '@/components/Home/Services';

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Babar Ali - Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Services offered by Babar Ali: Web Development, AI Integration, Mobile & PWA, and Consulting services." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Services | Babar Ali - Full-Stack Developer" />
        <meta property="og:description" content="Services offered: Web Development, AI Integration, Mobile & PWA, and Consulting." />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Services />
      </main>
    </>
  );
}

