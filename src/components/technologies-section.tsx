'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function TechnologiesSection() {
  const technologies = [
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', bgColor: 'bg-white' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', bgColor: 'bg-white' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', bgColor: 'bg-white' },
    { name: 'Next.js', logo: '/mini-logo.svg', bgColor: 'bg-white' },
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', bgColor: 'bg-white' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', bgColor: 'bg-white' },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg', bgColor: 'bg-white' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', bgColor: 'bg-white' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', bgColor: 'bg-white' },
    { name: 'XD', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg', bgColor: 'bg-white' },
    { name: 'PowerBI', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg', bgColor: 'bg-white' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', bgColor: 'bg-white' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', bgColor: 'bg-white' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', bgColor: 'bg-white' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', bgColor: 'bg-white' },
    { name: 'Spring', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', bgColor: 'bg-white' },
    { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png', bgColor: 'bg-white' },
    { name: 'Render', logo: 'https://avatars.githubusercontent.com/u/42880151?s=200&v=4', bgColor: 'bg-white' },
    { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg', bgColor: 'bg-white' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', bgColor: 'bg-white' },
    // Custom PNGs from public/technologies
    { name: 'Tailwind', logo: '/technologies/tailwind.png', bgColor: 'bg-white' },
    { name: 'Shopify', logo: '/technologies/shopify.png', bgColor: 'bg-white' },
    { name: 'n8n', logo: '/technologies/n8n.png', bgColor: 'bg-white' },
    { name: 'Canva', logo: '/technologies/canva.png', bgColor: 'bg-white' },
  ];

  return (
    <section className="w-full pt-20 pb-8 bg-[#F2F8FC] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600">
            We use the latest technologies to build amazing products
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="bg-white rounded-xl p-6 flex flex-col items-center border-2 border-dashed border-gray-300 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
