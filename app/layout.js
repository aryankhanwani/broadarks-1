import { Inter, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Cursor from "@/components/Cursor";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://broadarks.com"),
  title: {
    default: "BroadArks — Building human possibility for a technology-shaped future",
    template: "%s · BroadArks",
  },
  description:
    "Founded in 2020 by Pankaj and Dr. Kaveri Dutta, BroadArks brings enterprise, technology and human development under one shared ambition — meaningful progress for people, businesses and communities.",
  openGraph: {
    title: "BroadArks",
    description: "Building human possibility for a technology-shaped future.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${instrument.variable}`}>
      <body>
        <SmoothScroll>
          <ScrollProgress />
          <Cursor />
          <Header />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
