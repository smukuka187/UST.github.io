import Link from 'next/link';
import { programmes, impactStats, impactStories, newsItems, upcomingEvents } from '@/lib/data';
import ProgrammeCard from '@/components/ProgrammeCard';
import NewsletterForm from '@/components/NewsletterForm';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative bg-cobalt text-white overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0 opacity-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-cobalt via-cobalt/95 to-cobalt/70" aria-hidden="true" />
        <div className="container-wide relative py-20 md:py-32 lg:py-40">
          <div className="max-w-3xl">
            <p className="text-copper font-bold text-lg md:text-xl mb-4 tracking-wide">
              Zambia Library, Cultural and Skills Center
            </p>
            <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-balance">
              Empowering Lives Through Knowledge, Skills and Inclusion
            </h1>
            <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">
              At the Zambia Library, Cultural and Skills Center for the Visually Impaired, we work to
              expand access to knowledge, culture, practical skills and opportunities for blind and
              visually impaired people to live independently and participate fully in society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="btn-copper no-underline">
                Donate
              </Link>
              <Link href="/programmes" className="btn-secondary border-white text-white hover:bg-white hover:text-cobalt no-underline">
                Explore Our Programmes
              </Link>
              <Link href="/contact" className="btn-secondary border-white/50 text-white hover:bg-white hover:text-cobalt no-underline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Overview */}
      <section className="section-padding bg-bone" aria-labelledby="mission-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-copper font-bold text-sm uppercase tracking-widest mb-3">Our Mission</p>
              <h2 id="mission-heading" className="section-heading">
                Building an Inclusive Zambia Where Every Person Can Thrive
              </h2>
              <p className="text-lg text-ink/80 leading-relaxed mb-6">
                We are dedicated to empowering blind and visually impaired individuals across Zambia
                through access to reading materials, Braille resources, cultural activities, vocational
                skills, assistive technology, education, and independent living support.
              </p>
              <p className="text-ink/70 leading-relaxed mb-8">
                Our Center serves as a hub for learning, growth, and community — a place where
                visually impaired people can access the tools, training, and support they need to
                live with dignity, independence, and confidence.
              </p>
              <Link href="/about" className="btn-primary no-underline">
                Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1516979187457-637abbcd6733?w=600&q=80"
                  alt="A person reading a Braille book with focused expression"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80"
                  alt="Hands using a computer keyboard with assistive technology"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden -mt-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1488190212758-9c7a4c2a3b4e?w=600&q=80"
                  alt="A person navigating outdoors with a white cane"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1516280440614-37939bbacd18?w=600&q=80"
                  alt="Community members playing music together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-cobalt text-white py-16" aria-labelledby="stats-heading">
        <div className="container-wide">
          <h2 id="stats-heading" className="sr-only">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-copper mb-2">{stat.value}</p>
                <p className="text-white/80 text-sm md:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-xs mt-6">
            * Statistics are indicative pending verified data from the Center.
          </p>
        </div>
      </section>

      {/* Featured Programmes */}
      <section className="section-padding bg-bone" aria-labelledby="programmes-heading">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-copper font-bold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 id="programmes-heading" className="section-heading">
              Our Programmes & Services
            </h2>
            <p className="section-subtitle mx-auto">
              We offer eight core programmes designed to support visually impaired people at every
              stage of life — from education and literacy to vocational skills and independent living.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programmes.slice(0, 4).map((p) => (
              <ProgrammeCard key={p.slug} programme={p} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/programmes" className="btn-primary no-underline">
              View All Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* Inclusive Education Section */}
      <section className="section-padding bg-white" aria-labelledby="inclusion-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                  alt="An inclusive classroom with diverse students and a teacher"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-copper font-bold text-sm uppercase tracking-widest mb-3">Why It Matters</p>
              <h2 id="inclusion-heading" className="section-heading">
                The Importance of Inclusive Education & Accessibility
              </h2>
              <p className="text-lg text-ink/80 leading-relaxed mb-6">
                In Zambia, visually impaired people face significant barriers to education,
                employment, and full participation in society. Access to Braille materials,
              assistive technology, and skills training can transform lives — but only when these
              resources are available and affordable.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/15 flex items-center justify-center shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-ink/80"><strong>Education is a right.</strong> Every person deserves access to learning materials in formats they can use.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/15 flex items-center justify-center shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-ink/80"><strong>Skills create independence.</strong> Vocational training enables self-reliance and economic participation.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-copper/15 flex items-center justify-center shrink-0 mt-1">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#D9531E" strokeWidth="3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <p className="text-ink/80"><strong>Technology bridges gaps.</strong> Assistive technology opens doors to information, communication, and opportunity.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section-padding bg-cobalt text-white" aria-labelledby="stories-heading">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-copper font-bold text-sm uppercase tracking-widest mb-3">Real Stories</p>
            <h2 id="stories-heading" className="text-3xl md:text-4xl font-extrabold mb-4">
              Beneficiary Success Stories
            </h2>
            <p className="text-white/70 text-lg">
              These are the people whose lives have been transformed through our programmes.
              <span className="block text-sm text-white/50 mt-1">Published with informed consent.</span>
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStories.map((story) => (
              <div key={story.name} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-copper transition-colors">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={story.image} alt={story.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <blockquote className="text-white/90 italic leading-relaxed mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <p className="font-bold text-copper">{story.name}</p>
                <p className="text-sm text-white/60">{story.programme}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/impact" className="btn-copper no-underline">
              Read More Stories
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section-padding bg-bone" aria-labelledby="news-heading">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-copper font-bold text-sm uppercase tracking-widest mb-3">Stay Updated</p>
              <h2 id="news-heading" className="section-heading">News & Upcoming Events</h2>
            </div>
            <Link href="/news" className="text-cobalt font-bold underline hover:text-copper">
              View all news &rarr;
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* News */}
            <div>
              <h3 className="text-xl font-bold text-cobalt mb-6">Latest News</h3>
              <div className="space-y-6">
                {newsItems.map((item) => (
                  <article key={item.title} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-copper uppercase tracking-wide">{item.category} · {item.date}</span>
                      <h4 className="font-bold text-cobalt group-hover:text-copper transition-colors mt-1">{item.title}</h4>
                      <p className="text-sm text-ink/70 mt-1 leading-relaxed">{item.excerpt}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <h3 className="text-xl font-bold text-cobalt mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="bg-white rounded-xl p-5 border-l-4 border-copper">
                    <p className="font-bold text-cobalt">{event.title}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-ink/70">
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                        </svg>
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-ink/70 mt-2">{event.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA */}
      <CTASection />

      {/* Newsletter */}
      <section className="section-padding bg-bone" aria-labelledby="newsletter-heading">
        <div className="container-wide max-w-2xl text-center">
          <h2 id="newsletter-heading" className="section-heading">Subscribe to Our Newsletter</h2>
          <p className="section-subtitle mx-auto mb-8">
            Stay informed about our programmes, events, and impact. We send occasional updates —
            never spam.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
