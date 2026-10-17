import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Cookie Notice' };

export default function CookiesPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16" aria-labelledby="cookies-hero">
        <div className="container-wide max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-copper no-underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/policies" className="hover:text-copper no-underline">Policies</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">Cookie Notice</li>
            </ol>
          </nav>
          <h1 id="cookies-hero" className="text-3xl md:text-4xl font-extrabold">Cookie Notice</h1>
        </div>
      </section>

      <section className="section-padding bg-bone">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-ink/60 text-sm">Last updated: October 2026</p>

            <p className="text-ink/80 leading-relaxed">
              This Cookie Notice explains how the Zambia Library, Cultural and Skills Center for the
              Visually Impaired uses cookies on our website.
            </p>

            <h2 className="text-xl font-bold text-cobalt">What Are Cookies?</h2>
            <p className="text-ink/80 leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They help
              the website function properly and provide analytics about usage.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Cookies We Use</h2>
            <ul className="space-y-2 text-ink/80">
              <li><strong>Essential cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
              <li><strong>Analytics cookies:</strong> Help us understand how visitors use our website so we can improve it. These are configured to be privacy-conscious.</li>
              <li><strong>Preference cookies:</strong> Remember your accessibility settings, such as high-contrast mode and text size.</li>
            </ul>

            <h2 className="text-xl font-bold text-cobalt">Managing Cookies</h2>
            <p className="text-ink/80 leading-relaxed">
              You can control and delete cookies through your browser settings. Note that disabling
              cookies may affect the functionality of the website.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Contact Us</h2>
            <p className="text-ink/80 leading-relaxed">
              For questions about our use of cookies, contact{' '}
              <a href="mailto:info@zambialibrarycenter.org" className="underline">info@zambialibrarycenter.org</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
