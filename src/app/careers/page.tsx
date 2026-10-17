import type { Metadata } from 'next';
import Link from 'next/link';
import { jobOpenings } from '@/lib/data';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = { title: 'Careers & Volunteer Opportunities' };

export default function CareersPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="careers-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="careers-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Careers & Volunteer Opportunities
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Join our team and make a meaningful difference in the lives of visually impaired people
            in Zambia. We offer employment, internship, and volunteer opportunities for
            passionate individuals committed to inclusion and empowerment.
          </p>
        </div>
      </section>

      {/* Job openings */}
      <section className="section-padding bg-bone" aria-labelledby="openings-heading">
        <div className="container-wide">
          <h2 id="openings-heading" className="section-heading mb-12">Current Opportunities</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <article key={job.title} className="bg-white rounded-2xl p-6 md:p-8 card">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cobalt mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 bg-cobalt/10 text-cobalt px-3 py-1 rounded-full text-sm font-bold">
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-copper/10 text-copper px-3 py-1 rounded-full text-sm font-bold">
                        {job.department}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-ink/5 text-ink/70 px-3 py-1 rounded-full text-sm">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        Deadline: {job.deadline}
                      </span>
                    </div>
                    <p className="text-ink/70 leading-relaxed mb-4">{job.description}</p>
                    <h4 className="font-bold text-ink mb-2">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-2 text-ink/70 text-sm">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2.5" aria-hidden="true" className="shrink-0 mt-1"><path d="M20 6 9 17l-5-5" /></svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="shrink-0">
                    <Link href="/contact" className="btn-primary no-underline whitespace-nowrap">
                      Apply Now
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Application info */}
      <section className="section-padding bg-white" aria-labelledby="apply-heading">
        <div className="container-wide max-w-2xl text-center">
          <h2 id="apply-heading" className="section-heading">How to Apply</h2>
          <p className="text-ink/70 mb-6 leading-relaxed">
            To apply for any position, please send your CV and a cover letter to{' '}
            <a href="mailto:careers@zambialibrarycenter.org" className="underline">careers@zambialibrarycenter.org</a>{' '}
            or use our contact form. Please include the position title in the subject line.
          </p>
          <p className="text-ink/70 mb-8">
            Application forms are available in accessible formats on our{' '}
            <Link href="/policies" className="underline">Downloads</Link> page.
          </p>
          <Link href="/contact" className="btn-primary no-underline">Contact Us to Apply</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
