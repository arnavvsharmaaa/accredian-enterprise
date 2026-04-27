"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-white px-6 pb-12 pt-4 md:pb-24 md:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 rounded-[2rem] bg-[#f0f6ff] px-8 pt-12 shadow-sm md:flex-row lg:px-16 lg:py-0">
          
          {/* Left Column */}
          <div className="flex flex-1 flex-col items-start text-left lg:py-20">
            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-black sm:text-6xl lg:text-[4rem]">
              Next-Gen <span className="text-[#1a73e8]">Expertise</span>
              <br className="hidden sm:block" />
              For Your <span className="text-[#1a73e8]">Enterprise</span>
            </h1>

            <p className="mb-10 max-w-lg text-lg font-medium text-gray-800 sm:text-xl">
              Cultivate high-performance <br className="hidden sm:block" />
              teams through expert learning.
            </p>

            <ul className="mb-10 flex flex-wrap items-center gap-4 sm:gap-6">
              {[
                "Tailored Solutions",
                "Industry Insights",
                "Expert Guidance",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-sm font-semibold text-gray-900 sm:text-base">
                  <svg
                    className="h-5 w-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="rounded-lg border border-gray-900 bg-[#1a73e8] px-8 py-3 text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
            >
              Enquire Now
            </button>
          </div>

          {/* Right Column */}
          <div className="flex w-full flex-1 justify-center self-end md:justify-end">
            <div className="relative flex w-full max-w-lg items-end justify-center lg:max-w-xl">
              <Image
                src="/corporate-big-hero-v4.webp"
                alt="Professional corporate training"
                width={800}
                height={800}
                className="h-auto w-full object-contain object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
