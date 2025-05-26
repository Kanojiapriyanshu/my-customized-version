import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSectionPriyanshuKanojia({ content }) {
  const {
    title = 'STELLA NELSON,',
    subtitle = 'BEAUTY ARTIST',
    description = 'Come by for a haircut, nail service and good mood',
    background_url = '',
    cta_text = 'VIEW OUR SERVICES',
    cta_link = '/services',
  } = content || {};

  return (
    <div className="relative w-full overflow-hidden min-h-[calc(100vh-96px)]" style={{backgroundColor:'#18171a'}}>
      {/* Background image */}
      {background_url && (
        <div className="absolute inset-0 z-0">
          <Image
            src={background_url}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
      )}
      <div className="container relative z-10 mx-auto px-4 flex flex-col justify-center min-h-[calc(100vh-96px)]">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-2">
            {title}
            <br />
            <span className="text-pink-500" style={{letterSpacing:'2px'}}>{subtitle}</span>
          </h1>
          <div className="h-1 w-12 bg-white my-6" />
          <p className="text-lg text-white mb-10">{description}</p>
          {cta_text && cta_link && (
            <Button
              asChild
              className="border-2 border-teal-400 bg-transparent text-white font-bold px-8 py-4 rounded-none text-lg hover:bg-teal-400 hover:text-black transition-colors"
            >
              <Link href={cta_link}>{cta_text}</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}