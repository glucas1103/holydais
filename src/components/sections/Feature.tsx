import React from 'react';

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description, image }) => {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-6xl mx-auto mb-24">
      <h3 className="text-3xl font-semibold mb-4 text-neutral-800">{title}</h3>
      <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">{description}</p>
      <div className="relative w-full max-w-[1200px] h-[600px] rounded-2xl overflow-hidden shadow-xl mx-auto">
        <img
          src="/gradient-hero-prerender.jpeg"
          alt="Fond illustratif Holydais"
          className="absolute inset-0 w-full h-full object-cover object-center select-none pointer-events-none"
        />
        <div className="relative z-10 w-full h-full flex items-end justify-center">
          <img
            src={image}
            alt={title}
            className="h-[95%] max-h-none w-auto object-contain mx-auto mb-0"
            style={{objectPosition: 'bottom'}}
          />
        </div>
      </div>
    </div>
  );
};

export default Feature; 