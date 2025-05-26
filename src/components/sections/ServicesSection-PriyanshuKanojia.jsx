import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ServicesSectionPriyanshuKanojia({ content }) {
  const {
    image_url = 'https://nails.nelson.themerex.net/wp-content/uploads/2022/06/gallery-nails-3-copyright-scaled-1.jpg',
    heading = 'SERVICE IS BEAUTIFUL',
    highlight = ['IS', 'BEAUTIFUL'],
    description = 'Our salon is created for women who appreciate high quality, perfect service, and a first-class look. Welcome to Nelson!',
    cta_text = 'READ MORE ABOUT US',
    cta_link = '/about',
  } = content || {};

  // Split heading and apply highlight
  const headingParts = heading.split(' ');

  return (
    <section className="w-full bg-[#232224] py-16 min-h-[calc(100vh-96px)] flex flex-col justify-center">
      {/* Main content: image + text */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left: Image with play button */}
        <div className="relative w-full max-w-2xl aspect-video rounded overflow-hidden shadow-lg">
          <Image
            src={image_url}
            alt="Service"
            fill
            className="object-cover"
            priority
          />
          {/* Play button overlay */}
          <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded w-14 h-14 flex items-center justify-center bg-white/10 hover:bg-white/20 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <polygon points="9,7 20,12 9,17" />
            </svg>
          </button>
        </div>
        {/* Right: Text content */}
        <div className="flex-1 max-w-xl text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-6 uppercase">
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
          <div className="h-1 w-24 bg-gray-500 mx-auto lg:mx-0 mb-8" />
          <p className="text-lg text-gray-300 mb-12">
            {description}
          </p>
          <Button
            asChild
            className="border-2 border-teal-400 bg-transparent text-white font-bold px-10 py-5 rounded-none text-lg hover:bg-teal-400 hover:text-black transition-colors"
          >
            <Link href={cta_link}>{cta_text}</Link>
          </Button>
        </div>
      </div>
      {/* Card Grid below main content */}
      <div className="container mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Card 1: Make Up */}
        <div className="bg-[#282828] rounded shadow-lg flex flex-col items-center p-12 text-center">
          {/* Icon */}
          <svg width="64" height="64" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6" viewBox="0 0 64 64">
            <rect x="10" y="40" width="8" height="16" rx="2"/>
            <rect x="28" y="32" width="8" height="24" rx="2"/>
            <ellipse cx="48" cy="48" rx="6" ry="16"/>
          </svg>
          <h3 className="text-2xl font-extrabold tracking-widest text-white mb-6 uppercase">MAKE UP</h3>
          <p className="text-lg text-gray-400 mb-8">Morbi fermentum tortor sit amet dui hendrerit non imperdiet massa venenatis. Phasellus condiment fermentum.</p>
          <a href="#" className="text-teal-400 font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:underline">
            SHOW PRICES <span className="text-xl">&gt;</span>
          </a>
        </div>
        {/* Card 2: Nail Art */}
        <div className="bg-[#282828] rounded shadow-lg flex flex-col items-center p-12 text-center">
          {/* Icon */}
          <svg width="64" height="64" fill="none" stroke="#e945ae" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6" viewBox="0 0 64 64">
            <ellipse cx="32" cy="44" rx="12" ry="10"/>
            <rect x="28" y="20" width="8" height="24" rx="2"/>
            <rect x="44" y="16" width="4" height="16" rx="1"/>
          </svg>
          <h3 className="text-2xl font-extrabold tracking-widest text-white mb-6 uppercase">NAIL ART</h3>
          <p className="text-lg text-gray-400 mb-8">Morbi fermentum tortor sit amet dui hendrerit non imperdiet massa venenatis. Phasellus condiment fermentum.</p>
          <a href="#" className="text-teal-400 font-bold uppercase tracking-wide flex items-center justify-center gap-2 hover:underline">
            SHOW PRICES <span className="text-xl">&gt;</span>
          </a>
        </div>
      </div>
    </section>
  );
} 