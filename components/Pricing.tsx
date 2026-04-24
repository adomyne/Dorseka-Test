import Image from "next/image";

interface PricingItem {
  _id: string;
  label: string;
  price: string;
  priceWithTrailer?: string;
}

interface PricingProps {
  items: PricingItem[];
}

export function Pricing({ items }: PricingProps) {
  return (
    <section className="w-full bg-[#fafafa] rounded-[32px] px-6 sm:px-12 py-24 sm:pt-16 sm:pb-8 max-w-[1200px] mx-auto overflow-hidden mt-12 md:mt-24">

      {/* Title + description — full width above both columns */}
      <div className="space-y-4 mb-12">
        <h2 className="text-[#171717] text-4xl sm:text-[48px] font-bold tracking-tight font-display">
          Skaidrūs Įkainiai
        </h2>
        <p className="font-body text-[#525252] text-base leading-relaxed max-w-md">
          Mūsų kainodara yra aiški ir be paslėptų mokesčių. Galime pasiūlyti lanksčius sprendimus ilgalaikei nuomai.
        </p>
      </div>

      {/* Two columns: table | map */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

        {/* LEFT: table + quote */}
        <div className="flex flex-col gap-8">

          {/* Table */}
          <div className="flex flex-col gap-2 w-full">
            <div className="grid grid-cols-[1fr_130px_130px] w-full px-4 pb-2">
              <span className="font-body text-xs uppercase tracking-widest text-[#525252]">Paslauga</span>
              <span className="font-body text-xs uppercase tracking-widest text-[#525252]">Be priekabos</span>
              <span className="font-body text-xs uppercase tracking-widest text-[#525252]">Su priekaba</span>
            </div>

            {items.map((item) => (
              <div key={item._id} className="grid grid-cols-[1fr_130px_130px] w-full items-center bg-white border-[#e5e5e5] border-[0.8px] rounded-2xl px-4 py-5 shadow-sm">
                <span className="font-display font-bold text-base text-[#171717]">
                  {item.label}
                </span>
                <span className="font-display font-bold text-lg text-[#e85d01]">
                  {item.price}
                </span>
                <span className="font-display font-bold text-lg text-[#e85d01]">
                  {item.priceWithTrailer ?? '—'}
                </span>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="relative overflow-hidden bg-[rgba(232,93,1,0.05)] rounded-2xl p-8 flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#e85d01]" />
            <p className="font-body italic font-medium text-base text-[#525252]">
              "Geriausias kainos ir kokybės santykis kranų nuomos rinkoje Lietuvoje."
            </p>
          </div>
        </div>

        {/* RIGHT: map */}
        <div className="relative w-full aspect-square max-h-[504px] bg-[#fafafa] rounded-[32px] flex items-center justify-center">

          <Image
            src="/assets/map.svg"
            alt="Aptarnavimo Teritorija Lietuvoje"
            fill
            className="object-contain"
          />
          <div className="absolute top-[64%] left-[70.5%] -mt-4 -ml-4 flex items-center justify-center z-10">
            {/* Outer ring */}
            <div
              className="absolute rounded-full border-2 border-[#e85d01] opacity-20 animate-ping-slow"
              style={{ width: 90, height: 90 }}
            />

            {/* Middle ring */}
            <div
              className="absolute rounded-full border-2 border-[#e85d01] opacity-15 animate-ping-slow"
              style={{ width: 70, height: 70 }}
            />

            {/* Inner ring */}
            <div
              className="absolute rounded-full border-2 border-[#e85d01] opacity- 10 animate-ping-slow"
              style={{ width: 50, height: 50 }}
            />

            {/* Center dot */}
            <div className="relative w-4 h-4 rounded-full bg-[#e85d01] shadow-[0_0_10px_#e85d01]" />
          </div>

        </div>

      </div>
    </section>
  );
}