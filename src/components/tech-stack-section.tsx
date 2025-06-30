'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const technologies = [
  { name: 'React', logo: '/technologies/react.svg' },
  { name: 'Next.js', logo: '/technologies/nextjs.svg' },
  { name: 'Node.js', logo: '/technologies/nodejs.svg' },
  { name: 'TypeScript', logo: '/technologies/typescript.svg' },
  { name: 'Tailwind CSS', logo: '/technologies/tailwindcss.svg' },
  { name: 'MongoDB', logo: '/technologies/mongodb.svg' },
  { name: 'PostgreSQL', logo: '/technologies/postgresql.svg' },
  { name: 'GraphQL', logo: '/technologies/graphql.svg' },
];

export function TechStackSection() {
  return (
    <section className="w-full py-20 bg-[#F2F8FC]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to build exceptional digital experiences
          </p>
        </div>

        <div className="relative">
          {/* Dotted border container */}
          <div className="absolute inset-0 border-2 border-dashed border-gray-300 rounded-2xl -m-4 pointer-events-none" />
          
          {/* Grid of technologies */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-white rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
      </div>
    </section>
  );
}
