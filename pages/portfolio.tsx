import Head from 'next/head';
import Portfolio from '@/components/Home/Portfolio';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Portfolio | Babar Ali - Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Explore Babar Ali's portfolio projects including HAWALAY, SkillPort, and more. Full-stack web applications and AI-driven solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Portfolio | Babar Ali - Full-Stack Developer" />
        <meta property="og:description" content="Explore Babar Ali's portfolio projects including HAWALAY, SkillPort, and more." />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Portfolio />
      </main>
    </>
  );
}

