import Link from 'next/link';

export default function FooterPriyanshuKanojia({ content }) {
  const {
    nav_links = [
      { label: 'Services', href: '/services' },
      { label: 'About us', href: '/about' },
      { label: 'Features', href: '/features' },
      { label: 'News', href: '/news' },
      { label: 'Shop', href: '/shop' },
      { label: 'Contacts', href: '/contacts' },
      { label: 'Appointment', href: '/appointment' },
    ],
    logo = 'Nelson',
    logo_url = null,
    copyright = '© 2025. All Rights Reserved.',
    theme_credit = 'ThemeREX',
  } = content || {};

  return (
    <footer className="bg-[#232224] text-white py-16">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          {logo_url ? (
            <Link href="/" className="block">
              <img
                src={logo_url}
                alt={logo}
                className="h-10 w-auto object-contain"
              />
            </Link>
          ) : (
            <Link href="/" className="text-3xl font-bold" style={{ fontFamily: 'cursive' }}>
              {logo}
            </Link>
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center flex-wrap gap-6 mb-8">
          {nav_links.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="text-white text-sm hover:text-yellow-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          {theme_credit} <span className="font-medium">{copyright}</span>
        </div>
      </div>
    </footer>
  );
}
