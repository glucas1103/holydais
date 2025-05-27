import "./globals.css";
import Footer from "@/components/layout/Footer";
import Head from 'next/head';

export const metadata = {
  title: "Holydais - Le constructeur d'agents IA",
  description: "Holydais est un outil de création d'agents IA pour vos équipes, sans code.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html lang="fr">
        <body>{children}
          <Footer />
        </body>
      </html>
    </>
  );
}
