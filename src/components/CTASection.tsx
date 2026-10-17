import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-cobalt text-white section-padding" aria-labelledby="cta-heading">
      <div className="container-wide text-center max-w-3xl mx-auto">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-extrabold mb-4 text-balance">
          Help Us Empower More Lives
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-8 text-balance">
          Your support — whether a donation, partnership, or volunteer hours — directly enables blind and visually impaired people in Zambia to access knowledge, build skills, and live independently.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/donate" className="btn-copper no-underline">
            Donate Now
          </Link>
          <Link href="/contact" className="btn-secondary border-white text-white hover:bg-white hover:text-cobalt no-underline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
