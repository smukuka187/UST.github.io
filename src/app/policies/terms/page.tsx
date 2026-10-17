import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Terms of Use' };

export default function TermsPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16" aria-labelledby="terms-hero">
        <div className="container-wide max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-copper no-underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/policies" className="hover:text-copper no-underline">Policies</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">Terms of Use</li>
            </ol>
          </nav>
          <h1 id="terms-hero" className="text-3xl md:text-4xl font-extrabold">Terms of Use</h1>
        </div>
      </section>

      <section className="section-padding bg-bone">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-ink/60 text-sm">Last updated: October 2026</p>

            <p className="text-ink/80 leading-relaxed">
              These Terms of Use govern your use of the Zambia Library, Cultural and Skills Center
              for the Visually Impaired website. By using this website, you agree to these terms.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Use of Content</h2>
            <p className="text-ink/80 leading-relaxed">
              All content on this website, including text, images, and downloadable resources, is the
              property of the Center unless otherwise stated. You may download and use materials for
              personal, non-commercial purposes. For commercial use, please contact us for
              permission.
            </p>

            <h2 className="text-xl font-bold text-cobalt">User Conduct</h2>
            <p className="text-ink/80 leading-relaxed">
              You agree not to misuse the website, submit false or misleading information through our
              forms, or attempt to disrupt the website's functionality.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Donations</h2>
            <p className="text-ink/80 leading-relaxed">
              Donations are processed through verified payment providers. We do not collect or store
              card details directly. Donation records are maintained for transparency and
              accountability. We do not imply that donations are tax-deductible unless legally
              confirmed.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Limitation of Liability</h2>
            <p className="text-ink/80 leading-relaxed">
              The Center is not liable for any damages arising from the use of this website. We
              strive to provide accurate and up-to-date information but do not guarantee the
              completeness or accuracy of all content.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Changes to Terms</h2>
            <p className="text-ink/80 leading-relaxed">
              We may update these Terms of Use from time to time. Continued use of the website after
              changes constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Contact Us</h2>
            <p className="text-ink/80 leading-relaxed">
              For questions about these Terms of Use, contact{' '}
              <a href="mailto:info@zambialibrarycenter.org" className="underline">info@zambialibrarycenter.org</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
