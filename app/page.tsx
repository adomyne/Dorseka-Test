import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Fleet } from "@/components/Fleet";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { client } from "@/sanity/lib/client";
import { galleryQuery, fleetQuery, pricingQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const [galleryData, fleetData, pricingData] = await Promise.all([
    client.fetch(galleryQuery),
    client.fetch(fleetQuery),
    client.fetch(pricingQuery),
  ]);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center bg-white pb-0">
        <Hero />
        <div id="mūsų-technika" className="w-full px-20 mb-4 mt-16">
          <Fleet trucks={fleetData} />
        </div>
        <div id="paslaugos" className="w-full px-20 mb-4 mt-8">
          <Services />
        </div>
        <div className="w-full px-20 mb-4 mt-8">
          <Gallery images={galleryData} />
        </div>
        <div className="w-full px-20 mb-4 mt-8">
          <Pricing items={pricingData} />
        </div>
      </main>
      <div id="kontaktai">
        <Footer />
      </div>
    </>
  );
}
