import type { Metadata } from 'next';
import { newsItems, upcomingEvents } from '@/lib/data';

export const metadata: Metadata = { title: 'News, Events & Gallery' };

export default function NewsPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="news-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="news-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            News, Events & Gallery
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            Stay up to date with our latest announcements, events, training sessions, cultural
            activities, and community outreach. Explore our photo gallery and video stories.
          </p>
        </div>
      </section>

      {/* News articles */}
      <section className="section-padding bg-bone" aria-labelledby="news-articles-heading">
        <div className="container-wide">
          <h2 id="news-articles-heading" className="section-heading mb-12">Latest News</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.title} className="card">
                <div className="aspect-[16/10] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-copper uppercase tracking-wide">{item.category} · {item.date}</span>
                  <h3 className="font-bold text-cobalt mt-2 mb-2">{item.title}</h3>
                  <p className="text-sm text-ink/70 leading-relaxed">{item.excerpt}</p>
                  <button className="inline-flex items-center gap-1 mt-4 font-bold text-copper text-sm" aria-label={`Read more about ${item.title}`}>
                    Read more
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding bg-white" aria-labelledby="events-heading">
        <div className="container-wide">
          <h2 id="events-heading" className="section-heading mb-12">Upcoming Events</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.title} className="flex flex-col sm:flex-row gap-4 bg-bone rounded-2xl p-6">
                <div className="flex sm:flex-col items-center justify-center bg-cobalt text-white rounded-xl p-4 sm:w-28 shrink-0">
                  <div className="text-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="mx-auto mb-1">
                      <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    <p className="text-sm font-bold">{event.date}</p>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-cobalt text-lg mb-1">{event.title}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/70 mb-2">
                    <span className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                      {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                      {event.location}
                    </span>
                  </div>
                  <p className="text-ink/70 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="section-padding bg-bone" aria-labelledby="gallery-heading">
        <div className="container-wide">
          <h2 id="gallery-heading" className="section-heading text-center mb-4">Photo Gallery</h2>
          <p className="text-center text-ink/60 mb-12 max-w-2xl mx-auto">
            A selection of photographs from our programmes, events, and community activities.
            All images include descriptive alternative text for accessibility.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80', alt: 'A person reading Braille with their fingertips' },
              { src: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&q=80', alt: 'Hands typing on a laptop with assistive technology' },
              { src: 'https://images.unsplash.com/photo-1516280440614-37939bbacd18?w=400&q=80', alt: 'Community members playing music together' },
              { src: 'https://images.unsplash.com/photo-1488190212758-9c7a4c2a3b4e?w=400&q=80', alt: 'A person using a white cane to navigate outdoors' },
              { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', alt: 'An inclusive classroom with diverse students' },
              { src: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80', alt: 'A person learning computer skills in a training session' },
              { src: 'https://images.unsplash.com/photo-1516979187457-637abbcd6733?w=400&q=80', alt: 'A person reading in a sunlit library' },
              { src: 'https://images.unsplash.com/photo-1523050854058-8df90fd10d53?w=400&q=80', alt: 'A university campus building' },
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
