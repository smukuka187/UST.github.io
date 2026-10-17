import type { Metadata } from 'next';
import { downloadableResources, policies } from '@/lib/data';

export const metadata: Metadata = { title: 'Policies & Downloads' };

export default function PoliciesPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="policies-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="policies-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Policies & Downloads
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Access our policies, annual reports, brochures, strategic plans, and downloadable
            resources. All documents are provided in accessible formats wherever possible.
          </p>
        </div>
      </section>

      {/* Policies */}
      <section className="section-padding bg-bone" aria-labelledby="policies-heading">
        <div className="container-wide">
          <h2 id="policies-heading" className="section-heading mb-12">Policies & Legal Documents</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {policies.map((policy) => (
              <div key={policy.href} className="bg-white rounded-2xl p-6 card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-cobalt mb-1">{policy.title}</h3>
                    <p className="text-ink/70 text-sm leading-relaxed mb-3">{policy.description}</p>
                    <a href={policy.href} className="inline-flex items-center gap-1 font-bold text-copper text-sm">
                      Read document
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-white" aria-labelledby="downloads-heading">
        <div className="container-wide">
          <h2 id="downloads-heading" className="section-heading mb-12">Downloadable Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {downloadableResources.map((resource) => (
              <div key={resource.title} className="bg-bone rounded-2xl p-6 card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2" aria-hidden="true">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className="text-xs font-bold text-copper uppercase tracking-wide">{resource.type}</span>
                    <h3 className="font-bold text-cobalt mt-1 mb-1">{resource.title}</h3>
                    <p className="text-sm text-ink/70 leading-relaxed mb-3">{resource.description}</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 bg-ink/5 text-ink/60 px-2 py-1 rounded text-xs font-bold">
                        {resource.format}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink/50 mt-8 text-center">
            Documents will be linked once they are available. All PDFs are tagged for accessibility.
            HTML versions are provided where practical.
          </p>
        </div>
      </section>

      {/* Accessibility statement preview */}
      <section className="section-padding bg-cobalt text-white" aria-labelledby="a11y-heading">
        <div className="container-wide max-w-2xl text-center">
          <h2 id="a11y-heading" className="text-3xl font-extrabold mb-4">Our Commitment to Accessibility</h2>
          <p className="text-white/80 mb-6">
            This website is designed to conform to WCAG 2.2 Level AA. We provide high-contrast mode,
            text size controls, keyboard navigation, screen reader support, and skip-to-content
            links. If you encounter any accessibility barriers, please contact us.
          </p>
          <a href="/policies/accessibility" className="btn-copper no-underline">Read Our Accessibility Statement</a>
        </div>
      </section>
    </>
  );
}
