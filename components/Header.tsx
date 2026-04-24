import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 flex h-20 items-center justify-between bg-white/80 px-6 backdrop-blur-md shadow-[0_4px_40px_rgba(232,93,1,0.04)] md:px-12">
      <div className="flex items-center">
        <Image
          src="/assets/Logo.svg"
          alt="Dorseka Logo"
          width={150} // Adjust width as needed
          height={40} // Adjust height as needed
          className="object-contain"
        />
      </div>


      <nav className="hidden items-center gap-8 md:flex">
        {["Kranai", "Paslaugos", "Galerija", "Kontaktai"].map((item) => (
          <Link
            key={item}
            href={`#${item.toLowerCase()}`}
            className="font-body text-sm font-medium uppercase tracking-[0.35px] text-[#404040] transition-colors hover:text-[#e85d01]"
          >
            {item}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Button
          className="hidden bg-[#e85d01] font-display text-sm font-bold uppercase tracking-[0.35px] text-white hover:bg-[#d15200] md:flex rounded-lg px-6 py-6"
        >
          Gaukite pasiūlymą
        </Button>
        <button className="md:hidden text-[#171717] hover:text-[#e85d01] transition-colors p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
