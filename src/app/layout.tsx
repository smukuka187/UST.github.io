import type { Metadata } from 'next';
import './globals.css';
import { AccessibilityProvider } from '@/components/AccessibilityProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Zambia Library, Cultural and Skills Center for the Visually Impaired',
    template: '%s | Zambia Library Center',
  },
  description:
    'Empowering blind and visually impaired people in Zambia through access to knowledge, culture, practical skills, and opportunities for independent living.',
  keywords: ['Zambia', 'visually impaired', 'blind', 'Braille', 'library', 'accessibility', 'disability', 'skills training', 'assistive technology'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-contrast="normal">
      <body>
        <AccessibilityProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
        </AccessibilityProvider>
      </body>
    </html>
  );
}
