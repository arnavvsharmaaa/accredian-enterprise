export default function HowWeDeliver() {
  const steps = [
    {
      step: "01",
      icon: "🔍",
      title: "Skill Gap Analysis",
      description: "Assess team skills and identify development needs",
    },
    {
      step: "02",
      icon: "📋",
      title: "Customised Training Plan",
      description: "Create a tailored roadmap addressing organisation goals",
    },
    {
      step: "03",
      icon: "🚀",
      title: "Flexible Program Delivery",
      description: "Run an adaptable program aligned with organisational needs",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#f8f9fa] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            How We Deliver Results That Matter?
          </h2>
          <p className="text-lg text-gray-600">
            A Structured Three-Step Approach to Skill Development
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center rounded-xl bg-white p-8 shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <div className="absolute left-6 top-6 text-sm font-bold text-[#1a73e8]">
                {item.step}
              </div>
              <div className="mt-4 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-3xl">
                {item.icon}
              </div>
              <h3 className="mt-4 text-center text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-center text-sm text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
