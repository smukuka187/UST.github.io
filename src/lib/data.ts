export type Programme = {
  slug: string;
  title: string;
  icon: string;
  shortDescription: string;
  overview: string;
  objectives: string[];
  beneficiaries: string;
  services: string[];
  eligibility: string;
  contact: string;
  image: string;
  imageAlt: string;
};

export const programmes: Programme[] = [
  {
    slug: 'library-braille',
    title: 'Library Services & Braille Resources',
    icon: 'book',
    shortDescription: 'A growing collection of Braille books, audio materials, and accessible reading resources.',
    overview:
      'Our library is the heart of the Center, offering a diverse collection of Braille books, large-print materials, audiobooks, and digital resources. We believe that access to knowledge is a fundamental right, and our library ensures that visually impaired individuals can explore literature, education, and information independently.',
    objectives: [
      'Provide access to a wide range of reading materials in accessible formats',
      'Expand the Braille collection through donations and partnerships',
      'Offer audio and digital reading resources',
      'Support literacy and lifelong learning for all ages',
    ],
    beneficiaries: 'Blind and visually impaired individuals of all ages, students, researchers, and community members.',
    services: [
      'Braille book lending',
      'Audiobook library',
      'Large-print materials',
      'Digital accessible reading stations',
      'Braille transcription services',
      'Reference and research assistance',
    ],
    eligibility: 'Open to all registered members. Membership is free for visually impaired individuals.',
    contact: 'library@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&q=80',
    imageAlt: 'A person reading a Braille book with their fingertips in a sunlit library',
  },
  {
    slug: 'accessible-reading',
    title: 'Accessible Reading & Learning Materials',
    icon: 'reader',
    shortDescription: 'Converting textbooks and learning materials into accessible formats for students.',
    overview:
      'We convert educational textbooks, study guides, and learning materials into Braille, large print, audio, and digital accessible formats. This service ensures that students with visual impairments can pursue education on equal terms with their sighted peers.',
    objectives: [
      'Ensure students have access to curriculum materials in their preferred format',
      'Reduce barriers to education for visually impaired learners',
      'Partner with schools and universities to provide accessible materials',
      'Promote inclusive education practices',
    ],
    beneficiaries: 'Students at primary, secondary, and tertiary levels who are blind or have low vision.',
    services: [
      'Textbook transcription to Braille',
      'Large-print production',
      'Audio recording of learning materials',
      'Digital text conversion (DAISY, ePUB)',
      'Tactile diagram and map creation',
      'Exam materials in accessible formats',
    ],
    eligibility: 'Students enrolled in recognised educational institutions with a visual impairment.',
    contact: 'materials@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1503676263330-846eef722bb9?w=800&q=80',
    imageAlt: 'Close-up of hands reading Braille text on paper with warm lighting',
  },
  {
    slug: 'cultural-recreational',
    title: 'Cultural & Recreational Activities',
    icon: 'music-note',
    shortDescription: 'Music, arts, sports, and social events that celebrate ability and community.',
    overview:
      'We organise cultural and recreational activities that celebrate the talents and abilities of visually impaired people. From music and drama to sports and social gatherings, these programmes foster community, build confidence, and showcase the creative potential of our beneficiaries.',
    objectives: [
      'Promote social inclusion and community participation',
      'Develop creative and artistic talents',
      'Build confidence and self-expression',
      'Celebrate the cultural contributions of visually impaired people',
    ],
    beneficiaries: 'Visually impaired individuals, families, and community members of all ages.',
    services: [
      'Music and choir programmes',
      'Drama and theatre workshops',
      'Adaptive sports (goalball, athletics)',
      'Art and craft sessions',
      'Community social events and gatherings',
      'Cultural festivals and performances',
    ],
    eligibility: 'Open to all visually impaired community members and their families.',
    contact: 'culture@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd18?w=800&q=80',
    imageAlt: 'A group of people playing musical instruments together in a community setting',
  },
  {
    slug: 'vocational-skills',
    title: 'Vocational & Skills Training',
    icon: 'briefcase',
    shortDescription: 'Practical skills training for employment, entrepreneurship, and independence.',
    overview:
      'Our vocational training programmes equip visually impaired individuals with practical skills for employment and self-employment. We offer training in areas such as computer skills, handicrafts, telephone operation, massage therapy, and entrepreneurship, empowering beneficiaries to earn a living and contribute to their families and communities.',
    objectives: [
      'Equip beneficiaries with market-relevant vocational skills',
      'Promote self-employment and entrepreneurship',
      'Build confidence in professional abilities',
      'Connect trainees with employment opportunities',
    ],
    beneficiaries: 'Youth and adults who are blind or visually impaired, seeking employment or self-employment.',
    services: [
      'Computer and digital literacy training',
      'Handicraft and artisan skills',
      'Entrepreneurship and business skills',
      'Customer service and communication training',
      'Job readiness and interview preparation',
      'Assistive technology for the workplace',
    ],
    eligibility: 'Visually impaired individuals aged 16 and above. No prior experience required for most courses.',
    contact: 'training@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80',
    imageAlt: 'A person using a computer with assistive technology in a training session',
  },
  {
    slug: 'assistive-technology',
    title: 'Assistive Technology & Digital Literacy',
    icon: 'cpu',
    shortDescription: 'Screen readers, magnifiers, and digital skills for the modern world.',
    overview:
      'We provide training and access to assistive technology that enables visually impaired people to use computers, smartphones, and the internet independently. Our digital literacy programme covers screen readers, screen magnification, voice recognition, and accessible mobile applications.',
    objectives: [
      'Bridge the digital divide for visually impaired people',
      'Provide access to modern assistive technology tools',
      'Build digital confidence and competence',
      'Enable independent access to online services and information',
    ],
    beneficiaries: 'Visually impaired individuals of all ages who want to use technology independently.',
    services: [
      'Screen reader training (NVDA, JAWS, VoiceOver)',
      'Screen magnification software training',
      'Smartphone accessibility features',
      'Internet and email skills',
      'Document creation and management',
      'Assistive device lending library',
    ],
    eligibility: 'Open to all visually impaired individuals. Beginners welcome.',
    contact: 'tech@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80',
    imageAlt: 'Hands typing on a laptop keyboard with a screen reader interface visible',
  },
  {
    slug: 'independent-living',
    title: 'Independent Living Skills',
    icon: 'house',
    shortDescription: 'Orientation, mobility, daily living skills, and confidence for independent life.',
    overview:
      'Our independent living skills programme teaches visually impaired people the practical skills they need to navigate daily life with confidence. This includes orientation and mobility training, daily living skills such as cooking and personal management, and strategies for independent living.',
    objectives: [
      'Promote independence and self-sufficiency',
      'Teach safe navigation and mobility skills',
      'Develop daily living and self-care skills',
      'Build confidence in managing personal affairs',
    ],
    beneficiaries: 'Visually impaired individuals seeking greater independence, including newly blind individuals.',
    services: [
      'Orientation and mobility training (white cane skills)',
      'Daily living skills (cooking, cleaning, personal care)',
      'Money management and financial literacy',
      'Home safety and organisation',
      'Personal advocacy and self-determination',
      'Peer support and mentoring',
    ],
    eligibility: 'Open to all visually impaired individuals, including those who have recently lost their vision.',
    contact: 'independentliving@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1488190212758-9c7a4c2a3b4e?w=800&q=80',
    imageAlt: 'A person using a white cane to navigate a sidewalk independently',
  },
  {
    slug: 'inclusive-education',
    title: 'Inclusive Education & Community Awareness',
    icon: 'people',
    shortDescription: 'Advocating for inclusive education and raising awareness in the community.',
    overview:
      'We work with schools, communities, and institutions to promote inclusive education and raise awareness about visual impairment. We provide training for teachers, sensitisation workshops for communities, and advocacy for policies that support the rights of visually impaired people.',
    objectives: [
      'Promote inclusive education in schools and institutions',
      'Raise community awareness about visual impairment',
      'Train educators in accessible teaching methods',
      'Advocate for the rights of visually impaired people',
    ],
    beneficiaries: 'Schools, teachers, community organisations, and the general public.',
    services: [
      'Teacher training in inclusive education',
      'Community sensitisation workshops',
      'School inclusion advocacy',
      'Disability awareness campaigns',
      'Resource sharing with educational institutions',
      'Policy advocacy and engagement',
    ],
    eligibility: 'Open to schools, organisations, and community groups.',
    contact: 'inclusion@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    imageAlt: 'A diverse group of students and a teacher in an inclusive classroom setting',
  },
  {
    slug: 'beneficiary-support',
    title: 'Beneficiary Support & Referral Services',
    icon: 'heart',
    shortDescription: 'Guidance, counselling, and referrals to specialised services and support.',
    overview:
      'We provide support and referral services to help visually impaired individuals and their families access the resources they need. This includes counselling, information about available services, and referrals to specialised medical, educational, and social services.',
    objectives: [
      'Provide emotional and practical support to beneficiaries and families',
      'Connect people with relevant services and resources',
      'Offer counselling and peer support',
      'Facilitate access to medical and rehabilitation services',
    ],
    beneficiaries: 'Visually impaired individuals and their families, including those newly diagnosed.',
    services: [
      'Individual and family counselling',
      'Peer support groups',
      'Information and referral services',
      'Medical and rehabilitation referrals',
      'Educational placement assistance',
      'Family support and education',
    ],
    eligibility: 'Open to all visually impaired individuals and their families.',
    contact: 'support@zambialibrarycenter.org',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80',
    imageAlt: 'A counsellor speaking supportively with a person in a warm office setting',
  },
];

