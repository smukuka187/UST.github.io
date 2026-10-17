import Link from 'next/link';
import { mainNav, policies } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-cobalt text-white" role="contentinfo">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white text-cobalt rounded-lg flex items-center justify-center font-extrabold text-xl">
                ZL
              </div>
              <div className="leading-tight">
                <span className="block font-extrabold text-base">Zambia Library Center</span>
                <span className="block text-sm text-white/70">For the Visually Impaired</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering blind and visually impaired people in Zambia through access to knowledge, culture, practical skills, and opportunities for independent living.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://facebook.com" aria-label="Facebook" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-copper transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com" aria-label="Twitter / X" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-copper transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://youtube.com" aria-label="YouTube" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-copper transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="font-extrabold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/80 hover:text-copper text-sm no-underline hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Policies */}
          <nav aria-label="Policies and legal">
            <h2 className="font-extrabold text-lg mb-4">Policies & Downloads</h2>
            <ul className="space-y-2">
              {policies.map((policy) => (
                <li key={policy.href}>
                  <Link href={policy.href} className="text-white/80 hover:text-copper text-sm no-underline hover:underline">
                    {policy.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/policies" className="text-white/80 hover:text-copper text-sm no-underline hover:underline">
                  All Downloads & Resources
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="font-extrabold text-lg mb-4">Contact Us</h2>
            <address className="not-italic text-white/80 text-sm space-y-2">
              <p className="flex items-start gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>[Physical address to be confirmed]<br />Lusaka, Zambia</span>
              </p>
              <p className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+260975772837" className="text-white/80 hover:text-copper no-underline">+260 975 772 837</a>
              </p>
              <p className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
                </svg>
                <a href="mailto:info@zambialibrarycenter.org" className="text-white/80 hover:text-copper no-underline">info@zambialibrarycenter.org</a>
              </p>
              <p className="flex items-center gap-2">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="shrink-0">
                  <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                </svg>
                Mon–Fri: 08:00–17:00
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Zambia Library, Cultural and Skills Center for the Visually Impaired. All rights reserved.
          </p>
          <p className="text-white/60 text-sm">
            Designed &amp; developed by <span className="text-white font-semibold">DigitoBits Trading</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
