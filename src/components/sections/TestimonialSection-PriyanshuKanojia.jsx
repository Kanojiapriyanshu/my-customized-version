import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Being in the business for almost a decade, I can tell that this place is absolutely worth your time and money. Thank you so much!",
    name: "FIONA WILLSON",
  },
  {
    quote: "The staff is very professional and the atmosphere is relaxing. I always leave feeling beautiful!",
    name: "JESSICA SMITH",
  },
  {
    quote: "Excellent service and friendly people. Highly recommended!",
    name: "EMILY JOHNSON",
  },
];

export default function TestimonialSectionPriyanshuKanojia({ content }) {
  const {
    image_url = 'https://nails.nelson.themerex.net/wp-content/uploads/2022/06/image-2-nails-copyright-scaled-1.jpg',
    heading = 'WHAT CLIENTS SAY ABOUT',
    highlight = ['WHAT', 'SAY', 'ABOUT'],
  } = content || {};

  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index];
  const headingParts = heading.split(' ');

  const handlePrev = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full bg-[#232224] min-h-[calc(100vh-96px)] flex items-center justify-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 h-[600px]">
        {/* Left: Image background with overlay and content */}
        <div className="flex-1 relative h-full w-full rounded overflow-hidden flex items-center justify-center">
          <Image
            src={image_url}
            alt="Testimonial Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 w-full h-full flex flex-col justify-center items-start px-8">
            {/* Heading */}
            <h2 className="text-5xl md:text-6xl font-extrabold uppercase mb-8 tracking-wider text-left text-white">
              {headingParts.map((word, idx) => (
                <span
                  key={idx}
                  className={
                    highlight.includes(word)
                      ? 'text-pink-500'
                      : 'text-white'
                  }
                >
                  {word + ' '}
                </span>
              ))}
            </h2>
            <div className="h-1 w-32 bg-gray-300 mb-10" />
            {/* Quote */}
            <div className="flex items-start gap-4 mb-8 min-h-[90px]">
              <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-teal-400 flex-shrink-0 mt-1"><text x="0" y="38" fontSize="48" fill="#14b8a6">“</text></svg>
              <p className="text-2xl text-gray-100 leading-relaxed font-normal">{testimonial.quote}</p>
            </div>
            <div className="text-pink-500 font-bold text-xl mb-12 min-h-[32px]">{testimonial.name}</div>
            {/* Arrows */}
            <div className="flex items-center gap-16 mt-4">
              <button onClick={handlePrev} aria-label="Previous" className="focus:outline-none">
                <svg width="56" height="32" fill="none" viewBox="0 0 56 32"><line x1="44" y1="16" x2="12" y2="16" stroke="#6b7280" strokeWidth="3"/><polyline points="24,6 12,16 24,26" fill="none" stroke="#6b7280" strokeWidth="3"/></svg>
              </button>
              <button onClick={handleNext} aria-label="Next" className="focus:outline-none">
                <svg width="56" height="32" fill="none" viewBox="0 0 56 32"><line x1="12" y1="16" x2="44" y2="16" stroke="#14b8a6" strokeWidth="3"/><polyline points="32,6 44,16 32,26" fill="none" stroke="#14b8a6" strokeWidth="3"/></svg>
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
} 