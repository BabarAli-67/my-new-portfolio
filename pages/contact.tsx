import Head from 'next/head';
import Contact from '@/components/Home/Contact';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact | Babar Ali - Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Get in touch with Babar Ali for collaborations, projects, or inquiries. Full-stack developer and AI enthusiast." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Contact | Babar Ali - Full-Stack Developer" />
        <meta property="og:description" content="Get in touch for collaborations, projects, or inquiries." />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Contact />
      </main>
    </>
  );
}

