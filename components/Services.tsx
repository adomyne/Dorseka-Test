import Image from "next/image";
import Link from "next/link";
import { Layers, HardHat, Clock, Truck } from "lucide-react";

const mainServices = [
  {
    title: "Kranų Nuoma",
    description: "Profesionalių kranų nuoma įvairiems statybos ir pramonės projektams.",
    image: "/assets/kranu-nuoma.png",
    href: "#",
  },
  {
    title: "Transportavimo Paslaugos",
    description: "Specializuotos sunkiosios ir negabaritinių krovinių pervežimas.",
    image: "/assets/transport-paslaugos.png",
    href: "#",
  },
];

const features = [
  {
    title: "Ilgų Nuoma",
    description: "Platus asortimentas, pritaikytas įvairiems kroviniams.",
    icon: Layers,
  },
  {
    title: "Su Operatoriumi",
    description: "Profesionalūs ir sertifikuoti operatoriai, užtikrinantys saugumą.",
    icon: HardHat,
  },
  {
    title: "24/7 Pasiekiamumas",
    description: "Operatyvus aptarnavimas ir pagalba visą parą, bet kurioje vietoje.",
    icon: Clock,
  },
  {
    title: "Transportavimas",
    description: "Saugus statybinių ir negabaritinių krovinių pervežimas visoje Lietuvoje.",
    icon: Truck,
  },
];

export function Services() {
  return (
    <section className="w-full bg-[#fafafa] rounded-[32px] px-6 sm:px-12 py-16 sm:py-24 max-w-[1200px] mx-auto overflow-hidden mt-12 md:mt-24">
      <h2 className="text-[#171717] text-4xl sm:text-5xl font-bold tracking-tight font-display mb-12 lg:mb-16">
        Mūsų Paslaugos
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {mainServices.map((service) => (
          <div key={service.title} className="bg-white border-[#e5e5e5] border-[0.8px] rounded-2xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
            <div className="relative h-[250px] w-full">
              <Image src={service.image} alt={service.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h3 className="font-display font-bold text-2xl text-[#171717] mb-3">
                {service.title}
              </h3>
              <p className="font-body text-[#525252] text-base leading-relaxed mb-8 flex-1">
                {service.description}
              </p>
              <Link href={service.href} className="group flex flex-col w-max">
                <span className="font-body font-medium text-sm text-[#e85d01] tracking-[0.7px] uppercase group-hover:text-[#d15200] transition-colors">
                  Sužinoti daugiau
                </span>
                <div className="h-px w-full bg-[#e85d01] mt-1 group-hover:bg-[#d15200] transition-colors" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="bg-white border-[#e5e5e5] border-[0.8px] rounded-2xl p-8 hover:shadow-md transition-shadow">
              <div className="bg-[rgba(232,93,1,0.1)] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-[#e85d01]">
                <Icon className="w-8 h-8" />
              </div>
              <h4 className="font-body font-bold text-lg text-[#171717] mb-3">
                {feature.title}
              </h4>
              <p className="font-body text-[#525252] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
