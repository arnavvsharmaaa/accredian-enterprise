export default function CATFramework() {
  const steps = [
    {
      letter: "C",
      title: "Concept",
      description: "Build strong theoretical foundations",
    },
    {
      letter: "A",
      title: "Application",
      description: "Apply knowledge to real world scenarios",
    },
    {
      letter: "T",
      title: "Tools",
      description: "Master industry standard tools and platforms",
    },
  ];

  return (
    <section id="cat" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            The CAT Framework
          </h2>
          <p className="text-lg text-gray-600">
            Our Proven Approach to Learning Excellence
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-12 md:flex-row md:items-start md:gap-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:flex-row md:items-start"
            >
              {/* Step Item */}
              <div className="flex w-full max-w-xs flex-col items-center text-center md:w-48">
                <div className="mb-6 flex h-40 w-40 flex-shrink-0 items-center justify-center rounded-full border-4 border-blue-500 bg-white">
                  <span className="text-5xl font-bold text-blue-600">
                    {step.letter}
                  </span>
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden h-40 items-center justify-center px-4 md:flex lg:px-8">
                  <svg
                    className="h-8 w-12 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
