export default function DomainExpertise() {
  const domains = [
    { icon: "🚀", title: "Product & Innovation Hub" },
    { icon: "🤖", title: "Gen-AI Mastery" },
    { icon: "👑", title: "Leadership Elevation" },
    { icon: "📊", title: "Tech & Data Insights" },
    { icon: "⚙️", title: "Operations Excellence" },
    { icon: "💻", title: "Digital Enterprise" },
    { icon: "💰", title: "Fintech Innovation Lab" },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Domain Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Specialised Programs Designed to Fuel Innovation
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {domains.map((domain, index) => {
            const isLastOdd =
              index === domains.length - 1 && domains.length % 2 !== 0;

            return (
              <div
                key={index}
                className={
                  isLastOdd
                    ? "col-span-2 flex justify-center md:col-span-1 md:block"
                    : ""
                }
              >
                <div
                  className={`flex w-full flex-col items-center rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md ${
                    isLastOdd ? "max-w-[calc(50%-0.5rem)] md:max-w-none" : ""
                  }`}
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-2xl">
                    {domain.icon}
                  </div>
                  <h3 className="text-center text-sm font-bold text-gray-900">
                    {domain.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
