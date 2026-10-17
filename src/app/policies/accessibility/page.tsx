import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Website Accessibility Statement' };

export default function AccessibilityStatementPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16" aria-labelledby="a11y-hero">
        <div className="container-wide max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-copper no-underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/policies" className="hover:text-copper no-underline">Policies</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">Accessibility Statement</li>
            </ol>
          </nav>
          <h1 id="a11y-hero" className="text-3xl md:text-4xl font-extrabold">Website Accessibility Statement</h1>
        </div>
      </section>

      <section className="section-padding bg-bone">
        <div className="container-wide max-w-3xl">
          <div className="bg-white rounded-2xl p-8 md:p-12 space-y-6">
            <p className="text-ink/60 text-sm">Last updated: October 2026</p>

            <p className="text-ink/80 leading-relaxed">
              The Zambia Library, Cultural and Skills Center for the Visually Impaired is committed to
              ensuring that our website is accessible to all users, including those with visual
              impairments and other disabilities. Accessibility is a core value of our organisation,
              not an optional enhancement.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Conformance Level</h2>
            <p className="text-ink/80 leading-relaxed">
              This website is designed to conform to <strong>WCAG 2.2 Level AA</strong>, using WCAG 2.1
              Level AA as a baseline. We continuously work to improve accessibility and address any
              barriers identified through testing.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Accessibility Features</h2>
            <ul className="space-y-2 text-ink/80">
              <li><strong>Skip to main content:</strong> A skip link is available as the first focusable element on every page.</li>
              <li><strong>Keyboard navigation:</strong> All interactive elements are fully operable by keyboard with visible focus indicators.</li>
              <li><strong>Screen reader support:</strong> Semantic HTML5, proper heading hierarchy, ARIA landmarks, and descriptive labels.</li>
              <li><strong>High contrast mode:</strong> A toggle in the toolbar switches to a high-contrast colour scheme.</li>
              <li><strong>Text size controls:</strong> Users can increase text size up to 200% without loss of content or functionality.</li>
              <li><strong>Alternative text:</strong> Informative images include descriptive alt text; decorative images use empty alt text.</li>
              <li><strong>Accessible forms:</strong> All forms have persistent labels, clear error messages, and keyboard-accessible controls.</li>
              <li><strong>Responsive design:</strong> The website adapts to mobile phones, tablets, laptops, and desktops.</li>
            </ul>

            <h2 className="text-xl font-bold text-cobalt">Known Limitations</h2>
            <p className="text-ink/80 leading-relaxed">
              While we strive for full accessibility, some third-party content or features may not
              yet be fully accessible. We are working to address these limitations.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Feedback</h2>
            <p className="text-ink/80 leading-relaxed">
              If you encounter an accessibility barrier or have suggestions for improvement, please
              contact us at{' '}
              <a href="mailto:info@zambialibrarycenter.org" className="underline">info@zambialibrarycenter.org</a>.
              We take all feedback seriously and will work to resolve issues promptly.
            </p>

            <h2 className="text-xl font-bold text-cobalt">Testing</h2>
            <p className="text-ink/80 leading-relaxed">
              We test our website with automated accessibility tools, manual keyboard navigation,
              screen readers (NVDA, JAWS, VoiceOver), and mobile devices. We invite representatives
              of the visually impaired community to participate in usability testing where possible.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
