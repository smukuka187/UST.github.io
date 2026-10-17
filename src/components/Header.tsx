'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { mainNav } from '@/lib/data';
import AccessibilityToolbar from './AccessibilityToolbar';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-cobalt shadow-md" role="banner">
      {/* Top utility bar */}
      <div className="bg-cobalt text-white">
        <div className="container-wide flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+260975772837" className="flex items-center gap-1.5 text-white hover:text-copper transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="hidden sm:inline">+260 975 772 837</span>
              <span className="sm:hidden">Call us</span>
            </a>
            <a href="mailto:info@zambialibrarycenter.org" className="hidden md:flex items-center gap-1.5 text-white hover:text-copper transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              info@zambialibrarycenter.org
            </a>
          </div>
          <div className="hidden lg:block">
            <AccessibilityToolbar />
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-wide">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 no-underline" aria-label="Zambia Library, Cultural and Skills Center for the Visually Impaired — Home">
            <div className="w-12 h-12 bg-cobalt rounded-lg flex items-center justify-center text-white font-extrabold text-xl shrink-0">
              ZL
            </div>
            <div className="leading-tight">
              <span className="block font-extrabold text-cobalt text-base md:text-lg">Zambia Library Center</span>
              <span className="block text-xs md:text-sm text-ink/60">For the Visually Impaired</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 text-sm font-bold rounded-lg transition-colors no-underline ${
                  isActive(item.href)
                    ? 'bg-cobalt text-white'
                    : 'text-ink hover:bg-cobalt/10 hover:text-cobalt'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center justify-center w-12 h-12 rounded-lg border-2 border-cobalt text-cobalt"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden bg-white border-t-2 border-cobalt/20"
          aria-label="Mobile navigation"
        >
          <div className="container-wide py-4 flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 font-bold rounded-lg transition-colors no-underline ${
                  isActive(item.href) ? 'bg-cobalt text-white' : 'text-ink hover:bg-cobalt/10'
                }`}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-3 mt-2 border-t border-cobalt/10">
              <AccessibilityToolbar />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
