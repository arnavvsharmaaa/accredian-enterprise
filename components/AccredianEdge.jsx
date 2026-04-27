export default function AccredianEdge() {
  const features = [
    {
      icon: "💡",
      title: "Tailored Solutions",
      desc: "Programs customized to your organization's goals",
      position: "above",
    },
    {
      icon: "👤",
      title: "Expert Guidance",
      desc: "Learn from industry leaders with real-world success",
      position: "below",
    },
    {
      icon: "⚙️",
      title: "Innovative Framework",
      desc: "Proprietary methods for impactful results",
      position: "above",
    },
    {
      icon: "🌐",
      title: "Advanced Technology",
      desc: "State-of-the-art LMS for seamless learning",
      position: "below",
    },
    {
      icon: "↗️",
      title: "Diverse Offerings",
      desc: "Courses across industries and skill levels",
      position: "above",
    },
    {
      icon: "🎯",
      title: "Proven Impact",
      desc: "Trusted by leading organizations for measurable ROI",
      position: "below",
    },
    {
      icon: "📦",
      title: "Flexible Delivery",
      desc: "Online and offline options tailored to your needs",
      position: "above",
    },
  ];

  return (
    <section id="accredian-edge" className="bg-[#f8f9fa] px-6 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-20 text-center">
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl">
            <span className="text-black">The </span>
            <span className="text-[#1a73e8]">Accredian Edge</span>
          </h2>
          <p className="text-lg font-medium">
            <span className="text-gray-500">Key Aspects of </span>
            <span className="text-[#1a73e8]">Our Strategic Training</span>
          </p>
        </div>

        {/* Horizontal Timeline Scroll Container */}
        <div className="w-full overflow-x-auto py-4">
          {/* Inner container to force horizontal stretch on small screens */}
          <div className="relative mx-auto flex min-w-[1024px] items-center justify-between px-8 py-28">
            
            {/* Continuous Dashed Line Behind Elements */}
            <div className="absolute left-16 right-16 top-1/2 -z-10 -translate-y-1/2 border-t-2 border-dashed border-gray-300"></div>

            {features.map((item, index) => (
              <div key={index} className="flex items-center">
                
                {/* Timeline Node */}
                <div className="relative flex flex-col items-center">
                  
                  {/* Label Above */}
                  {item.position === "above" && (
                    <div className="absolute bottom-full mb-6 flex w-32 flex-col items-center">
                      <h3 className="text-center text-sm font-bold text-gray-900 leading-tight">{item.title}</h3>
                      <p className="mt-2 text-center text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  )}

                  {/* Circular Icon with Double Border Effect */}
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-gray-300 bg-[#f8f9fa] p-2 z-10">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-blue-700 shadow-md">
                      <span className="text-3xl text-white">{item.icon}</span>
                    </div>
                  </div>

                  {/* Label Below */}
                  {item.position === "below" && (
                    <div className="absolute top-full mt-6 flex w-32 flex-col items-center">
                      <h3 className="text-center text-sm font-bold text-gray-900 leading-tight">{item.title}</h3>
                      <p className="mt-2 text-center text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                  )}
                </div>

                {/* Arrow Connector */}
                {index < features.length - 1 && (
                  <div className="mx-4 bg-[#f8f9fa] px-2 text-xl font-bold tracking-tighter text-gray-400 z-10">
                    &gt;&gt;
                  </div>
                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
