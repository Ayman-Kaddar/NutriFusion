
import "@/styles/globals.css";
import Footer from "@/components/molecules/footer/footer";
import CookieConsent from "@/components/elements/cookieConsent/cookieConsent";


export const metadata = {
  title: "Explora Cataluña: Descubre sus Tesoros y Encanto",
  description: "Explora Catalunya i submergeix-te en una experiència única. Des de les platges daurades de la Costa Brava fins a les majestuoses muntanyes de Montserrat, aquesta regió et captivarà. Endinsa't en la història romana de Tarragona i deixa't inspirar per la creativitat surrealista de Figueres. Benvingut a un viatge inoblidable ple d'encant i diversitat!", 
  icons: {  
    icon: "../favicon.ico",
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "Cataluña",
    "Costa Brava",
    "Montserrat",
    "Tarragona",
    "Figueres",
    "Playas doradas",
    "Montañas majestuosas",
    "Historia romana",
    "Creatividad surrealista",
    "Viaje inolvidable",
    "Encanto",
    "Diversidad",
    "Turismo en Cataluña",
    "Lugares emblemáticos de Cataluña",
    "Destinos turísticos en España",
    "Cultura catalana",
    "Gastronomía catalana",
    "Actividades al aire libre en Cataluña",
    "Arte y arquitectura en Cataluña",
    "Tradiciones catalanas",
    "Viajes de aventura en Cataluña",
    "Rutas turísticas en Cataluña",
    "Vacaciones en la Costa Brava",
    "Excursiones a Montserrat",
    "Visitas guiadas en Tarragona",
    "Eventos culturales en Cataluña",
    "Patrimonio histórico de Cataluña",
    "Naturaleza en Cataluña",
    "Turismo sostenible en Cataluña",
    "Alojamientos en Cataluña",
    "Transporte en Cataluña",
  ],
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://queverencatalunya.es",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="es" className="scroll-smooth">
      <body>
        <main>{children}</main>
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
