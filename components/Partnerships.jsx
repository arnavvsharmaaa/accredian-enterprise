export default function Partnerships() {
  const partners = ["Reliance", "Tata", "IBM", "ZF", "ADP", "Bayer"];

  return (
    <section id="clients" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
          Our Proven Partnerships
        </h2>
        <p className="mb-12 text-lg text-gray-600">
          Successful Collaborations Built on Industry's Best
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white px-6 py-4 shadow-sm transition-transform duration-300 hover:scale-105"
            >
              <span className="text-lg font-bold text-gray-500">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
