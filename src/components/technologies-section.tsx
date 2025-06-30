'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function TechnologiesSection() {
  const technologies = [
    { 
      name: 'Next.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'React', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'Node.js', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'TypeScript', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'Tailwind CSS', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'MongoDB', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'PostgreSQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      bgColor: 'bg-white'
    },
    { 
      name: 'GraphQL', 
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
      bgColor: 'bg-white'
    },
  ];

  return (
    <section className="w-full py-20 bg-[#F2F8FC] relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600">
            We use the latest technologies to build amazing products
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-xl p-6 flex flex-col items-center border-2 border-dashed border-gray-300 hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <Image 
                    src={tech.logo} 
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="object-contain"
                    decoding="async"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
