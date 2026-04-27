export default function WhoShouldJoin() {
  const cards = [
    {
      icon: "💻",
      title: "Tech Professionals",
      description: "Enhance expertise, embrace tech, drive outcomes",
    },
    {
      icon: "🧠",
      title: "Non-Tech Professionals",
      description: "Build digitally, collaborate well in tech environments",
    },
    {
      icon: "🌱",
      title: "Emerging Professionals",
      description: "Discover potential skills for application growth",
    },
    {
      icon: "👔",
      title: "Senior Professionals",
      description: "Strengthen leadership, achieve strategic decisions",
    },
  ];

  return (
    <section className="bg-[#1a73e8] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white sm:text-4xl">
            Who Should Join?
          </h2>
          <p className="text-lg text-white">Strategic Skill Enhancement</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/20 bg-white/10 p-6 transition-transform duration-300 hover:scale-105"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/20 p-3 text-2xl">
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold text-white">
                {card.title}
              </h3>
              <p className="text-sm text-white/80">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
