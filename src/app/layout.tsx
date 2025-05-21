import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Holydais - Gestion de Dais Simplifiée",
  description: "Solution tout-en-un pour gérer efficacement vos dais et optimiser vos processus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}
        <Footer />
      </body>
    </html>
  );
}
