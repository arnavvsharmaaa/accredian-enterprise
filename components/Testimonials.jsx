export default function Testimonials() {
  const testimonials = [
    {
      company: "ADP",
      companyColor: "bg-red-500",
      quote:
        "We would like to thank Accredian for the invaluable support and incredible quality of service they consistently provide. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high quality service every step of the way.",
      author: "L&D Manager, ADP",
    },
    {
      company: "Bayer",
      companyColor: "bg-green-600",
      quote:
        "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
      author: "HR Director, Bayer",
    },
    {
      company: "IBM",
      companyColor: "bg-blue-600",
      quote:
        "The quality of training programs and the expertise of mentors has transformed how our teams approach complex technical challenges. Highly recommended.",
      author: "CTO, IBM India",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#f8f9fa] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Testimonials from Our Partners
          </h2>
          <p className="text-lg text-gray-600">What Our Clients Are Saying</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-transform duration-300 hover:scale-105"
            >
              <div>
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white ${testimonial.companyColor}`}
                >
                  {testimonial.company.substring(0, 3).toUpperCase()}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 italic">
                  "{testimonial.quote}"
                </p>
              </div>
              <p className="mt-4 text-sm font-medium text-[#1a73e8]">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
