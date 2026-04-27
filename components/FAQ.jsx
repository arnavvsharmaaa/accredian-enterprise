"use client";

import { useState } from "react";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("About the Course");
  const [openIndex, setOpenIndex] = useState(null);

  const tabs = ["About the Course", "About the Delivery", "Miscellaneous"];

  const questions = {
    "About the Course": [
      {
        q: "What types of corporate training programs does Accredian offer?",
        a: "Accredian offers customised corporate training across domains including Data Science, AI/ML, Product Management, Leadership, and more — tailored to your organisation's needs.",
      },
      {
        q: "What domain specialisations are available?",
        a: "We cover Product & Innovation, Gen-AI, Leadership, Tech & Data, Operations, Digital Enterprise, and Fintech.",
      },
    ],
    "About the Delivery": [
      {
        q: "How are the programs delivered?",
        a: "Programs are delivered via live online sessions, recorded content, and in-person workshops depending on your team's preference.",
      },
      {
        q: "What is the typical program duration?",
        a: "Programs range from 4 weeks to 6 months depending on the depth and domain selected.",
      },
    ],
    Miscellaneous: [
      {
        q: "Is there a certification at the end?",
        a: "Yes, all programs include globally recognised certifications from IIT, IIM, and partner institutions.",
      },
      {
        q: "How do we get started?",
        a: "Simply click Enquire Now and our team will reach out within 24 hours to discuss your requirements.",
      },
    ],
  };

  const currentQuestions = questions[activeTab];

  const toggleAccordion = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setOpenIndex(null); // Reset open accordion when switching tabs
  };

  return (
    <section id="faqs" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>

        {/* Tabs */}
        <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`pb-2 text-lg font-medium transition ${
                activeTab === tab
                  ? "border-b-2 border-[#1a73e8] text-[#1a73e8]"
                  : "border-b-2 border-transparent text-gray-500 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="mb-12 flex flex-col">
          {currentQuestions.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                onClick={() => toggleAccordion(index)}
                className="flex w-full items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-gray-900">{item.q}</span>
                <span className="ml-4 text-xl text-gray-500">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="pt-2 text-sm text-gray-600">{item.a}</p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="flex justify-center">
          <button 
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-[#1a73e8] px-8 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
