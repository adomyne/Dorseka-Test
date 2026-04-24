import Image from "next/image";

interface TruckStat {
  label: string;
  value: string;
}

interface TruckType {
  _id: string;
  name: string;
  imageUrl: string;
  stats: TruckStat[];
}

interface FleetProps {
  trucks: TruckType[];
}

export function Fleet({ trucks }: FleetProps) {
  return (
    <section className="w-full bg-[#fafafa] rounded-[32px] px-6 sm:px-12 py-16 sm:pt-24 sm:pb-30 max-w-[1000px] mx-auto overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 md:mb-[96px]">
        <div className="flex flex-col gap-4">
          <p className="text-[#e85d01] uppercase tracking-[1.4px] text-sm font-medium font-title">
            Parkas
          </p>
          <div className="space-y-4">
            <h2 className="text-[#171717] text-3xl sm:text-[42px] font-bold tracking-tight font-display">
              Mūsų Technika
            </h2>
          </div>
        </div>
        <div className="max-w-[450px]">
          <p className="text-[#525252] text-base leading-relaxed font-body">
            Nuolatos atnaujinamas ir prižiūrimas transporto parkas, atitinkantis aukščiausius saugumo standartus.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-[120px] gap-y-16 lg:gap-y-[96px]">
        {trucks.map((truck) => (
          <div key={truck._id} className="flex flex-col w-full items-center">
            <div className="relative w-full aspect-[16/10] flex items-center justify-center mb-8">
              <div className="absolute inset-x-[20%] bottom-[13%] h-8 z-0">
                <Image src="/assets/ellipse.svg" alt="" fill className="object-contain" />
              </div>
              {truck.imageUrl && (
                <div className="relative z-10 w-[85%] h-[85%]">
                  <Image
                    src={truck.imageUrl}
                    alt={truck.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>

            <div className="space-y-6 lg:space-y-12">
              <h3 className="text-2xl font-bold text-[#171717] font-display">
                {truck.name}
              </h3>

              <div className="grid grid-cols-2 gap-y-6 lg:gap-y-10 gap-x-8">
                {truck.stats?.map((stat, i) => (
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