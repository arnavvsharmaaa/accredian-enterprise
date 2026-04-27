export default function CourseSegmentation() {
  const segments = [
    {
      title: "Program Specific",
      description: "Certificate, Diploma, Full-Marquee Certificates",
      bg: "bg-blue-600",
    },
    {
      title: "Industry Specific",
      description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
      bg: "bg-purple-600",
    },
    {
      title: "Topic Specific",
      description: "Machine Learning, Design, Analytics, Architecture",
      bg: "bg-green-600",
    },
    {
      title: "Level Specific",
      description: "Senior Leaders, Mid-level Professionals, Managers",
      bg: "bg-orange-500",
    },
  ];

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Tailored Course Segmentation
          </h2>
          <p className="text-lg text-gray-600">
            Explore Custom-fit Courses Designed to Address Every Professional
            Focus
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {segments.map((segment, index) => (
            <div
              key={index}
              className={`flex min-h-[200px] flex-col justify-between rounded-2xl p-8 transition-transform duration-300 hover:scale-105 ${segment.bg}`}
            >
              <h3 className="text-xl font-bold text-white">{segment.title}</h3>
              <p className="text-sm text-white/90">{segment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
