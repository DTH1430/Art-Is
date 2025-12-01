import React from 'react';
import { SectionProps } from '../types';

export const TextSection: React.FC<SectionProps> = ({ title, content, alignment = 'left', isLarge = false }) => {
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[alignment];

  return (
    <section className={`w-full min-h-[50vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 ${alignmentClass}`}>
      {title && (
        <h2 className="text-xs font-bold tracking-[0.3em] uppercase mb-8 opacity-40">
          {title}
        </h2>
      )}
      <div className={`leading-tight font-light ${isLarge ? 'text-4xl md:text-6xl lg:text-8xl tracking-tighter' : 'text-xl md:text-2xl max-w-2xl'}`}>
        {content}
      </div>
    </section>
  );
};