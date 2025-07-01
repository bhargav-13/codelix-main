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
  { name: 'Instagram', href: '#', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg> },
  { name: 'LinkedIn', href: '#', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 11v5M8 8v.01M12 16v-5m0 0a2 2 0 114 0v5" /></svg> },
  { name: 'GitHub', href: '#', icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.181 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.36.31.682.924.682 1.863 0 1.345-.012 2.428-.012 2.757 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg> },
  { name: 'WhatsApp', href: '#', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path d="M16.862 14.674c-.253-.127-1.494-.735-1.724-.82-.231-.084-.4-.127-.57.127-.169.253-.653.82-.8.989-.147.169-.293.191-.546.064-.253-.127-1.068-.393-2.034-1.253-.752-.67-1.26-1.497-1.409-1.75-.147-.253-.016-.39.111-.516.113-.113.253-.293.38-.44.127-.147.169-.253.253-.422.084-.169.042-.317-.021-.444-.064-.127-.57-1.375-.779-1.883-.206-.495-.416-.427-.57-.435-.147-.007-.317-.009-.487-.009-.169 0-.444.063-.678.317-.233.253-.89.87-.89 2.122 0 1.252.912 2.46 1.039 2.633.127.169 1.796 2.742 4.355 3.735.609.21 1.084.335 1.454.429.611.155 1.167.133 1.606.081.49-.058 1.494-.61 1.705-1.201.211-.592.211-1.099.147-1.201-.063-.103-.231-.169-.484-.296z" /></svg> },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-[#23262f] text-gray-300 pt-12 pb-2 px-2 md:px-0">
      <div className="max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
        {/* Contact Card */}
        <div className="bg-[#23262f] border border-[#353843] rounded-2xl p-6 flex flex-col min-w-[300px] max-w-sm mx-auto md:mx-0 shadow-lg">
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
              <p className="text-gray-400 text-sm">info@codelix.com</p>
              <p className="text-gray-400 text-sm">+91 9429629295</p>
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
