import Image from "next/image";

const projects = [
  "/assets/projektas1.png",
  "/assets/projektas2.png",
  "/assets/projektas3.png",
  "/assets/projektas4.png",
];

export function Gallery() {
  return (
    <section className="w-full bg-[#fafafa] rounded-[32px] px-6 sm:px-12 py-16 sm:py-24 max-w-[1200px] mx-auto overflow-hidden mt-12 md:mt-24">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-[#171717] text-4xl sm:text-[48px] font-bold tracking-tight font-display">
          Projektų Galerija
        </h2>
        <p className="font-body text-[#525252] text-base leading-relaxed max-w-xl mx-auto">
          Realias akimirkos iš mūsų atliktų darbų objektuose visoje šalyje.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#e5e5e5] group cursor-pointer">
            <Image
              src={project}
              alt={`Projektas ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
