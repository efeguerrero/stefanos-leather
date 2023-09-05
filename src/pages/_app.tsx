import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, Raleway } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
