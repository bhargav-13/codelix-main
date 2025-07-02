"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";

// Sample testimonials data
const testimonials = [
  {
    text: `Working with Codelix was a game-changer for our business. Their team understood our vision and delivered a stunning product ahead of schedule. Truly exceptional service!`,
    author: "Harsh Vora",
    role: "Startup Founder",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    text: `The communication and professionalism from Codelix were top-notch. Our app launch was seamless and the quality exceeded our expectations. Highly recommend!`,
    author: "Daksh Patel",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    text: `Codelix’s creative team brought our ideas to life with beautiful UI/UX and robust functionality. They went above and beyond at every step.
`,
    author: "Manish Sharma",
    role: "Tech Lead",
    avatar: "https://randomuser.me/api/portraits/men/85.jpg",
  },
  {
    text: `I was impressed by the attention to detail and the collaborative approach. The project was delivered on time and the results were fantastic!`,
    author: "Amisha Singh",
    role: "Marketing Director",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: `From start to finish, Codelix made the whole process smooth and stress-free. The team is talented, responsive, and truly cares about client success.`,
    author: "Meet Songara",
    role: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    text: `Choosing Codelix was the best decision for our digital transformation. Their expertise in tech and design is unmatched. We saw real results fast!`,
    author: "Dev Mehta",
    role: "Operations Head",
    avatar: "https://randomuser.me/api/portraits/men/23.jpg",
  },
];

export function TestimonialSliderSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const visibleCount = 5;

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, paused]);

  // Helper to get the visible testimonials (center + sides)
  const getVisible = () => {
    const arr = [];
    for (let i = -2; i <= 2; i++) {
      let idx = (active + i + testimonials.length) % testimonials.length;
      arr.push({ ...testimonials[idx], pos: i, idx });
    }
    return arr;
  };

  return (
    <section
      className="w-full py-20 bg-[#F2F8FC] relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
          Client Reviews
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Slider */}
          <div className="relative flex w-full max-w-6xl h-[380px] items-center justify-center">
            {getVisible().map(({ text, author, role, avatar, pos, idx }) => {
              // 5-card scaling/opacity: -2/-2, -1/-1, 0/center, +1/+1, +2/+2
              let scale = 0.7, opacity = 0.2, zIndex = 1, width = '260px';
              if (pos === 0) { scale = 1; opacity = 1; zIndex = 10; width = '600px'; }
              else if (Math.abs(pos) === 1) { scale = 0.85; opacity = 0.5; zIndex = 5; width = '420px'; }
              else if (Math.abs(pos) === 2) { scale = 0.7; opacity = 0.2; zIndex = 1; width = '260px'; }
              const translateX = pos * 270;
              return (
                <div
                  key={idx}
                  className="absolute left-1/2 top-1/2 transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                    opacity,
                    zIndex,
                    width,
                    maxWidth: '95vw',
                    pointerEvents: pos === 0 ? 'auto' : 'none',
                  }}
                >
                  <div className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4 items-start min-h-[220px]">
                    <p className="text-lg text-gray-700 mb-4">{text}</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold border">
                        {author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{author}</div>
                        <div className="text-sm text-gray-500">{role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Navigation dots */}
          <div className="absolute bottom-[-32px] left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border-2 ${idx === active ? "bg-gray-800 border-gray-800" : "bg-white border-gray-400"}`}
                onClick={() => setActive(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
