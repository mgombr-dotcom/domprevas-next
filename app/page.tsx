"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const defaultCMS = {
  heroTitle: "Staviame vaše sny.",
  heroSubtitle: "Domov pre vás a vašu rodinu.",
  heroText:
    "Navrhujeme a staviame kvalitné, energeticky úsporné a nadčasové domy na kľúč.",
  phone: "+421 911 123 456",
  email: "info@domprevas.sk",
};

const projects = [
  {
    title: "Rodinný dom 1",
    image: "/project-1.jpg",
    params: [
      ["Zastavaná plocha:", "96.39m²"],
      ["Úžitková plocha:", "74.32m²"],
      ["Terasa:", "10.45m²"],
      ["Rozmery domu:", "15,3m x 6,3m"],
      ["Postačujúci pozemok:", "21,3m x 12,3m"],
      ["Cena od:", "56 500 €"],
    ],
  },
  {
    title: "Rodinný dom 2",
    image: "/project-2.jpg",
    params: [
      ["Zastavaná plocha:", "92,74m²"],
      ["Úžitková plocha:", "70,55m²"],
      ["Terasa:", "12m²"],
      ["Rozmery domu:", "8,10m x 11,45m"],
      ["Postačujúci pozemok:", "14,10m x 17,45m"],
      ["Cena od:", "52 950 €"],
    ],
  },
  {
    title: "Rodinný dom 3",
    image: "/project-3.jpg",
    params: [
      ["Zastavaná plocha:", "104,62m²"],
      ["Úžitková plocha:", "79,36m²"],
      ["Terasa:", "18,81m²"],
      ["Rozmery domu:", "11,10m x 11,30m"],
      ["Postačujúci pozemok:", "17,10m x 17,30m"],
      ["Cena od:", "60 150 €"],
    ],
  },
  {
    title: "Rodinný dom 4",
    image: "/project-4.jpg",
    params: [
      ["Zastavaná plocha:", "127,57m²"],
      ["Úžitková plocha:", "99,67m²"],
      ["Terasa:", "11,75m²"],
      ["Rozmery domu:", "11,40m x 13,10m"],
      ["Postačujúci pozemok:", "17,40m x 19,10m"],
      ["Cena od:", "77 050 €"],
    ],
  },
  {
    title: "Rodinný dom 5",
    image: "/project-5.jpg",
    params: [
      ["Zastavaná plocha:", "—"],
      ["Úžitková plocha:", "—"],
      ["Terasa:", "—"],
      ["Rozmery domu:", "—"],
      ["Postačujúci pozemok:", "—"],
      ["Cena od:", "Na vyžiadanie"],
    ],
  },
];

