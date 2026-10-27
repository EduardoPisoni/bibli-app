import type { Metadata } from 'next';
import "./globals.css";
import Header from './components/shared/header';
import Footer from './components/shared/footer';
import JsonLd from './components/shared/jsonLd';
import { GoogleAnalytics } from '@next/third-parties/google';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from './_config/site';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | Bibliotecária`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-5VBBWP9WTE" />
    </html>
  );
}
