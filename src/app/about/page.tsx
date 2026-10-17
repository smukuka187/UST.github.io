import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = { title: 'About Us' };

export default function AboutPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="about-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="about-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            About the Center
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            The Zambia Library, Cultural and Skills Center for the Visually Impaired is dedicated to
            empowering blind and visually impaired people through access to knowledge, culture,
            practical skills, and opportunities for independent living.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="section-padding bg-bone" aria-labelledby="history-heading">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-copper font-bold text-sm uppercase tracking-widest mb-3">Our History</p>
            <h2 id="history-heading" className="section-heading">Organisational History</h2>
            <p className="text-ink/80 leading-relaxed mb-4">
              The Center was established to address the critical gap in services and support for blind
              and visually impaired people in Zambia. Recognising that access to education, skills
              training, and cultural participation are fundamental rights, the Center was founded to
              create a dedicated space where visually impaired individuals can learn, grow, and
              thrive.
            </p>
            <p className="text-ink/80 leading-relaxed mb-4">
              [Detailed organisational history to be added once verified information is supplied by
              the Center.]
            </p>
            <p className="text-sm text-ink/50 italic">
              Registration and governance information will be published once verified.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80"
              alt="A person reading Braille in a library setting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white" aria-labelledby="mv-heading">
        <div className="container-wide">
          <h2 id="mv-heading" className="section-heading text-center mb-12">Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-bone rounded-2xl p-8 border-l-4 border-cobalt">
              <h3 className="text-xl font-bold text-cobalt mb-3">Our Mission</h3>
              <p className="text-ink/80 leading-relaxed">
                To empower blind and visually impaired people in Zambia by providing access to
                knowledge, culture, practical skills, assistive technology, and independent living
                support — enabling them to live with dignity, participate fully in society, and
                realise their full potential.
              </p>
            </div>
            <div className="bg-bone rounded-2xl p-8 border-l-4 border-copper">
              <h3 className="text-xl font-bold text-cobalt mb-3">Our Vision</h3>
              <p className="text-ink/80 leading-relaxed">
                A Zambia where blind and visually impaired people have equal access to education,
                employment, culture, and community — where disability is never a barrier to living
                a full, independent, and meaningful life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-bone" aria-labelledby="values-heading">
        <div className="container-wide">
          <h2 id="values-heading" className="section-heading text-center mb-12">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Dignity', desc: 'We treat every person with respect, recognising their inherent worth and capability.' },
              { title: 'Inclusion', desc: 'We believe everyone deserves equal access to opportunities, regardless of ability.' },
              { title: 'Empowerment', desc: 'We equip people with the tools and skills to live independently and advocate for themselves.' },
              { title: 'Integrity', desc: 'We operate with transparency, accountability, and honesty in all we do.' },
              { title: 'Community', desc: 'We foster belonging and mutual support among beneficiaries, families, and partners.' },
              { title: 'Excellence', desc: 'We strive for quality and continuous improvement in all our programmes and services.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 card">
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-cobalt mb-2">{value.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white" aria-labelledby="objectives-heading">
        <div className="container-wide max-w-3xl">
          <h2 id="objectives-heading" className="section-heading">Objectives & Mandate</h2>
          <ul className="space-y-4">
            {[
              'Provide access to Braille books, audio materials, and accessible reading resources',
              'Deliver vocational and skills training that enables employment and self-employment',
              'Promote assistive technology and digital literacy for visually impaired people',
              'Support inclusive education through accessible learning materials',
              'Foster cultural participation and community engagement',
              'Provide independent living skills training and support services',
              'Advocate for the rights and inclusion of visually impaired people',
              'Build partnerships with government, NGOs, and the private sector',
            ].map((obj) => (
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
        </div>
      </section>

      {/* Board & Management */}
      <section className="section-padding bg-bone" aria-labelledby="board-heading">
        <div className="container-wide">
          <h2 id="board-heading" className="section-heading text-center mb-4">Board of Directors & Management</h2>
          <p className="text-center text-ink/60 mb-12 max-w-2xl mx-auto">
            Profiles of our Board of Directors and management team will be published once verified
            information and consent are obtained.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-2xl p-6 text-center card">
                <div className="w-20 h-20 bg-cobalt/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="1.5" aria-hidden="true">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <p className="font-bold text-cobalt">[Name to be confirmed]</p>
                <p className="text-sm text-ink/60 mt-1">[Position to be confirmed]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="section-padding bg-white" aria-labelledby="priorities-heading">
        <div className="container-wide">
          <h2 id="priorities-heading" className="section-heading text-center mb-12">Strategic Priorities</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Expand Access to Resources', desc: 'Grow our Braille library, audio collection, and digital resources to serve more people across Zambia.' },
              { title: 'Strengthen Vocational Training', desc: 'Develop market-relevant skills programmes that lead to real employment and self-employment opportunities.' },
              { title: 'Promote Assistive Technology', desc: 'Ensure visually impaired people have access to modern technology and the training to use it confidently.' },
              { title: 'Build Sustainable Partnerships', desc: 'Forge lasting relationships with government, NGOs, and the private sector to expand our reach and impact.' },
            ].map((priority) => (
              <div key={priority.title} className="flex gap-4">
                <div className="w-12 h-12 bg-cobalt rounded-lg flex items-center justify-center text-white font-extrabold text-lg shrink-0">
                  ★
                </div>
                <div>
                  <h3 className="text-lg font-bold text-cobalt mb-1">{priority.title}</h3>
                  <p className="text-ink/70 leading-relaxed">{priority.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Reports */}
      <section className="section-padding bg-bone" aria-labelledby="reports-heading">
        <div className="container-wide max-w-3xl text-center">
          <h2 id="reports-heading" className="section-heading">Annual Reports & Policy Documents</h2>
          <p className="text-ink/70 mb-6">
            Our annual reports, strategic plans, and policy documents are available in accessible
            formats on our Policies & Downloads page.
          </p>
          <Link href="/policies" className="btn-primary no-underline">
            View Documents & Resources
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