export default function Home() {
  const [cms, setCms] = useState(defaultCMS);

  useEffect(() => {
    const saved = localStorage.getItem("domprevas-cms");
    if (saved) setCms(JSON.parse(saved));
  }, []);

  return (
    <main className="overflow-x-hidden bg-white text-black">
      {/* HEADER */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-[1540px] items-center justify-between px-12 py-6">
          <img src="/logo.png" alt="DOM PRE VÁS" className="h-[58px] w-auto" />

          <nav className="hidden items-center gap-8 text-[11px] font-black uppercase text-white lg:flex">
            <a href="#">Domy</a>
            <a href="#projekty">Projekty</a>
            <a href="#sluzby">Služby</a>
            <a href="#">Realizácie</a>
            <a href="#onas">O nás</a>
            <a href="#kontakt">Kontakt</a>
          </nav>

          <div className="hidden items-center gap-7 text-white lg:flex">
            <span className="text-[12px] font-semibold">☎ {cms.phone}</span>
            <a
              href="#kontakt"
              className="bg-red-600 px-7 py-4 text-[11px] font-black uppercase hover:bg-red-700"
            >
              Objednať projekt
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-[900px] overflow-hidden text-white lg:min-h-[850px]">
        <img
          src="/hero.jpg"
          alt="Moderný dom"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />
        <div className="absolute inset-0 bg-black/25" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1540px] items-center px-12 pt-12">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[520px]"
          >
            <p className="mb-5 text-[13px] font-black uppercase tracking-[0.22em] text-red-500">
              Staviame vaše sny
            </p>

            <h1 className="text-[52px] font-black leading-[0.98] tracking-[-0.04em]">
              {cms.heroTitle}
              <br />
              <span className="text-red-500">{cms.heroSubtitle}</span>
            </h1>

            <p className="mt-6 max-w-[430px] text-[15px] font-medium leading-7 text-white/85">
              {cms.heroText}
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projekty"
                className="bg-red-600 px-7 py-4 text-[11px] font-black uppercase hover:bg-red-700"
              >
                Pozrieť projekty →
              </a>

              <a
                href="#kontakt"
                className="border border-white/60 px-7 py-4 text-[11px] font-black uppercase hover:bg-white hover:text-black"
              >
                Konzultácia zdarma →
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-9 right-[7%] z-20 grid w-[620px] grid-cols-3 gap-4">
          {[
            ["⌂", "Projekty domov", "Vyberte si z našich projektov domov"],
            ["⌁", "Na kľúč", "Postavíme vám dom od základov"],
            ["▭", "Realizácie", "Pozrite si naše dokončené projekty"],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-[#101820]/85 p-7 text-white shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-5 text-[34px] leading-none">{icon}</div>
              <h3 className="mb-2 text-[17px] font-black">{title}</h3>
              <p className="text-[12px] leading-5 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O NAS */}
      <section id="onas" className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:px-14">
          <div className="grid grid-cols-[1fr_120px] gap-4">
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img
                src="/about-main.jpg"
                alt="DOM PRE VÁS"
                className="h-[470px] w-full object-cover brightness-75"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <img src="/logo.png" alt="DOM PRE VÁS" className="w-[260px] opacity-95" />
              </div>

              <button className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white text-red-600 shadow-xl">
                ▶
              </button>
            </div>

            <div className="grid gap-4">
              <img src="/about-1.jpg" alt="" className="h-[140px] w-full rounded-xl object-cover" />
              <img src="/about-2.jpg" alt="" className="h-[140px] w-full rounded-xl object-cover" />
              <img src="/about-3.jpg" alt="" className="h-[140px] w-full rounded-xl object-cover" />
            </div>
          </div>

          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-red-600">
              O nás
            </p>

            <h2 className="mb-6 text-4xl font-black leading-tight tracking-[-0.04em] lg:text-5xl">
              Splníme váš sen
              <br />o bývaní
            </h2>

            <p className="mb-4 max-w-xl text-gray-600">
              Už viac ako 16 rokov staviame domy, v ktorých sa ľuďom dobre žije.
              Spájame kvalitné materiály, moderné technológie a poctivú remeselnú
              prácu, aby váš domov spĺňal všetky vaše predstavy.
            </p>

            <p className="mb-8 max-w-xl text-gray-600">
              Od prvotného návrhu až po odovzdanie kľúčov – sme tu pre vás v každom kroku.
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
              {[
                ["⌂", "16+", "rokov skúseností"],
                ["♙", "30+", "odborníkov v tíme"],
                ["▣", "350+", "dokončených domov"],
              ].map(([icon, number, label]) => (
                <div key={number} className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                  <div className="mb-4 text-4xl text-red-600">{icon}</div>
                  <div className="text-4xl font-black">{number}</div>
                  <p className="mt-1 text-sm font-semibold leading-5 text-gray-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJEKTY SLIDER */}
      <section id="projekty" className="bg-black py-20 text-white">
        <div className="mx-auto max-w-[1600px] px-6 lg:px-14">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-black">Projekty</h2>

            <div className="flex gap-3">
              <button
                onClick={() =>
                  document.getElementById("projects-slider")?.scrollBy({
                    left: -340,
                    behavior: "smooth",
                  })
                }
                className="h-11 w-11 rounded-full border border-white/30 text-xl hover:bg-white hover:text-black"
              >
                ‹
              </button>

              <button
                onClick={() =>
                  document.getElementById("projects-slider")?.scrollBy({
                    left: 340,
                    behavior: "smooth",
                  })
                }
                className="h-11 w-11 rounded-full border border-white/30 text-xl hover:bg-white hover:text-black"
              >
                ›
              </button>
            </div>
          </div>

          <div
            id="projects-slider"
            className="flex gap-6 overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <article
                key={project.title}
                className="min-w-[285px] max-w-[285px] overflow-hidden rounded-lg bg-white text-black shadow-xl"
              >
                <img src={project.image} className="h-44 w-full object-cover" alt={project.title} />

                <div className="p-5">
                  <h3 className="mb-4 text-center text-xl">
                    Rodinný <b>{project.title.split(" ").pop()}</b>
                  </h3>

                  <div className="mx-auto mb-4 h-1 w-32 bg-blue-600" />

                  <div className="border">
                    {project.params.map(([label, value]) => (
                      <div key={label} className="grid grid-cols-2 border-b last:border-b-0">
                        <div className="bg-gray-100 p-2 text-sm">{label}</div>
                        <div className="p-2 text-right text-sm font-bold">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SLUZBY */}
      <section id="sluzby" className="relative overflow-hidden bg-gray-50 py-20 lg:py-28">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[url('/services-bg.jpg')] bg-cover bg-center" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-14">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-red-600">
            Naše služby
          </p>

          <h2 className="mb-16 max-w-[720px] text-4xl font-black leading-tight tracking-[-0.04em] lg:text-5xl">
            Kompletný servis pre váš nový domov
          </h2>

          <div className="relative mb-8">
            <div className="grid grid-cols-1 overflow-hidden rounded-xl bg-white shadow-2xl sm:grid-cols-2 lg:grid-cols-5">
              {[
                "Návrh a projekcia",
                "Výstavba na kľúč",
                "Interiérové riešenia",
                "Stavebný dozor",
                "Záručný servis",
              ].map((s) => (
                <div key={s} className="border-b border-gray-200 p-7 last:border-r-0 lg:border-b-0 lg:border-r">
                  <div className="mb-4 text-3xl text-red-600">✎</div>
                  <h3 className="mb-2 font-black">{s}</h3>
                  <p className="text-sm text-gray-500">
                    Kompletné riešenie podľa vašich predstáv a potrieb.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FULL WIDTH */}
      <section id="kontakt" className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-[#081018] px-6 py-16 text-white lg:ml-auto lg:max-w-[620px] lg:px-20 lg:py-20">
            <div className="mx-auto max-w-2xl">
              <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-red-600">
                Prečo si vybrať nás
              </p>

              <h2 className="mb-8 text-4xl font-black leading-tight tracking-[-0.04em]">
                Kvalita, na ktorú sa
                <br />
                môžete spoľahnúť
              </h2>

              <ul className="space-y-3 text-white/75">
                <li>✓ Kvalitné overené materiály</li>
                <li>✓ Moderné technológie a postupy</li>
                <li>✓ Individuálny prístup</li>
                <li>✓ Transparentné ceny</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-600 px-6 py-16 text-white lg:px-20 lg:py-20">
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-5 text-4xl font-black leading-tight tracking-[-0.04em]">
                Začnime stavať váš
                <br />
                vysnívaný domov
              </h2>

              <p className="mb-8 text-white/80">
                Nezáväzná konzultácia a cenová ponuka zdarma.
              </p>

              <a className="inline-block border border-white/50 px-7 py-4 text-xs font-black uppercase">
                Objednať konzultáciu →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#070b0f] py-14 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-5 lg:px-14">
          <div>
            <img src="/logo.png" alt="DOM PRE VÁS" className="mb-6 h-14" />
            <p className="text-sm text-white/50">Staviame vaše sny.</p>
          </div>

          {["Navigácia", "Služby", "Kontakt", "Rýchle odkazy"].map((col) => (
            <div key={col}>
              <h4 className="mb-5 text-sm font-black uppercase">{col}</h4>
              <ul className="space-y-3 text-sm text-white/55">
                <li>Domy</li>
                <li>Projekty</li>
                <li>Služby</li>
                <li>Kontakt</li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 px-6 pt-6 text-center text-sm text-white/40">
          © 2024 DOM PRE VÁS, s.r.o.
        </div>
      </footer>
    </main>
  );
}