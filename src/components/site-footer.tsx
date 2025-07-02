'use client';

import Link from 'next/link';
import Image from 'next/image';

const infoLinks = [
  { label: 'Codelix', href: '/home' },
  { label: 'Work', href: '/portfolio' },
  { label: 'Services', href: '/services' },
  { label: 'Contact', href: '/contact' },
];

const techLinks = [
  'Node.js', 'React.js', 'Java', 'Flutter', 'UI/UX', 'Agentic AI'
];

const contactInfo = [
  { label: '+91 9429629295', href: 'tel:+919429629295' },
  { label: 'info@codelix.com', href: 'mailto:info@codelix.com' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/codelix.in', // Replace with your actual Instagram URL
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect width="18" height="18" x="3" y="3" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/codelixit-solutions/', // Replace with your actual LinkedIn URL
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M8 11v5M8 8v.01M12 16v-5m0 0a2 2 0 114 0v5" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/', // Replace with your actual Facebook URL
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#1877F3" />
        <path d="M15.36 8.5H13.5V7.4c0-.44.29-.54.49-.54h1.31V4.97L13.52 5c-2.13 0-2.62 1.59-2.62 2.61v.89H9v2.15h1.9V19h2.6v-7.35h1.75l.21-2.15z" fill="#fff"/>
      </svg>
    ),
  },
  {
    name: 'Upwork',
    href: 'https://www.upwork.com/agencies/1909135382009927479/', // Replace with your actual Upwork URL
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M61.5 40.7c0-5.1-4.1-9.2-9.2-9.2-4.1 0-7.5 2.7-8.8 6.4l-4.6-8.9-4.7 2.4 3.9 7.6c-1.7 1.1-3.7 1.7-5.8 1.7-5.8 0-10.5-4.7-10.5-10.5V27H16v3.2c0 8.7 7 15.7 15.7 15.7 2.7 0 5.2-.7 7.4-1.9l2.3 4.5c-1.2 2.1-2.9 3.8-5.1 3.8-2.5 0-4.6-2.7-4.6-6V27h-4.3v19.3c0 6.3 4.5 10.7 10.5 10.7 4.2 0 7.5-2.3 9.7-5.8l2.6 5.1h4.7l-5.2-10c.5-1.2.8-2.5.8-3.8zm-9.2 5.4c-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4s5.4 2.4 5.4 5.4c0 3-2.4 5.4-5.4 5.4z" fill="#6fda44"/>
        </g>
      </svg>
    ),
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-[#23262f] text-gray-300 pt-12 pb-2 px-2 md:px-0">
      <div className="max-w-7xl mx-auto relative flex flex-wrap justify-around items-start">
        {/* Contact Card */}
        <div className="bg-[#23262f] border border-[#353843] rounded-2xl p-6 flex flex-col min-w-[300px] max-w-sm w-full md:w-1/4 mx-auto md:mx-0 shadow-lg mb-8 md:mb-0">
          <span className="text-xs text-blue-400 tracking-widest mb-2">START THE CONVERSATION</span>
          <div className="mb-2">
            <span className="text-2xl font-semibold text-blue-400">Together</span>
            <span className="text-2xl font-normal text-gray-200">, we create what others only imagine.</span>
          </div>
          <input className="bg-transparent border border-[#353843] rounded-md px-3 py-2 text-sm mb-2 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="YOUR NAME" />
          <input className="bg-transparent border border-[#353843] rounded-md px-3 py-2 text-sm mb-4 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="PHONE NUMBER" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-5 py-2 text-sm font-semibold transition">Send a request</button>
        </div>

        {/* Info Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4" style={{ color: '#3E7DFC' }}>INFO</h3>
          <div className="space-y-2">
            {infoLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base text-gray-400 hover:text-white block"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Tech Column */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4" style={{ color: '#3E7DFC' }}>TECHNOLOGIES</h3>
          <ul className="space-y-2">
            {techLinks.map(tech => (
              <li key={tech} className="text-sm text-gray-200">{tech}</li>
            ))}
          </ul>
        </div>

        {/* Contact & Join Now Column */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4" style={{ color: '#3E7DFC' }}>CONTACT INFO</h3>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">info@codelix.in</p>
              <p className="text-gray-400 text-sm">+91 9429269295</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase mb-4" style={{ color: '#3E7DFC' }}>JOIN NOW</h3>
            <form className="flex bg-[#23262f] border border-[#353843] rounded-lg overflow-hidden">
              <input type="email" placeholder="E-mail" className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-200 placeholder-gray-400 focus:outline-none" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.75L21 12m0 0l-3.75 3.25M21 12H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Mini Logo at top right */}
        <div className="absolute top-0 right-0 hidden md:block">
          <Image src="/mini-logo.svg" alt="Codelix Logo" width={56} height={56} className="mb-6" />
        </div>
      </div>

      {/* Social Links Row */}


      <div className="max-w-7xl mx-auto mt-10 border-t border-[#353843] pt-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
        <span>&copy; {currentYear} — All Copyright Reserved</span>
        <div className="flex gap-4 my-2 md:my-0">
          {socialLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-[#353843] text-gray-400 hover:text-blue-400 hover:border-blue-400 transition"
            >
              <span className="sr-only">{item.name}</span>
              {item.icon}
            </Link>
          ))}
        </div>
        <span className="mt-2 md:mt-0">Codelix</span>
      </div>
    </footer>
  );
}
