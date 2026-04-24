import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative w-full bg-[#ffffff] overflow-hidden mt-12 md:mt-24">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-[rgba(232,93,1,0.1)] rounded-full blur-[120px] opacity-70 pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-12 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">

          <div className="flex flex-col gap-12">
            <div className="space-y-4">
              <h2 className="text-[#171717] text-4xl sm:text-[48px] leading-[1.25] font-bold tracking-tight font-display pt-4 pb-2 px-4">
                Gaukite pasiūlymą <span className="block text-[#e85d01]">Šiandien</span>
              </h2>
              <p className="font-body text-[#525252] text-base leading-relaxed max-w-md">
                Užpildykite užklausą ir mes susisieksime su Jumis per 30 minučių su tiksliu kainos pasiūlymu.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#e5e5e5] flex items-center justify-center text-[#e85d01]">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-xs font-normal uppercase tracking-[1.2px] text-[#737373]">
                    Skambinkite mums
                  </span>
                  <span className="font-display font-bold text-xl tracking-[0.5px] text-[#171717]">
                    +370 600 00000
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-[#e5e5e5] flex items-center justify-center text-[#e85d01]">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="font-body text-xs font-normal uppercase tracking-[1.2px] text-[#737373]">
                    Rašykite el. paštu
                  </span>
                  <span className="font-display font-bold text-xl tracking-[0.5px] text-[#171717]">
                    info@dorseka.lt
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border-[#e5e5e5] border-[0.8px] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] p-8 sm:p-12 w-full max-w-md mx-auto lg:ml-auto">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 relative">
                <label className="font-body text-xs font-medium uppercase tracking-[0.6px] text-[#737373]">
                  Vardas Pavardė
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e85d01] rounded-l-md" />
                  <input
                    type="text"
                    placeholder="Jūsų vardas"
                    className="w-full bg-[#f5f5f5] rounded-lg px-4 py-4 pl-6 text-[#171717] outline-none focus:ring-2 focus:ring-[#e85d01]/50 placeholder:text-[#171717]/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-body text-xs font-medium uppercase tracking-[0.6px] text-[#737373]">
                  El. Paštas
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e85d01] rounded-l-md" />
                  <input
                    type="email"
                    placeholder="pavyzdys@pastas.lt"
                    className="w-full bg-[#f5f5f5] rounded-lg px-4 py-4 pl-6 text-[#171717] outline-none focus:ring-2 focus:ring-[#e85d01]/50 placeholder:text-[#171717]/50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative">
                <label className="font-body text-xs font-medium uppercase tracking-[0.6px] text-[#737373]">
                  Žinutė
                </label>
                <div className="relative">
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#e85d01] rounded-l-md" />
                  <textarea
                    rows={4}
                    placeholder="Kokia technika Jus domina?"
                    className="w-full bg-[#f5f5f5] rounded-lg px-4 py-4 pl-6 text-[#171717] outline-none focus:ring-2 focus:ring-[#e85d01]/50 placeholder:text-[#171717]/50 resize-none"
                  />
                </div>
              </div>

              <Button className="w-full bg-[#e85d01] hover:bg-[#d15200] text-white font-display font-bold uppercase tracking-[0.4px] text-base py-7 rounded-lg mt-4">
                Siųsti užklausą
              </Button>
            </form>
          </div>

        </div>

        <div className="flex flex-col gap-6 items-center md:items-start">
          <div className="flex items-center">
            <Image
              src="/assets/Logo.svg"
              alt="Logo"
              width={150}
              height={40}
              className="object-contain"
            />
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {["Mūsų Technika", "Paslaugos", "Aptarnavimas", "Kontaktai"].map((item) => (
              <a key={item} href="#" className="font-body text-[#525252] text-sm hover:text-[#e85d01] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <p className="font-body text-[#737373] text-sm text-center md:text-right">
            © 2026 Dorseka. Visos teisės saugomos.
          </p>
        </div>
      </div>
    </footer >
  );
}
