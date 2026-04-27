"use client";

import Link from "next/link";

export default function ProjectDetail() {
  return (
    <main className="bg-white text-black">

      {/* HERO */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img
          src="/project-1.jpg"
          className="w-full h-full object-cover"
          alt="Rodinný dom"
        />

        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-4xl md:text-5xl font-black">
              Rodinný dom 1
            </h1>
            <p className="mt-4 text-lg text-gray-200">
              Moderný a úsporný dom pre rodinu
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="/project-1.jpg"
              alt="Dom"
              className="rounded-xl shadow-xl w-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-black mb-6">
              O projekte
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
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
                <div
                  key={label}
                  className="bg-gray-100 p-4 rounded-lg border"
                >
                  <p className="text-sm text-gray-500">{label}</p>
                  <p className="font-bold text-lg">{value}</p>
                </div>
              ))}
            </div>

            <button className="mt-10 bg-red-600 hover:bg-red-700 transition text-white px-6 py-4 font-bold rounded-lg">
              Mám záujem →
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-10 mt-10">
        © 2024 DOM PRE VÁS
      </footer>

    </main>
  );
}