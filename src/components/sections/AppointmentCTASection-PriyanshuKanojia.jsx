import Image from 'next/image';
import { useState } from 'react';

export default function AppointmentCTASectionPriyanshuKanojia({ content }) {
  const {
    background_url = 'https://nails.nelson.themerex.net/wp-content/uploads/2022/06/image-1-nails-copyright-scaled-1.jpg',
    heading = 'MAKE AN APPOINTMENT',
    highlight = ['MAKE'],
    button_text = 'SEND MESSAGE',
    privacy_text = 'I have read and agree with the Privacy Policy.',
    privacy_link = '/privacy',
  } = content || {};

  const [checked, setChecked] = useState(true);

  // Split heading for highlight
  const headingParts = heading.split(' ');

  return (
    <section className="relative w-full min-h-[calc(100vh-96px)] flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={background_url}
          alt="Appointment Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-4 py-24">
        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-extrabold uppercase text-center mb-4 tracking-wider">
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
        <div className="h-1 w-24 bg-white/70 mx-auto mb-12" />
        {/* Form */}
        <form className="w-full max-w-5xl flex flex-col items-center">
          <div className="w-full flex flex-col md:flex-row gap-6 mb-8">
            <input
              type="text"
              placeholder="NAME"
              className="flex-1 bg-transparent border-2 border-white text-white text-lg font-bold px-8 py-6 uppercase placeholder-white focus:outline-none focus:border-pink-500 transition"
            />
            <input
              type="email"
              placeholder="EMAIL"
              className="flex-1 bg-transparent border-2 border-white text-white text-lg font-bold px-8 py-6 uppercase placeholder-white focus:outline-none focus:border-pink-500 transition"
            />
            <input
              type="tel"
              placeholder="PHONE"
              className="flex-1 bg-transparent border-2 border-white text-white text-lg font-bold px-8 py-6 uppercase placeholder-white focus:outline-none focus:border-pink-500 transition"
            />
            <button
              type="submit"
              className="flex-1 md:max-w-[220px] border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white font-bold text-lg uppercase px-8 py-6 transition bg-transparent"
            >
              {button_text}
            </button>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="accent-teal-400 w-5 h-5 border-2 border-white bg-transparent rounded focus:ring-0"
              id="privacy"
            />
            <label htmlFor="privacy" className="text-gray-300 text-lg select-none">
              I have read and agree with the{' '}
              <a href={privacy_link} className="text-teal-400 underline hover:text-teal-300" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>.
            </label>
          </div>
        </form>
      </div>
    </section>
  );
} 