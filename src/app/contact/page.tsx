import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = { title: 'Contact Us' };

export default function ContactPage() {
  return (
    <>
      <section className="bg-cobalt text-white py-16 md:py-24" aria-labelledby="contact-hero-heading">
        <div className="container-wide max-w-3xl">
          <h1 id="contact-hero-heading" className="text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/85 leading-relaxed">
            We would love to hear from you. Whether you have a question about our programmes, want to
            donate, are interested in partnering, or simply want to learn more — reach out using the
            form below or through our contact details.
          </p>
        </div>
      </section>

      <section className="section-padding bg-bone" aria-labelledby="contact-details-heading">
        <div className="container-wide grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <h2 id="contact-details-heading" className="section-heading">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-cobalt">Physical Address</h3>
                  <p className="text-ink/70">[Physical address to be confirmed]<br />Lusaka, Zambia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-cobalt">Telephone</h3>
                  <p className="text-ink/70">
                    <a href="tel:+260975772837" className="underline">+260 975 772 837</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-cobalt">Email</h3>
                  <p className="text-ink/70">
                    <a href="mailto:info@zambialibrarycenter.org" className="underline">info@zambialibrarycenter.org</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-cobalt">Office Hours</h3>
                  <p className="text-ink/70">Monday – Friday: 08:00 – 17:00<br />Saturday – Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-[4/3] rounded-2xl overflow-hidden bg-cobalt/5 border-2 border-cobalt/10 flex items-center justify-center">
              <div className="text-center p-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#002F6C" strokeWidth="1.5" aria-hidden="true" className="mx-auto mb-3 opacity-50">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <p className="text-ink/50 font-bold">Location Map</p>
                <p className="text-ink/40 text-sm">Map will be embedded once physical address is confirmed</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <h2 className="section-heading">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
