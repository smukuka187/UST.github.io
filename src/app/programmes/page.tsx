import type { Metadata } from 'next';
import { programmes } from '@/lib/data';
import ProgrammeCard from '@/components/ProgrammeCard';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = { title: 'Our Programmes & Services' };

export default function ProgrammesPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="programmes-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="programmes-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Our Programmes & Services
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            We offer eight core programmes designed to support visually impaired people at every
            stage of life. From library services and Braille resources to vocational training and
            independent living skills, our programmes empower beneficiaries to learn, grow, and
            participate fully in society.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bone" aria-labelledby="programmes-grid-heading">
        <div className="container-wide">
          <h2 id="programmes-grid-heading" className="sr-only">All Programmes</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmes.map((p) => (
              <ProgrammeCard key={p.slug} programme={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
