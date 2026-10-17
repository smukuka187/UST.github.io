import type { Metadata } from 'next';
import Link from 'next/link';
import { impactStats, impactStories } from '@/lib/data';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = { title: 'Impact & Success Stories' };

export default function ImpactPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="impact-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="impact-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Our Impact & Success Stories
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Every number represents a life changed. Every story represents a person who gained the
            skills, confidence, and tools to live independently. Here is the difference we are
            making together.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-bone" aria-labelledby="impact-stats-heading">
        <div className="container-wide">
          <h2 id="impact-stats-heading" className="section-heading text-center mb-12">Verified Impact Statistics</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-8 text-center card">
                <p className="text-4xl md:text-5xl font-extrabold text-copper mb-2">{stat.value}</p>
                <p className="text-ink/70 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-ink/50 text-xs mt-6">
            * Statistics are indicative pending verified data from the Center.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section className="section-padding bg-white" aria-labelledby="stories-heading">
        <div className="container-wide">
          <h2 id="stories-heading" className="section-heading text-center mb-4">Beneficiary Success Stories</h2>
          <p className="text-center text-ink/60 mb-12 max-w-2xl mx-auto">
            Published with informed consent. Names and photographs used with permission.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {impactStories.map((story) => (
              <article key={story.name} className="flex flex-col sm:flex-row gap-6 bg-bone rounded-2xl p-6">
                <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={story.image} alt={story.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-ink/80 italic leading-relaxed mb-4 text-lg">
                    &ldquo;{story.quote}&rdquo;
                  </blockquote>
                  <p className="font-bold text-cobalt">{story.name}</p>
                  <p className="text-sm text-ink/60">{story.programme}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Programme Outcomes */}
      <section className="section-padding bg-bone" aria-labelledby="outcomes-heading">
        <div className="container-wide">
          <h2 id="outcomes-heading" className="section-heading text-center mb-12">Programme Outcomes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Improved Literacy', desc: 'Beneficiaries have gained Braille reading skills, enabling independent access to information and literature.' },
              { title: 'Employment & Self-Employment', desc: 'Vocational training graduates have secured jobs or started small businesses, achieving financial independence.' },
              { title: 'Digital Inclusion', desc: 'Beneficiaries now use computers, smartphones, and the internet independently through assistive technology training.' },
              { title: 'Greater Independence', desc: 'Orientation and mobility training has enabled beneficiaries to navigate their communities safely and confidently.' },
              { title: 'Educational Achievement', desc: 'Students have completed their education with accessible learning materials provided by the Center.' },
              { title: 'Community Participation', desc: 'Cultural and recreational programmes have fostered social inclusion and community engagement.' },
            ].map((outcome) => (
              <div key={outcome.title} className="bg-white rounded-2xl p-6 card">
                <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                  </svg>
                </div>
                <h3 className="font-bold text-cobalt mb-2">{outcome.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{outcome.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor-supported */}
      <section className="section-padding bg-cobalt text-white" aria-labelledby="donor-heading">
        <div className="container-wide text-center max-w-2xl mx-auto">
          <h2 id="donor-heading" className="text-3xl font-extrabold mb-4">Donor-Supported Initiatives</h2>
          <p className="text-white/80 mb-8">
            Many of our programmes are made possible through the generosity of donors, sponsors, and
            partners. Their support has funded our computer lab, Braille library expansion,
            vocational training equipment, and community outreach.
          </p>
          <Link href="/donate" className="btn-copper no-underline">Support Our Work</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
