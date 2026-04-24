"use client";
import Image from "next/image";
import { useState } from "react";
import { imageUrlFor } from "@/sanity/lib/image";

interface GalleryImage {
  _id: string;
  image: any;
  alt?: string;
  description?: string;
}

interface GalleryProps {
  images: GalleryImage[];
}

export function Gallery({ images }: GalleryProps) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? images : images.slice(0, 4);

  return (
    <section id="galerija" className="w-full bg-[#fafafa] rounded-[32px] px-6 sm:px-12 py-16 sm:pt-16 sm:pb-8 max-w-[1000px] mx-auto overflow-hidden mt-12 md:mt-24">
      <div className="flex flex-col items-center text-center gap-4 mb-16">
        <h2 className="text-[#171717] text-4xl sm:text-[48px] font-bold tracking-tight font-display">
          Projektų Galerija
        </h2>
        <p className="font-body text-[#525252] text-base leading-relaxed max-w-xl mx-auto">
          Realias akimirkos iš mūsų atliktų darbų objektuose visoje šalyje.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visible.map((item, idx) => {
          const imageUrl = item.image ? imageUrlFor(item.image) : null;
          return (
            <div key={item._id} className="flex flex-col rounded-2xl overflow-hidden bg-white border border-[#e5e5e5] shadow-sm group cursor-pointer h-[340px]">
              <div className="relative flex-1 w-full bg-[#e5e5e5]">
                {imageUrl && (
                  <Image
                    src={imageUrl}
                    alt={item.alt ?? `Projektas ${idx + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              {(item.alt || item.description) && (
                <div className="px-4 py-3 flex flex-col justify-between h-[80px]">
                  {item.alt && (
                    <span className="font-display font-bold text-sm text-[#171717]">
                      {item.alt}
                    </span>
                  )}
                  {item.description && (
                    <span className="font-body text-xs text-[#525252] leading-relaxed">
                      {item.description}
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {images.length > 4 && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setExpanded(!expanded)}
            className="font-display font-bold text-sm px-8 py-4 rounded-2xl border border-[#e5e5e5] bg-white text-[#171717] hover:bg-[#e85d01] hover:text-white hover:border-[#e85d01] transition-all duration-300"
          >
            {expanded ? "Rodyti mažiau" : "Rodyti visus projektus"}
          </button>
        </div>
      )}
    </section>
  );
}
