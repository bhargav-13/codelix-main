'use client';

import { cn } from '@/lib/utils';

interface UnapologeticButtonProps {
  children: React.ReactNode;
  className?: string;
}

export function UnapologeticButton({ children, className }: UnapologeticButtonProps) {
  return (
    <button
      className={cn(
        'relative inline-block px-8 py-2 border border-white text-white bg-transparent group overflow-hidden transition duration-200',
        className
      )}
    >
      {/* Corner overlay with custom color #212121 */}
      <span className="absolute inset-0 overflow-hidden">
        <span className="absolute -bottom-2 -right-2 h-full w-full bg-[#212121] transition-all duration-200 ease-in-out group-hover:bottom-0 group-hover:right-0" />
      </span>

      {/* Text label */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