export type NavItem = {
  label: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Programmes', href: '/programmes' },
  { label: 'Impact', href: '/impact' },
  { label: 'Partners', href: '/partners' },
  { label: 'Donate', href: '/donate' },
  { label: 'News & Events', href: '/news' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export type ImpactStat = {
  value: string;
  label: string;
};

export const impactStats: ImpactStat[] = [
  { value: '500+', label: 'People supported annually' },
  { value: '8', label: 'Core programmes delivered' },
  { value: '1,200+', label: 'Braille & audio resources' },
  { value: '15+', label: 'Partner organisations' },
];

export type ImpactStory = {
  name: string;
  quote: string;
  programme: string;
  image: string;
  imageAlt: string;
};

export const impactStories: ImpactStory[] = [
  {
    name: 'Memory K.',
    quote: 'Learning to use a computer with a screen reader opened a whole new world for me. I now work as a receptionist and support my family.',
    programme: 'Assistive Technology & Digital Literacy',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    imageAlt: 'Portrait of a smiling woman wearing professional attire',
  },
  {
    name: 'Joseph M.',
    quote: 'The vocational training gave me skills in handicrafts. I now sell my products at the local market and have my own small business.',
    programme: 'Vocational & Skills Training',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    imageAlt: 'Portrait of a confident man smiling outdoors',
  },
  {
    name: 'Esther C.',
    quote: 'When I lost my sight, I thought my education was over. The Center transcribed my textbooks into Braille and I completed my degree.',
    programme: 'Accessible Reading & Learning Materials',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    imageAlt: 'Portrait of a woman with a warm smile in a study setting',
  },
  {
    name: 'Brian S.',
    quote: 'Orientation and mobility training gave me the confidence to move around my community independently. I no longer depend on others to go places.',
    programme: 'Independent Living Skills',
    image: 'https://images.unsplash.com/photo-1500648766835-56e2b60e6f0b?w=400&q=80',
    imageAlt: 'Portrait of a young man with a confident expression',
  },
];

export type NewsItem = {
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
};

export const newsItems: NewsItem[] = [
  {
    title: 'Center Launches New Computer Lab with Assistive Technology',
    date: 'October 2026',
    category: 'Announcement',
    excerpt: 'Thanks to a generous donation, we have opened a new computer lab equipped with screen readers and magnification software for our beneficiaries.',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80',
    imageAlt: 'Modern computer lab with multiple workstations',
  },
  {
    title: 'Annual Braille Reading Competition Celebrates Literacy',
    date: 'September 2026',
    category: 'Event',
    excerpt: 'Our annual Braille reading competition brought together participants from across the region to celebrate literacy and skill.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&q=80',
    imageAlt: 'Hands reading Braille text on paper',
  },
  {
    title: 'Partnership with Local University Expands Accessible Materials',
    date: 'August 2026',
    category: 'Partnership',
    excerpt: 'A new partnership with the University of Zambia will provide transcribed learning materials for visually impaired students.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90fd10d53?w=600&q=80',
    imageAlt: 'University campus building with students walking',
  },
];

export type EventItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

export const upcomingEvents: EventItem[] = [
  {
    title: 'White Cane Safety Day Awareness Walk',
    date: 'October 15, 2026',
    time: '09:00 AM',
    location: 'Lusaka City Centre',
    description: 'Join us for our annual awareness walk to promote white cane safety and the rights of visually impaired pedestrians.',
  },
  {
    title: 'Vocational Skills Open Day',
    date: 'November 8, 2026',
    time: '10:00 AM',
    location: 'Center Premises, Lusaka',
    description: 'An open day showcasing our vocational training programmes and the achievements of our trainees. All welcome.',
  },
  {
    title: 'Annual Fundraising Gala Dinner',
    date: 'December 5, 2026',
    time: '06:00 PM',
    location: 'Government Complex, Lusaka',
    description: 'Our flagship fundraising event featuring performances by our music programme beneficiaries and a silent auction.',
  },
];

export type JobItem = {
  title: string;
  type: string;
  department: string;
  deadline: string;
  description: string;
  requirements: string[];
};

export const jobOpenings: JobItem[] = [
  {
    title: 'Braille Transcription Specialist',
    type: 'Full-time',
    department: 'Library Services',
    deadline: 'November 15, 2026',
    description: 'We are seeking a skilled Braille transcription specialist to join our library team. You will be responsible for transcribing educational materials into Braille format.',
    requirements: [
      'Certification in Braille transcription (UEB)',
      'Experience with Braille embossing equipment',
      'Strong attention to detail',
      'Commitment to accessibility and inclusion',
    ],
  },
  {
    title: 'Volunteer Reading Assistant',
    type: 'Volunteer',
    department: 'Library Services',
    deadline: 'Ongoing',
    description: 'Volunteers needed to record audiobooks and assist with library operations. Flexible hours available.',
    requirements: [
      'Clear reading voice',
      'Reliable and committed',
      'Basic computer skills',
      'Training provided',
    ],
  },
  {
    title: 'Computer Skills Trainer',
    type: 'Part-time',
    department: 'Assistive Technology',
    deadline: 'November 30, 2026',
    description: 'Lead training sessions in screen reader software and digital literacy for visually impaired beneficiaries.',
    requirements: [
      'Experience with NVDA, JAWS, or VoiceOver',
      'Teaching or training experience',
      'Patience and excellent communication skills',
      'Understanding of accessibility principles',
    ],
  },
];

export type ResourceItem = {
  title: string;
  type: string;
  format: string;
  description: string;
};

export const downloadableResources: ResourceItem[] = [
  { title: 'Annual Report 2025', type: 'Annual Report', format: 'PDF (Accessible)', description: 'Our comprehensive annual report covering programmes, impact, and financials.' },
  { title: 'Organisational Brochure', type: 'Brochure', format: 'PDF (Accessible)', description: 'An overview of the Center, our mission, and our programmes.' },
  { title: 'Strategic Plan 2025–2030', type: 'Strategic Plan', format: 'PDF (Accessible)', description: 'Our five-year strategic plan outlining priorities and goals.' },
  { title: 'Accessibility Policy', type: 'Policy', format: 'PDF (Accessible)', description: 'Our commitment to accessibility in all our services and operations.' },
  { title: 'Donation Information Pack', type: 'Information', format: 'PDF (Accessible)', description: 'Information about how to support the Center through donations and sponsorship.' },
  { title: 'Volunteer Application Form', type: 'Form', format: 'PDF (Accessible)', description: 'Application form for individuals interested in volunteering with us.' },
];

export type PolicyDoc = {
  title: string;
  href: string;
  description: string;
};

export const policies: PolicyDoc[] = [
  { title: 'Privacy Policy', href: '/policies/privacy', description: 'How we collect, use, and protect your personal information.' },
  { title: 'Website Accessibility Statement', href: '/policies/accessibility', description: 'Our commitment to making this website accessible to all users.' },
  { title: 'Cookie Notice', href: '/policies/cookies', description: 'Information about how we use cookies on this website.' },
  { title: 'Terms of Use', href: '/policies/terms', description: 'The terms and conditions for using this website.' },
];
