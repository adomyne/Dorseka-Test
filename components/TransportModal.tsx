"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { X, CheckCircle2 } from "lucide-react";

const benefits = [
  {
    label: "Specializuotas parkas",
    text: "Naudojame modernią techniką, pritaikytą specifiniams statybų ir pramonės poreikiams.",
  },
  {
    label: "Patirtis su negabaritais",
    text: "Žinome, kaip saugiai pritvirtinti ir pervežti bet kokio svorio konstrukcijas ar techniką.",
  },
  {
    label: "Dokumentacijos tvarkymas",
    text: "Pasirūpiname visais reikiamais maršrutų suderinimais ir leidimais.",
  },
  {
    label: "Lankstumas",
    text: "Dirbame visoje Lietuvoje, prisitaikydami prie jūsų projektų terminų.",
  },
];

const servicesList = [
  "Statybinės technikos pervežimas",
  "Negabaritinių konstrukcijų transportavimas",
  "Birių medžiagų tiekimas dideliais kiekiais",
  "Logistikos konsultacijos",
];

export function TransportModal() {
  const [open, setOpen] = useState(false);
  const [pillTop, setPillTop] = useState(0);
  const [pillHeight, setPillHeight] = useState(40);

  const contentRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartY = useRef(0);
  const dragStartScroll = useRef(0);
  const pillHeightRef = useRef(40);
  const isContentDragging = useRef(false);
  const contentDragStartY = useRef(0);
  const contentDragStartScroll = useRef(0);

  const updatePill = useCallback(() => {
    const content = contentRef.current;
    const track = trackRef.current;
    if (!content || !track) return;
    const trackH = track.clientHeight;
    const ph = Math.max(40, trackH * (content.clientHeight / content.scrollHeight));
    const scrollRatio = content.scrollTop / (content.scrollHeight - content.clientHeight || 1);
    pillHeightRef.current = ph;
    setPillHeight(ph);
    setPillTop(scrollRatio * (trackH - ph));
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(updatePill, 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open, updatePill]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current || !contentRef.current || !trackRef.current) return;
    const delta = e.clientY - dragStartY.current;
    const trackH = trackRef.current.clientHeight;
    const content = contentRef.current;
    content.scrollTop =
      dragStartScroll.current +
      (delta / (trackH - pillHeightRef.current)) * (content.scrollHeight - content.clientHeight);
  }, []);

  const onMouseUp = useCallback(() => {
    if (isDragging.current) {
      isDragging.current = false;
      const suppressClick = (e: MouseEvent) => {
        e.stopPropagation();
        window.removeEventListener("click", suppressClick, true);
      };
      window.addEventListener("click", suppressClick, true);
    }
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("mouseup", onMouseUp);
  }, [onMouseMove]);

  const onPillMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartScroll.current = contentRef.current?.scrollTop ?? 0;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const onContentMouseMove = useCallback((e: MouseEvent) => {
    if (!isContentDragging.current || !contentRef.current) return;
    contentRef.current.scrollTop = contentDragStartScroll.current - (e.clientY - contentDragStartY.current);
  }, []);

  const onContentMouseUp = useCallback(() => {
    isContentDragging.current = false;
    window.removeEventListener("mousemove", onContentMouseMove);
    window.removeEventListener("mouseup", onContentMouseUp);
  }, [onContentMouseMove]);

  const onContentMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a, button")) return;
    e.preventDefault();
    isContentDragging.current = true;
    contentDragStartY.current = e.clientY;
    contentDragStartScroll.current = contentRef.current?.scrollTop ?? 0;
    window.addEventListener("mousemove", onContentMouseMove);
    window.addEventListener("mouseup", onContentMouseUp);
  };

  return (
    <>
      <button onClick={() => setOpen(true)} className="group flex flex-col w-max">
        <span className="font-body font-medium text-sm text-[#e85d01] tracking-[0.7px] uppercase group-hover:text-[#d15200] transition-colors">
          Sužinoti daugiau
        </span>
        <div className="h-px w-full bg-[#e85d01] mt-1 group-hover:bg-[#d15200] transition-colors" />
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Modal + right controls side by side */}
          <div
            className="flex items-start gap-3 max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* White modal box — native scrollbar hidden */}
            <div
              ref={contentRef}
              onScroll={updatePill}
              onMouseDown={onContentMouseDown}
              className="bg-white rounded-3xl w-[min(600px,85vw)] max-h-[90vh] overflow-y-scroll shadow-2xl cursor-grab active:cursor-grabbing select-none"
              style={{ scrollbarWidth: "none" }}
            >
              <div className="p-8 sm:p-12">
                <p className="text-[#e85d01] uppercase tracking-[1.4px] text-sm font-medium font-title mb-3">
                  Paslaugos
                </p>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#171717] leading-tight mb-3">
                  Patikimas Sunkiasvorių Krovinių Transportavimas
                </h2>
                <p className="font-body text-[#525252] text-base mb-8">
                  Specializuoti sprendimai jūsų logistikos iššūkiams.
                </p>
                <p className="font-body text-[#525252] text-base leading-relaxed mb-10">
                  Mes suprantame, kad negabaritiniai ir sunkiasvoriai kroviniai reikalauja ne tik galingos technikos, bet ir precizišto planavimo. Mūsų komanda pasirūpina visais procesais, kad jūsų krovinys pasiektų tikslą saugiai ir laiku.
                </p>
                <h3 className="font-display font-bold text-xl text-[#171717] mb-6">
                  Kodėl verta rinktis mus?
                </h3>
                <div className="flex flex-col gap-5 mb-10">
                  {benefits.map((b) => (
                    <div key={b.label} className="flex gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#e85d01] flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-body font-bold text-[#171717]">{b.label} — </span>
                        <span className="font-body text-[#525252]">{b.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-[#fafafa] rounded-2xl p-6 mb-10">
                  <ul className="flex flex-col gap-3">
                    {servicesList.map((s) => (
                      <li key={s} className="flex items-center gap-3 font-body text-[#525252] text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e85d01] flex-shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="font-body text-[#525252] text-sm leading-relaxed mb-8">
                  Turite konkretų užsakymą ar klausimą? Mūsų specialistai padės apskaičiuoti optimaliausią maršrutą.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#kontaktai"
                    onClick={() => setOpen(false)}
                    className="flex-1 text-center font-display font-bold text-sm px-6 py-4 rounded-2xl bg-[#e85d01] text-white hover:bg-[#d15200] transition-colors"
                  >
                    Gauti pasiūlymą
                  </a>
                  <a
                    href="tel:+37000000000"
                    className="flex-1 text-center font-display font-bold text-sm px-6 py-4 rounded-2xl border border-[#e5e5e5] text-[#171717] hover:bg-[#f5f5f5] transition-colors"
                  >
                    Skambinti
                  </a>
                </div>
              </div>
            </div>

            {/* Right column: X button above scroll track */}
            <div className="flex flex-col items-center gap-3 self-stretch">
              <button
                onClick={() => setOpen(false)}
                className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              <div ref={trackRef} className="flex-1 w-2 bg-white/20 rounded-full relative">
                <div
                  onMouseDown={onPillMouseDown}
                  className="absolute w-2 bg-white rounded-full cursor-grab active:cursor-grabbing"
                  style={{ top: pillTop, height: pillHeight }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
