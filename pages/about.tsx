import Head from 'next/head';
import AboutPage from '@/components/Pages/About';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Babar Ali - Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Learn more about Babar Ali - Full-Stack Developer and AI enthusiast. Education, skills, and experience in React, Next.js, Django, and AI integration." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="About | Babar Ali - Full-Stack Developer" />
        <meta property="og:description" content="Learn more about Babar Ali - Full-Stack Developer and AI enthusiast." />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <AboutPage />
      </main>
    </>
  );
}

