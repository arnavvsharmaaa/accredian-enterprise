"use client";

export default function CTABanner() {
  return (
    <section className="w-full bg-[#1a73e8] px-6 py-24 text-center">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Want to Learn More About Our Training Solutions?
        </h2>
        <p className="mt-2 text-sm text-white/90 sm:text-base">
          Talk to our experts and get a customised plan for your organisation
        </p>
        <button 
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          className="mt-6 rounded-full bg-white px-8 py-3 font-semibold text-[#1a73e8] transition hover:bg-gray-100"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}
