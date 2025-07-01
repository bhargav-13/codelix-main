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

  useEffect(() => {
    if (!paused) {
      timeoutRef.current = setTimeout(() => {
        setActive((prev) => (prev + 1) % testimonials.length);
      }, 3500);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [active, paused]);

  return (
    <section
      className="w-full py-20 bg-[#F2F8FC] relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-12">
          Client Reviews
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Slider */}
          <div className="flex w-full max-w-4xl overflow-hidden">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className={`min-w-full transition-transform duration-700 ease-in-out ${
                  idx === active ? "translate-x-0 opacity-100" : idx < active ? "-translate-x-full opacity-0" : "translate-x-full opacity-0"
                } absolute left-0 top-0 w-full`}
                style={{ position: idx === active ? "relative" : "absolute" }}
              >
                <div className="bg-white rounded-xl shadow-md p-8 flex flex-col gap-4 items-start min-h-[220px]">
                  <p className="text-lg text-gray-700 mb-4">{t.text}</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold border">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t.author}</div>
                      <div className="text-sm text-gray-500">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
