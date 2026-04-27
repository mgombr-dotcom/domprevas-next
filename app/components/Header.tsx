"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="mx-auto flex max-w-[1540px] items-center justify-between px-6 py-5 lg:px-12 lg:py-6">
        <Link href="/" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="DOM PRE VÁS" className="h-[50px] w-auto lg:h-[58px]" />
        </Link>

        <nav className="hidden items-center gap-8 text-[11px] font-black uppercase text-white lg:flex">
<Link href="/#hero">Domov</Link>
<Link href="/#projekty">Projekty</Link>
<Link href="/#sluzby">Služby</Link>
<Link href="/#realizacie">Realizácie</Link>
<Link href="/#onas">O nás</Link>
<Link href="/#kontakt">Kontakt</Link>
        </nav>

        <div className="hidden items-center gap-7 text-white lg:flex">
          <span className="text-[12px] font-semibold">☎ +421 911 123 456</span>
          <Link href="/#kontakt" className="bg-red-600 px-7 py-4 text-[11px] font-black uppercase hover:bg-red-700">
            Objednať projekt
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white backdrop-blur-lg lg:hidden"
          aria-label="Menu"
        >
          <span className={`absolute h-[2px] w-5 bg-white transition ${open ? "rotate-45" : "-translate-y-2"}`} />
          <span className={`absolute h-[2px] w-5 bg-white transition ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`absolute h-[2px] w-5 bg-white transition ${open ? "-rotate-45" : "translate-y-2"}`} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#071018]/95 px-6 py-6 text-white backdrop-blur-xl lg:hidden">
          <div className="mb-12 flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)}>
              <img src="/logo.png" alt="DOM PRE VÁS" className="h-[52px] w-auto" />
            </Link>

            <button
              onClick={() => setOpen(false)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-3xl"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-6 text-3xl font-black uppercase tracking-[-0.04em]">
            <Link onClick={() => setOpen(false)} href="/">Domy</Link>
            <Link onClick={() => setOpen(false)} href="/#projekty">Projekty</Link>
            <Link onClick={() => setOpen(false)} href="/#sluzby">Služby</Link>
            <Link onClick={() => setOpen(false)} href="/#realizacie">Realizácie</Link>
            <Link onClick={() => setOpen(false)} href="/#onas">O nás</Link>
            <Link onClick={() => setOpen(false)} href="/#kontakt">Kontakt</Link>
          </nav>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="mb-5 text-sm text-white/60">☎ +421 911 123 456</p>
            <Link
              onClick={() => setOpen(false)}
              href="/#kontakt"
              className="inline-block bg-red-600 px-8 py-4 text-xs font-black uppercase"
            >
              Objednať projekt →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}