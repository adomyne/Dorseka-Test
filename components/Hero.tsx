import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] md:min-h-[854px] w-full items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden bg-white">
        <div className="absolute right-0 top-0 h-full w-full md:w-3/4 opacity-20 -scale-x-100">
          <Image
            src="/assets/hero-bg.png"
            alt="Dorseka Kranai"
            fill
            className="object-cover object-right"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:w-2/3" />
      </div>

      <div className="relative z-10 w-full px-6 md:px-12 max-w-[1200px] mx-auto">
        <div className="max-w-2xl space-y-8">
          <h1 className="font-display text-5xl md:text-[72px] font-bold leading-[1.05] tracking-tight text-[#171717] uppercase">
            Kranų Nuoma, Kuria <span className="text-[#e85d01] block">Galite Pasitikėti</span>
          </h1>
          <p className="font-body text-lg md:text-xl font-normal text-[#404040] max-w-lg">
            Sunkioji technika sudėtingiems projektams. Dirbame visoje Lietuvoje 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              className="bg-[#e85d01] font-display text-lg font-bold uppercase tracking-[0.9px] text-white hover:bg-[#d15200] rounded-lg px-8 py-7"
            >
              Skambinkite dėl kainos
            </Button>
            <Button
              variant="outline"
              className="bg-[#f5f5f5] border-[#e5e5e5] font-display text-lg font-bold uppercase tracking-[0.9px] text-[#171717] hover:bg-[#e5e5e5] rounded-lg px-8 py-7"
            >
              Paslaugų sąrašas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
