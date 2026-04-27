"use client";

import Link from "next/link";

export default function ProjectDetail() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-[500px]">
        <img src="/project-1.jpg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl font-black">Rodinný dom 1</h1>
            <p className="mt-4 text-lg">Moderný a úsporný dom pre rodinu</p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 px-6">

          {/* IMAGE */}
          <img src="/project-1.jpg" className="rounded-xl shadow-xl" />

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-black mb-6">O projekte</h2>

            <p className="text-gray-600 mb-6">
              Moderný rodinný dom s dôrazom na jednoduchosť, svetlo a efektívnosť.
              Ideálny pre menšie rodiny.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Zastavaná plocha", "96m²"],
                ["Úžitková plocha", "74m²"],
                ["Terasa", "10m²"],
                ["Cena", "56 500 €"],
              ].map(([label, value]) => (
                <div key={label} className="bg-gray-100 p-4 rounded">
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="font-bold">{value}</p>
                </div>
              ))}
            </div>

            <a className="mt-8 inline-block bg-red-600 text-white px-6 py-4 font-bold">
              Mám záujem →
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10">
        © 2024 DOM PRE VÁS
      </footer>

    </main>
  );
}