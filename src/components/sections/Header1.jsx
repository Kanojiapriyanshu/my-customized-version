import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

export default function HeaderSectionPriyanshuKanojia({ content }) {
  const {
    logo = 'Nelson',
    logo_url = null,
    nav_links = [],
    cart = { icon: true, price: '$0.00' },
    appointment_button = { label: 'APPOINTMENT', href: '/appointment' },
    background = '#232224',
  } = content || {};

  return (
    <header
      className="w-full border-b"
      style={{ background }}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {logo_url ? (
            <Link href="/" className="block">
              <img src={logo_url} alt={logo} className="h-10 w-auto object-contain" />
            </Link>
          ) : (
            <Link href="/" className="text-2xl font-bold text-white font-cursive">
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
              className="text-base font-medium text-white hover:text-pink-400 transition-colors"
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
              className="bg-transparent border-2 border-pink-400 text-white font-bold px-6 py-2 rounded hover:bg-pink-400 hover:text-white transition-colors"
            >
              <Link href={appointment_button.href}>{appointment_button.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
} 