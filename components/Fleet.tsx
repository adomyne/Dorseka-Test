import Image from "next/image";

interface TruckStat {
  label: string;
  value: string;
}

interface TruckType {
  id: string;
  name: string;
  image: string;
  stats: [TruckStat, TruckStat, TruckStat, TruckStat];
}

const trucks: TruckType[] = [
  {
    id: "man-tgs",
    name: "Man TGS",
    image: "/assets/man-tgs.png",
    stats: [
      { label: "Kužavo ilgis", value: "6.5 m" },
      { label: "Kėlimo galia", value: "12 t" },
      { label: "Kranas max", value: "21 m" },
      { label: "Priekaba", value: "Yra" },
    ],
  },
  {
    id: "scania-r520",
    name: "Scania R520",
    image: "/assets/scania-r520.png",
    stats: [
      { label: "Kužavo ilgis", value: "7.2 m" },
      { label: "Kėlimo galia", value: "18 t" },
      { label: "Kranas max", value: "28 m" },
      { label: "Priekaba", value: "Yra" },
    ],
  },
  {
    id: "mercedes-benz",
    name: "Mercedes Benz",
    image: "/assets/mercedes-benz.png",
    stats: [
      { label: "Kužavo ilgis", value: "6.0 m" },
      { label: "Kėlimo galia", value: "10 t" },
      { label: "Kranas max", value: "18 m" },
      { label: "Priekaba", value: "Nėra" },
    ],
  },
  {
    id: "renault-t",
    name: "Renault T",
    image: "/assets/renault-t.png",
    stats: [
      { label: "Kužavo ilgis", value: "7.5 m" },
      { label: "Kėlimo galia", value: "15 t" },
      { label: "Kranas max", value: "24 m" },
      { label: "Priekaba", value: "Yra" },
    ],
  },
];

export function Fleet() {
  return (
    <section className="w-full bg-[#fafafa] rounded-[32px] px-6 sm:px-12 py-16 sm:py-24 max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-[96px]">
        <div className="flex flex-col gap-4">
          <p className="text-[#e85d01] uppercase tracking-[1.4px] text-sm font-medium font-title">
            Parkas
          </p>
          <h2 className="text-[#171717] text-4xl sm:text-5xl font-bold tracking-tight font-display">
            Mūsų Technika
          </h2>
        </div>
        <div className="max-w-[450px]">
          <p className="text-[#525252] text-base leading-relaxed font-body">
            Nuolatos atnaujinamas ir prižiūrimas transporto parkas, atitinkantis aukščiausius saugumo standartus.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-[120px] gap-y-16 lg:gap-y-[96px]">
        {trucks.map((truck) => (
          <div key={truck.id} className="flex flex-col w-full">
            <div className="relative w-full aspect-[16/10] flex items-center justify-center mb-8">
              <div className="absolute inset-x-[10%] bottom-[5%] h-8 z-0">
                <Image src="/assets/ellipse.svg" alt="" fill className="object-contain" />
              </div>
              <div className="relative z-10 w-full h-full">
                <Image
                  src={truck.image}
                  alt={truck.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="space-y-6 lg:space-y-12 sm:pl-8">
              <h3 className="text-2xl font-bold text-[#171717] font-display">
                {truck.name}
              </h3>
              
              <div className="grid grid-cols-2 gap-y-6 lg:gap-y-10 gap-x-8">
                {truck.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1">
                    <p className="text-xs uppercase tracking-[0.6px] text-[#737373] font-body">
                      {stat.label}
                    </p>
                    <p className="text-lg font-medium text-[#171717] font-body">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
