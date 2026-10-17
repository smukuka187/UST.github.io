import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16" aria-labelledby="policy-hero">
        <div className="container-wide max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-copper no-underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/policies" className="hover:text-copper no-underline">Policies</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">Privacy Policy</li>
            </ol>
          </nav>
          <h1 id="policy-hero" className="text-3xl md:text-4xl font-extrabold">Privacy Policy</h1>
        </div>
      </section>

      <section className="section-padding bg-bone">
        <div className="container-wide max-w-3xl prose-lg">
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-ink/60 text-sm">Last updated: October 2026</p>

            <p className="text-ink/80 leading-relaxed">
              The Zambia Library, Cultural and Skills Center for the Visually Impaired (&ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;the Center&rdquo;) is committed to protecting the privacy of our website
              visitors, donors, beneficiaries, and partners. This Privacy Policy explains how we
              collect, use, and protect your personal information.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Information We Collect</h2>
            <p className="text-ink/80 leading-relaxed">We collect the following types of information:</p>
            <ul className="space-y-2 text-ink/80">
              <li><strong>Contact information:</strong> Name, email address, telephone number, and organisation name when you submit an enquiry, partnership request, or donation.</li>
              <li><strong>Donation information:</strong> Donation amount, purpose, and transaction reference. We do not collect or store card details directly.</li>
              <li><strong>Newsletter subscriptions:</strong> Email address when you subscribe to our newsletter.</li>
              <li><strong>Usage data:</strong> Anonymous analytics data about how you use our website.</li>
            </ul>

            <h2 className="text-xl font-bold text-cobalt">How We Use Your Information</h2>
            <ul className="space-y-2 text-ink/80">
              <li>To respond to your enquiries and provide requested services.</li>
              <li>To process donations and issue receipts.</li>
              <li>To send newsletters and updates (only with your consent).</li>
              <li>To improve our website and services.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h2 className="text-xl font-bold text-cobalt">Data Retention</h2>
            <p className="text-ink/80 leading-relaxed">
              We retain personal information only for as long as necessary to fulfil the purposes for
              which it was collected, or as required by law. We do not retain unnecessary personal
              data indefinitely.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Your Rights</h2>
            <p className="text-ink/80 leading-relaxed">
              You have the right to access, correct, or request deletion of your personal information.
              To exercise these rights, please contact us at{' '}
              <a href="mailto:info@zambialibrarycenter.org" className="underline">info@zambialibrarycenter.org</a>.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Contact Us</h2>
            <p className="text-ink/80 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at{' '}
              <a href="mailto:info@zambialibrarycenter.org" className="underline">info@zambialibrarycenter.org</a> or{' '}
              <a href="tel:+260975772837" className="underline">+260 975 772 837</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
