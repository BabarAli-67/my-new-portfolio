import Head from 'next/head';
import Blog from '@/components/Home/Blog';

export default function BlogPage() {
  return (
    <>
      <Head>
        <title>Blog | Babar Ali - Full-Stack Developer & AI Enthusiast</title>
        <meta name="description" content="Read blog posts by Babar Ali about AI integration, web development, and full-stack development insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Blog | Babar Ali - Full-Stack Developer" />
        <meta property="og:description" content="Read blog posts about AI integration, web development, and full-stack development." />
        <meta property="og:image" content="/images/logo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Blog showViewMore={false} />
      </main>
    </>
  );
}

