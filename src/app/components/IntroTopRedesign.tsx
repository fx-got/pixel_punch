"use client";

import React from "react";

const IntroTopRedesign = () => {
  return (
    <section className="relative bg-[#ddb0b7] pb-20">
      {/* Faliste tło SVG (opcjonalne) */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="w-full h-20"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#8e6c9f"
            d="M0,192L60,192C120,192,240,192,360,202.7C480,213,600,235,720,218.7C840,203,960,149,1080,133.3C1200,117,1320,139,1380,149.3L1440,160V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          ></path>
        </svg>
      </div>

      {/* Zawartość */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mt-16">
        <div className="bg-[#8e6c9f] text-white rounded-2xl shadow-xl px-10 py-12 flex flex-col md:flex-row gap-10 items-center justify-between">
          {/* Logo i nazwa */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide leading-tight">
              PIXEL <br /> <span className="font-medium">punch</span>
            </h1>
            <p className="mt-2 text-sm uppercase tracking-wide text-gray-200">
              Agencja Marketingowa
            </p>
          </div>

          {/* Tekst główny */}
          <div className="max-w-xl">
            <h2 className="text-lg font-bold bg-white/20 px-3 py-1 rounded inline-block mb-4">
              Rodzynka wśród agencji marketingowych
            </h2>
            <p className="text-sm leading-relaxed text-white/90">
              PixelPunch wyróżnia się tym, że nie tylko robi marketing – uczy,
              jak go zrozumieć i ogarnąć. Zamiast mądrzyć się żargonem, mówimy
              ludzkim językiem, oferujemy konkretne efekty albo gotowy produkt,
              albo gotowego do działania klienta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroTopRedesign;
