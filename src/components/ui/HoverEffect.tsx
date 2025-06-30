'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export interface HoverItem {
  title: string;
  description: string;
  link: string;
}

export function HoverEffect({
  items,
  className,
}: {
  items: HoverItem[];
  className?: string;
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={idx}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative block p-6 h-full w-full group bg-[#1e1e1e] rounded-2xl overflow-hidden border border-gray-700 transition"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                key="overlay"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 mix-blend-overlay pointer-events-none"
              />
            )}
          </AnimatePresence>

          <h3 className="text-xl font-semibold text-white z-10 relative">
            {item.title}
          </h3>
          <p className="mt-2 text-gray-400 z-10 relative">
            {item.description}
          </p>
        </a>
      ))}
    </div>
  );
}
