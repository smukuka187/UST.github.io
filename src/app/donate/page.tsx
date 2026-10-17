import type { Metadata } from 'next';
import Link from 'next/link';
import DonateForm from '@/components/DonateForm';

export const metadata: Metadata = { title: 'Donate & Get Involved' };

const involvementOptions = [
  { icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z', title: 'Make a Donation', desc: 'Support our general operations and programmes with a one-time or recurring financial contribution.' },
  { icon: 'M22 10v6M2 10l10-5 10 5-10 5z M6 12v5c3 3 9 3 12 0v-5', title: 'Sponsor a Learner', desc: 'Sponsor a visually impaired learner or trainee through their education or vocational programme.' },
  { icon: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z', title: 'Donate Braille Books', desc: 'Contribute Braille books, audiobooks, and accessible learning materials to our library.' },
  { icon: 'M4 4h16v16H4zM9 9h6v6H9z', title: 'Donate Technology', desc: 'Donate computers, screen readers, magnifiers, and other assistive devices.' },
  { icon: 'M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z', title: 'Support Vocational Training', desc: 'Fund vocational training equipment, materials, and instructor costs.' },
  { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', title: 'Volunteer', desc: 'Share your time and skills as a volunteer reader, trainer, or event assistant.' },
  { icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 11h-6M19 8v6', title: 'Partner With Us', desc: 'Explore corporate sponsorship, CSR, and institutional partnership opportunities.' },
];

export default function DonatePage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="donate-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="donate-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Donate & Get Involved
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Your support directly enables blind and visually impaired people in Zambia to access
            education, build skills, use assistive technology, and live independently. Every
            contribution makes a difference.
          </p>
        </div>
      </section>

      {/* Involvement options */}
      <section className="section-padding bg-bone" aria-labelledby="options-heading">
        <div className="container-wide">
          <h2 id="options-heading" className="section-heading text-center mb-12">Ways to Get Involved</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {involvementOptions.map((option) => (
              <div key={option.title} className="bg-white rounded-2xl p-6 card">
                <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="2" aria-hidden="true">
                    <path d={option.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-cobalt mb-2">{option.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section className="section-padding bg-white" aria-labelledby="donate-form-heading">
        <div className="container-wide max-w-2xl">
          <h2 id="donate-form-heading" className="section-heading text-center mb-4">Make a Donation</h2>
          <p className="text-center text-ink/60 mb-8">
            Choose a donation amount and purpose below. You can also sponsor a learner, donate
            equipment, or support a specific campaign.
          </p>
          <DonateForm />
        </div>
      </section>

      {/* How donations are used */}
      <section className="section-padding bg-bone" aria-labelledby="how-heading">
        <div className="container-wide max-w-3xl">
          <h2 id="how-heading" className="section-heading text-center mb-8">How Your Donations Are Used</h2>
          <div className="space-y-4">
            {[
              { pct: '40%', use: 'Programme delivery — vocational training, assistive technology, and library services' },
              { pct: '25%', use: 'Accessible learning materials — Braille transcription, audio recording, and large print' },
              { pct: '20%', use: 'Community outreach and awareness programmes' },
              { pct: '10%', use: 'Operations and facility maintenance' },
              { pct: '5%', use: 'Administration and governance' },
            ].map((item) => (
              <div key={item.pct} className="flex items-center gap-4 bg-white rounded-xl p-4">
                <span className="text-2xl font-extrabold text-copper w-16 text-center shrink-0">{item.pct}</span>
                <p className="text-ink/80">{item.use}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-ink/50 mt-6 text-center">
            * Allocation is indicative and subject to verification. We are committed to transparency
            and will publish detailed financial reports. Do not assume donations are tax-deductible
            unless legally confirmed.
          </p>
        </div>
      </section>

      {/* Offline donation */}
      <section className="section-padding bg-cobalt text-white" aria-labelledby="offline-heading">
        <div className="container-wide max-w-2xl text-center">
          <h2 id="offline-heading" className="text-3xl font-extrabold mb-4">Offline Donations</h2>
          <p className="text-white/80 mb-6">
            Prefer to donate offline? You can also support us by bank transfer, cheque, or in-person
            at our offices. Please contact us for bank details and offline donation instructions.
          </p>
          <Link href="/contact" className="btn-copper no-underline">Contact Us for Offline Donation</Link>
        </div>
      </section>
    </>
  );
}
