import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[500px] w-full items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute right-0 top-0 h-full w-full md:w-[58%] opacity-100 -scale-x-100">
          <Image
            src="/assets/hero-bgg.jpg"
            alt="Dorseka Kranai"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1200px] mx-auto py-16">
        <div className="max-w-xl space-y-6">
          <h1 className="font-display text-[42px] md:text-[56px] font-bold leading-[1.05] tracking-tight text-[#171717] uppercase">
            Kranų Nuoma, Kuria{" "}
            <span className="text-[#e85d01] block">Galite Pasitikėti</span>
          </h1>
          <p className="font-body text-base md:text-lg font-normal text-[#404040] max-w-md">
            Sunkioji technika sudėtingiems projektams. Dirbame visoje Lietuvoje 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button className="bg-[#e85d01] font-display text-sm font-bold uppercase tracking-[0.9px] text-white hover:bg-[#d15200] rounded-lg px-8 py-6">
              Skambinkite dėl kainos
            </Button>
            <Button
              variant="secondary"
              className="bg-transparent border border-[#d4d4d4] font-display text-sm font-bold uppercase tracking-[0.9px] text-[#171717] hover:bg-[#f0f0f0] rounded-lg px-8 py-6"
            >
              Paslaugų sąrašas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
