"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Column 1 */}
          <div className="flex flex-col items-start gap-4">
            <span className="text-xl font-bold">accredian</span>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a href="https://www.linkedin.com/school/accredianedu/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                LinkedIn
              </a>
              <a href="https://x.com/accredianedu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Twitter
              </a>
              <a href="https://www.facebook.com/accredianlearn" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Facebook
              </a>
              <a href="https://www.instagram.com/accredian_edu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                Instagram
              </a>
              <a href="https://www.instagram.com/accredian_edu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                YouTube
              </a>
            </div>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="mt-2 rounded-lg bg-[#1a73e8] px-6 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Enquire Now
            </button>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="mb-2 text-sm font-semibold text-gray-400">
              Accredian
            </h3>
            <a href="https://accredian.com/About" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white/80">
              About
            </a>
            <a href="https://blog.accredian.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white/80">
              Blog
            </a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-start gap-2">
            <h3 className="mb-2 text-sm font-semibold text-gray-400">
              Contact Us
            </h3>
            <p className="text-sm">
              Email:{" "}
              <a
                href="mailto:enterprise@accredian.com"
                className="hover:text-white/80"
              >
                enterprise@accredian.com
              </a>
            </p>
            <p className="text-sm text-gray-300">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 A Brand of Fullstack Education Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
