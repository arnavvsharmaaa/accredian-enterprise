"use client";

import { useState, useEffect, useRef } from "react";

export default function Stats() {
  const [stats, setStats] = useState({ professionals: 0, sessions: 0, learners: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const target = { professionals: 10, sessions: 200, learners: 5 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setStats({
        professionals: Math.floor(target.professionals * progress),
        sessions: Math.floor(target.sessions * progress),
        learners: Math.floor(target.learners * progress),
      });
      
      if (currentStep >= steps) clearInterval(timer);
    }, interval);
    
    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="stats" ref={sectionRef} className="bg-[#f8f9fa] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Track Record
          </h2>
          <p className="text-lg text-gray-600">
            The Numbers Behind Our Success
          </p>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:divide-x md:divide-gray-300 md:gap-0">
          {/* Stat 1 */}
          <div className="flex flex-1 flex-col items-center px-4 text-center">
            <span className="mb-2 text-4xl font-bold text-[#1a73e8] sm:text-5xl">
              {stats.professionals}K+
            </span>
            <p className="max-w-[250px] text-sm text-gray-600 sm:text-base">
              Professionals Trained For International Career Success
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-1 flex-col items-center px-4 text-center">
            <span className="mb-2 text-4xl font-bold text-[#1a73e8] sm:text-5xl">
              {stats.sessions}+
            </span>
            <p className="max-w-[250px] text-sm text-gray-600 sm:text-base">
              Sessions Delivered With Unparalleled Learning Excellence
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-1 flex-col items-center px-4 text-center">
            <span className="mb-2 text-4xl font-bold text-[#1a73e8] sm:text-5xl">
              {stats.learners}K+
            </span>
            <p className="max-w-[250px] text-sm text-gray-600 sm:text-base">
              Active Learners Engaged In Dynamic Courses
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
