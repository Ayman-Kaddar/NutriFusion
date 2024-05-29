
import "@/styles/globals.css";
import Footer from "@/components/molecules/footer/footer";
import CookieConsent from "@/components/elements/cookieConsent/cookieConsent";


export const metadata = {
  title: "50 Recetas Saludables y Fáciles para Comer Bien en Casa",
  description: "Comer bien es posible. Estas 50 recetas saludables lo demuestran. Sin demasiadas complicaciones y con ingredientes que seguramente tengas en casa, podrás elaborar platos sanos y deliciosos. ", 
  icons: {  
    icon: "../favicon.ico",
  },
  referrer: "origin-when-cross-origin",
  keywords: [
    "recetas saludables",
    "ecetas fáciles",
    "comida sana",
    "platos caseros",
    "alimentación saludable",
    "cocina sencilla",
    "ingredientes caseros",
    "recetas deliciosas",
    "comer bien",
    "salud y nutrición",
    "recetas rápidas", 
    "cocina saludable", 
    "recetas sin complicaciones",
    "cocina casera",
    "recetas nutritivas", 
    "recetas ligeras", 
    "platos saludables",
    "recetas económicas",
    "comer saludable",
    "recetas equilibradas",
    "comida casera fácil", 
    "recetas de cocina",
    "alimentación balanceada", 
    "recetas para toda la familia",
    "recetas fáciles y rápidas",
    "cocina fácil",
    "comida nutritiva", 
    "menús saludables",
    "recetas para el día a día", 
    "cocina sana"
    
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
    canonical: "https://mirecetasaludable.es",
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
