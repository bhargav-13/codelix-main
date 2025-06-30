'use client';
import { UnapologeticButton } from '@/components/ui/UnapologeticButton';

export function UnapologeticButtonsGrid() {
  const items = Array.from({ length: 25 });

  return (
    <section className="py-24 px-4 text-center">
      <h2 className="text-3xl font-semibold mb-12">Why Choose us?</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
        {items.map((_, idx) => (
          <UnapologeticButton key={idx}>Unapologetic</UnapologeticButton>
        ))}
      </div>
    </section>
  );
}
