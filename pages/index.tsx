import Head from 'next/head';
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Services from '@/components/Home/Services';
import Portfolio from '@/components/Home/Portfolio';
import Blog from '@/components/Home/Blog';
import Skills from '@/components/Home/Skills';
import Testimonials from '@/components/Home/Testimonials';
import Contactform from '@/components/Home/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Babar Ali | Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Portfolio of Babar Ali – Full-Stack Developer and AI enthusiast. Showcasing projects, skills, and technical expertise." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Babar Ali, Full-Stack Developer, AI Enthusiast, React, Next.js, Django, Python, Portfolio" />
        <meta name="author" content="Babar Ali" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://babarali.dev/" />
        <meta property="og:title" content="Babar Ali | Full-Stack Developer & AI Enthusiast" />
        <meta property="og:description" content="Portfolio of Babar Ali – Full-Stack Developer and AI enthusiast. Showcasing projects, skills, and technical expertise." />
        <meta property="og:image" content="/images/logo.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://babarali.dev/" />
        <meta property="twitter:title" content="Babar Ali | Full-Stack Developer & AI Enthusiast" />
        <meta property="twitter:description" content="Portfolio of Babar Ali – Full-Stack Developer and AI enthusiast. Showcasing projects, skills, and technical expertise." />
        <meta property="twitter:image" content="/images/logo.png" />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Skills />
        <Testimonials />
        <Contactform />
      </main>
    </>
  );
}
