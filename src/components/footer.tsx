import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative w-full bg-[#212121] pt-16 pb-24 overflow-hidden min-h-[500px]">
      {/* Background text */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[75%] -translate-y-1/2 w-full text-center">
        <h2 
          className="font-mulish font-bold text-[280px] leading-[0.8] bg-gradient-to-r from-white/30 to-[#212121] bg-clip-text text-transparent opacity-30 whitespace-nowrap"
        >
          CODELIX
        </h2>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Navigation */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-mulish text-white text-xl font-medium mb-2">Codelix</h3>
            <Link href="/services" className="font-mulish text-white text-base font-normal hover:opacity-80 transition-opacity">
              Services
            </Link>
            <Link href="/portfolio" className="font-mulish text-white text-base font-normal hover:opacity-80 transition-opacity">
              Portfolio
            </Link>
            <Link href="/contact" className="font-mulish text-white text-base font-normal hover:opacity-80 transition-opacity">
              Contact us
            </Link>
          </div>

          {/* Middle Column - Social */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-mulish text-white text-xl font-medium mb-2">Follow Us</h3>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
              className="font-mulish text-white text-base font-normal hover:opacity-80 transition-opacity">
              Instagram
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="font-mulish text-white text-base font-normal hover:opacity-80 transition-opacity">
              Linkedin
            </Link>
          </div>

          {/* Right Column - Newsletter */}
          <div className="max-w-[400px]">
            <h3 className="font-mulish text-white text-xl font-medium mb-4">
              Let's Connect
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="font-montserrat w-full bg-transparent text-white text-sm font-light border-b border-white/50 pb-1 placeholder-white/30 focus:outline-none"
                />
              </div>
              <button className="border border-white/50 px-6 py-1 text-white hover:bg-white/10 transition-colors text-sm">
                <span className="font-montserrat text-sm font-light">SEND</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
