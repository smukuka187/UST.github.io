import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { programmes } from '@/lib/data';
import CTASection from '@/components/CTASection';

export function generateStaticParams() {
  return programmes.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const programme = programmes.find((p) => p.slug === params.slug);
  if (!programme) return { title: 'Programme Not Found' };
  return { title: programme.title, description: programme.shortDescription };
}

export default function ProgrammeDetailPage({ params }: { params: { slug: string } }) {
  const programme = programmes.find((p) => p.slug === params.slug);
  if (!programme) notFound();

  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="programme-hero-heading">
        <div className="container-wide max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-copper no-underline">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/programmes" className="hover:text-copper no-underline">Programmes</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{programme.title}</li>
            </ol>
          </nav>
          <h1 id="programme-hero-heading" className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-balance">
            {programme.title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            {programme.shortDescription}
          </p>
        </div>
      </section>

      <section className="section-padding bg-bone" aria-labelledby="overview-heading">
        <div className="container-wide grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={programme.image} alt={programme.imageAlt} className="w-full h-full object-cover" />
            </div>

            <h2 id="overview-heading" className="text-2xl font-bold text-cobalt mb-4">Programme Overview</h2>
            <p className="text-ink/80 leading-relaxed mb-8 text-lg">{programme.overview}</p>

            <h2 className="text-2xl font-bold text-cobalt mb-4">Objectives</h2>
            <ul className="space-y-3 mb-8">
              {programme.objectives.map((obj) => (
                <li key={obj} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/15 flex items-center justify-center shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-ink/80">{obj}</p>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-cobalt mb-4">Services Provided</h2>
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {programme.services.map((service) => (
                <li key={service} className="flex items-start gap-2 bg-white rounded-lg p-3">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true" className="shrink-0 mt-0.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-ink/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white rounded-2xl p-6 card">
              <h2 className="text-lg font-bold text-cobalt mb-4">Programme Details</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="font-bold text-ink text-sm">Intended Beneficiaries</dt>
                  <dd className="text-ink/70 text-sm mt-1">{programme.beneficiaries}</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink text-sm">Eligibility & Participation</dt>
                  <dd className="text-ink/70 text-sm mt-1">{programme.eligibility}</dd>
                </div>
                <div>
                  <dt className="font-bold text-ink text-sm">Contact</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${programme.contact}`} className="text-cobalt underline text-sm break-all">
                      {programme.contact}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            <div className="bg-cobalt text-white rounded-2xl p-6">
              <h2 className="text-lg font-bold mb-3">Get Involved</h2>
              <p className="text-white/80 text-sm mb-4">
                Donors, partners, and volunteers can support this programme in many ways.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/donate" className="btn-copper no-underline text-sm">Donate to Support</Link>
                <Link href="/partners" className="btn-secondary border-white text-white hover:bg-white hover:text-cobalt no-underline text-sm">Partner With Us</Link>
                <Link href="/contact" className="btn-secondary border-white/50 text-white hover:bg-white hover:text-cobalt no-underline text-sm">Contact Us</Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
