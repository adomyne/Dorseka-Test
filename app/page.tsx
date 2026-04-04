import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center bg-white pb-0">
        <Hero />
        <div id="mūsų-technika" className="w-full px-4 md:px-0">
          <Fleet />
        </div>
        <div id="paslaugos" className="w-full px-4 md:px-0 mt-8">
          <Services />
        </div>
        <div className="w-full px-4 md:px-0">
          <Gallery />
        </div>
        <div className="w-full px-4 md:px-0">
          <Pricing />
        </div>
      </main>
      <div id="kontaktai">
        <Footer />
      </div>
    </>
  );
}
