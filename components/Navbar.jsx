"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-[85rem] items-center justify-between px-6 py-6 md:px-14">
        {/* Left: Logo */}
        <Link href="/" className="text-2xl font-bold text-[#1a73e8]">
          accredian
        </Link>

        {/* Right Desktop: Links & Button */}
        <div className="hidden flex-1 items-center justify-end space-x-8 md:flex">
          <ul className="flex space-x-8 text-base font-medium text-black">
            <li>
              <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-[#1a73e8]">Home</a>
            </li>
            <li>
              <a href="#stats" onClick={(e) => handleScroll(e, "stats")} className="hover:text-[#1a73e8]">Stats</a>
            </li>
            <li>
              <a href="#clients" onClick={(e) => handleScroll(e, "clients")} className="hover:text-[#1a73e8]">Clients</a>
            </li>
            <li>
              <a href="#accredian-edge" onClick={(e) => handleScroll(e, "accredian-edge")} className="hover:text-[#1a73e8]">Accredian Edge</a>
            </li>
            <li>
              <a href="#cat" onClick={(e) => handleScroll(e, "cat")} className="hover:text-[#1a73e8]">CAT</a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(e) => handleScroll(e, "how-it-works")} className="hover:text-[#1a73e8]">How It Works</a>
            </li>
            <li>
              <a href="#faqs" onClick={(e) => handleScroll(e, "faqs")} className="hover:text-[#1a73e8]">FAQs</a>
            </li>
            <li>
              <a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")} className="hover:text-[#1a73e8]">Testimonials</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-[#1a73e8]">Contact</a>
            </li>
          </ul>
          <button onClick={(e) => handleScroll(e, "contact")} className="rounded-full bg-[#1a73e8] px-6 py-2 text-white transition hover:bg-blue-700">
            Enquire Now
          </button>
        </div>

        {/* Mobile: Hamburger Icon */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Mobile Dropdown */}
          {isOpen && (
            <div className="absolute right-5 top-[88px] rounded-xl bg-white p-6 shadow-lg">
              <ul className="flex flex-col space-y-4 text-base font-medium text-black">
                <li>
                  <a href="#home" onClick={(e) => handleScroll(e, "home")} className="hover:text-[#1a73e8]">Home</a>
                </li>
                <li>
                  <a href="#stats" onClick={(e) => handleScroll(e, "stats")} className="hover:text-[#1a73e8]">Stats</a>
                </li>
                <li>
                  <a href="#clients" onClick={(e) => handleScroll(e, "clients")} className="hover:text-[#1a73e8]">Clients</a>
                </li>
                <li>
                  <a href="#accredian-edge" onClick={(e) => handleScroll(e, "accredian-edge")} className="hover:text-[#1a73e8]">Accredian Edge</a>
                </li>
                <li>
                  <a href="#cat" onClick={(e) => handleScroll(e, "cat")} className="hover:text-[#1a73e8]">CAT</a>
                </li>
                <li>
                  <a href="#how-it-works" onClick={(e) => handleScroll(e, "how-it-works")} className="hover:text-[#1a73e8]">How It Works</a>
                </li>
                <li>
                  <a href="#faqs" onClick={(e) => handleScroll(e, "faqs")} className="hover:text-[#1a73e8]">FAQs</a>
                </li>
                <li>
                  <a href="#testimonials" onClick={(e) => handleScroll(e, "testimonials")} className="hover:text-[#1a73e8]">Testimonials</a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="hover:text-[#1a73e8]">Contact</a>
                </li>
                <li>
                  <button onClick={(e) => handleScroll(e, "contact")} className="w-full rounded-full bg-[#1a73e8] px-6 py-2 text-white transition hover:bg-blue-700">
                    Enquire Now
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
