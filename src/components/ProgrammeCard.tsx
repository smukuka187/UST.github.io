import Link from 'next/link';
import { programmes } from '@/lib/data';

const iconMap: Record<string, string> = {
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5A2.5 2.5 0 0 0 6.5 22H20V2H6.5A2.5 2.5 0 0 0 4 4.5z',
  reader: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  'music-note': 'M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  briefcase: 'M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM10 5h4v2h-4z',
  cpu: 'M4 4h16v16H4zM9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3',
  house: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM9 22V12h6v10',
  people: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  heart: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
};

export default function ProgrammeCard({ programme }: { programme: typeof programmes[0] }) {
  return (
    <Link
      href={`/programmes/${programme.slug}`}
      className="card block no-underline group"
      aria-label={`${programme.title} — ${programme.shortDescription}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-cobalt/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={programme.image}
          alt={programme.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 bg-cobalt/10 rounded-lg flex items-center justify-center text-cobalt shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d={iconMap[programme.icon] || iconMap.book} />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-cobalt group-hover:text-copper transition-colors">
            {programme.title}
          </h3>
        </div>
        <p className="text-ink/70 text-sm leading-relaxed">{programme.shortDescription}</p>
        <span className="inline-flex items-center gap-1 mt-4 font-bold text-copper text-sm">
          Learn more
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
