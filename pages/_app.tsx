import type { AppProps } from 'next/app';
import { Inter } from "next/font/google";
import '../app/globals.css';
import Header from '@/components/Layout/Header';
import Footer from '@/components/Layout/Footer';
import { ThemeProvider } from 'next-themes';
import Aoscompo from '@/utils/aos';
import NextTopLoader from 'nextjs-toploader';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <NextTopLoader />
      <ThemeProvider
        attribute="class"
        enableSystem={true}
        defaultTheme="system"
      >
        <Aoscompo>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <WhatsAppButton />
        </Aoscompo>
      </ThemeProvider>
    </div>
  );
}
