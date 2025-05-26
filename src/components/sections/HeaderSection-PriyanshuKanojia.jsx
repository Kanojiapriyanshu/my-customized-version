import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function HeaderSectionPriyanshuKanojia({ content }) {
  const {
    logo = 'Nelson',
    logo_url = null,
    nav_links = [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'About us', href: '/about' },
      { label: 'Pages', href: '/pages' },
      { label: 'News', href: '/news' },
      { label: 'Shop', href: '/shop' },
      { label: 'Contacts', href: '/contacts' },
      { label: 'Appointment', href: '/appointment' },
    ],
    cart = { icon: true, price: '$0.00' },
    appointment_button = { label: 'APPOINTMENT', href: '/appointment' },
    background = '#232224',
  } = content || {};

  return (
    <header
      className="w-full border-b"
      style={{ background }}
    >
      <div className="container mx-auto px-4 py-8 flex items-center justify-between min-h-[96px]">
        {/* Logo */}
        <div className="flex items-center">
          {logo_url ? (
            <Link href="/" className="block">
              <img src={logo_url} alt={logo} className="h-10 w-auto object-contain" />
            </Link>
          ) : (
            <Link href="/" className="text-3xl font-bold text-white" style={{ fontFamily: 'cursive' }}>
              {logo}
            </Link>
          )}
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {nav_links.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className={
                'text-base font-medium transition-colors' +
                (item.label === 'Home'
                  ? ' text-pink-400'
                  : ' text-white hover:text-pink-400')
              }
              style={item.label === 'Home' ? { fontWeight: 500 } : {}}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Cart & Appointment */}
        <div className="flex items-center gap-6">
          {cart?.icon && (
            <div className="flex items-center gap-1 text-white">
              <ShoppingCart size={20} />
              <span className="text-sm font-semibold">{cart.price}</span>
            </div>
          )}
          {appointment_button?.label && (
            <Button
              asChild
              className="bg-transparent border-2 border-pink-400 text-white font-bold px-6 py-2 rounded-none hover:bg-pink-400 hover:text-white transition-colors text-base tracking-wide"
              style={{ boxShadow: '0 0 0 2px #e945ae' }}
            >
              <Link href={appointment_button.href}>{appointment_button.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
} 