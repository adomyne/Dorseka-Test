import Image from "next/image";
import { Button } from "@/components/ui/button";

const pricingItems = [
  { label: "Kranai iki 30t", price: "nuo 40€/val" },
  { label: "Kranai virš 30t", price: "nuo 65€/val" },
  { label: "Transportavimas", price: "nuo 1.5€/km" },
  { label: "Skubus iškvietimas", price: "nuo 50€" },
];

export function Pricing() {
  return (
    <section className="w-full bg-[#fafafa] rounded-[32px] px-6 sm:px-12 py-16 sm:py-24 max-w-[1200px] mx-auto overflow-hidden mt-12 md:mt-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        <div className="flex flex-col gap-12">
          <div className="space-y-4">
            <h2 className="text-[#171717] text-4xl sm:text-[48px] font-bold tracking-tight font-display">
              Skaidrūs Įkainiai
            </h2>
            <p className="font-body text-[#525252] text-base leading-relaxed max-w-md">
              Mūsų kainodara yra aiški ir be paslėptų mokesčių. Galime pasiūlyti lanksčius sprendimus ilgalaikei nuomai.
            </p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            {pricingItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between bg-white border-[#e5e5e5] border-[0.8px] rounded-2xl px-6 sm:px-8 py-6 shadow-sm">
                <span className="font-display font-bold text-lg text-[#171717]">
                  {item.label}
                </span>
                <span className="font-display font-bold text-xl text-[#e85d01]">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="relative overflow-hidden bg-[rgba(232,93,1,0.05)] rounded-2xl p-8 flex items-center mt-2">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e85d01]" />
            <p className="font-body italic font-medium text-base text-[#525252]">
              "Geriausias kainos ir kokybės santykis kranų nuomos rinkoje Lietuvoje."
            </p>
          </div>
        </div>

        <div className="relative w-full aspect-square max-h-[600px] bg-[#eae6e0] rounded-[32px] ...">
          <div className="relative w-full aspect-square max-h-[600px] bg-[#eae6e0] rounded-[32px] overflow-hidden flex items-center justify-center">
            <Image
              src="/assets/map.png"
              alt="Aptarnavimo Teritorija Lietuvoje"
              fill
              className="object-contain"
            />
            {/* marker */}
            <div className="absolute top-1/2 left-1/2 -mt-4 -ml-4 w-8 h-8 flex items-center justify-center z-10 animate-pulse">
              <div className="absolute inset-0 rounded-full bg-[#e85d01] opacity-30 shadow-[0_0_20px_#e85d01] scale-150" />
              <div className="relative w-4 h-4 rounded-full bg-[#e85d01] shadow-[0_0_10px_#e85d01]" />
            </div>
          </div>
          {/* Simple marker approximation from Figma context */}
          <div className="absolute top-1/2 left-1/2 -mt-4 -ml-4 w-8 h-8 flex items-center justify-center z-10 animate-pulse">
            <div className="absolute inset-0 rounded-full bg-[#e85d01] opacity-30 shadow-[0_0_20px_#e85d01] scale-150" />
            <div className="relative w-4 h-4 rounded-full bg-[#e85d01] shadow-[0_0_10px_#e85d01]" />
          </div>
        </div>

      </div>
    </section>
  );
}
