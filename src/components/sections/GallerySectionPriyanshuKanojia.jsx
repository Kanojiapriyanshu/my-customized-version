import Image from 'next/image';

export default function GallerySectionPriyanshuKanojia({ content }) {
  const {
    images = [],
    overlay_text = '@NELSONBEAUTY',
  } = content || {};

  return (
    <section className="bg-black py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
        {images.map((src, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img
              src={src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {index === 2 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-center">
                <div>
                  <p className="text-xl font-bold">{overlay_text}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
