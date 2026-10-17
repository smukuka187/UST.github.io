import type { Metadata } from 'next';
import Link from 'next/link';
import PartnershipForm from '@/components/PartnershipForm';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = { title: 'Partners & Sponsors' };

const partnerCategories = [
  { title: 'Corporate Sponsorship', desc: 'Partner with us to sponsor programmes, events, or specific initiatives that align with your corporate values.' },
  { title: 'NGO & Development Partners', desc: 'Collaborate on projects that promote inclusion, education, and empowerment for visually impaired people.' },
  { title: 'Government & Institutional Collaboration', desc: 'Work with government agencies and institutions to advance disability inclusion policy and services.' },
  { title: 'Corporate Social Responsibility', desc: 'Integrate support for the Center into your CSR strategy and make a measurable difference.' },
  { title: 'Assistive Technology Donations', desc: 'Donate computers, screen readers, magnifiers, and other assistive devices that directly empower beneficiaries.' },
  { title: 'Library & Learning Resource Donations', desc: 'Contribute Braille books, audiobooks, and accessible learning materials to our growing library.' },
  { title: 'Volunteer Partnerships', desc: 'Organise volunteer teams to support our programmes, events, and community outreach activities.' },
];

export default function PartnersPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="partners-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="partners-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Partners & Sponsors
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            We believe that lasting impact is achieved through partnership. We work with
            corporations, NGOs, government institutions, and individuals who share our vision of an
            inclusive Zambia where every person can thrive.
          </p>
        </div>
      </section>

      {/* Partner logos placeholder */}
      <section className="section-padding bg-bone" aria-labelledby="current-partners-heading">
        <div className="container-wide">
          <h2 id="current-partners-heading" className="section-heading text-center mb-4">Our Partners</h2>
          <p className="text-center text-ink/60 mb-12 max-w-2xl mx-auto">
            We are grateful to the organisations that support our work. Partner logos are displayed
            with permission.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-white rounded-xl p-8 flex items-center justify-center h-28 border-2 border-cobalt/10">
                <p className="text-ink/40 font-bold text-sm text-center">[Partner Logo {i}]</p>
              </div>
            ))}
          </div>
          <p className="text-center text-ink/50 text-sm mt-6">
            Partner logos will be displayed once permission is granted.
          </p>
        </div>
      </section>

      {/* Partnership opportunities */}
      <section className="section-padding bg-white" aria-labelledby="opportunities-heading">
        <div className="container-wide">
          <h2 id="opportunities-heading" className="section-heading text-center mb-12">Partnership Opportunities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerCategories.map((cat) => (
              <div key={cat.title} className="bg-bone rounded-2xl p-6 card">
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 11h-6M19 8v6" />
                  </svg>
                </div>
                <h3 className="font-bold text-cobalt mb-2">{cat.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership form */}
      <section className="section-padding bg-bone" aria-labelledby="enquiry-heading">
        <div className="container-wide max-w-2xl">
          <h2 id="enquiry-heading" className="section-heading text-center mb-4">Partnership Enquiry</h2>
          <p className="text-center text-ink/60 mb-8">
            Interested in partnering with us? Complete the form below and our team will get in touch.
          </p>
          <PartnershipForm />
        </div>
      </section>

      <CTASection />
    </>
  );
}
