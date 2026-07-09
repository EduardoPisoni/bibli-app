import "./globals.css";
import Header from './components/shared/header';
import Footer from './components/shared/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <html
        lang="pt-br"
        className={`h-full antialiased`}
      >
        <body className="min-h-full flex flex-col">
          <main>
            {children}
          </main>
        </body>
        <Footer />
      </html>
    </>
  );
}
