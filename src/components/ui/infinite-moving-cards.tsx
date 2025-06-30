"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface InfiniteMovingCardsProps {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = React.useState(false);

  // Setup animation and handle cleanup
  React.useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;

    const scroller = scrollerRef.current;
    const container = containerRef.current;
    
    // Set animation properties
    container.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );
    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );

    // Remove any existing duplicated items
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item: Element) => {
      if (item.hasAttribute('data-duplicated')) {
        scroller.removeChild(item);
      }
    });

    // Add new duplicated items
    scrollerContent.forEach((item: Element) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      if (duplicatedItem instanceof HTMLElement) {
        duplicatedItem.setAttribute('data-duplicated', 'true');
        scroller.appendChild(duplicatedItem);
      }
    });

    // Set up animation
    scroller.style.animation = `scroll ${speed === "fast" ? 20 : speed === "normal" ? 40 : 80}s linear infinite`;
    scroller.style.animationDirection = direction === "left" ? "normal" : "reverse";

    // Handle hover pause if enabled
    const pauseAnimation = () => {
      scroller.style.animationPlayState = "paused";
    };
    
    const resumeAnimation = () => {
      scroller.style.animationPlayState = "running";
    };

    if (pauseOnHover) {
      scroller.addEventListener("mouseenter", pauseAnimation);
      scroller.addEventListener("mouseleave", resumeAnimation);
    }

    setStart(true);

    // Cleanup function
    return () => {
      if (pauseOnHover) {
        scroller.removeEventListener("mouseenter", pauseAnimation);
        scroller.removeEventListener("mouseleave", resumeAnimation);
      }
      // Reset animation
      scroller.style.animation = 'none';
      scroller.offsetHeight; // Trigger reflow
    };
  }, [direction, speed, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start ? "animate-scroll" : "",
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-neutral-800 bg-neutral-950 px-8 py-6 md:w-[450px] text-white"
          >
            <blockquote>
              <p className="text-sm leading-relaxed text-white">{item.quote}</p>
              <footer className="mt-4">
                <div className="text-sm font-semibold text-white">{item.name}</div>
                <div className="text-xs text-neutral-400">{item.title}</div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
