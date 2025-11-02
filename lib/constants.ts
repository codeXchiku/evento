export type EventDetails = {
  image: string;
  title: string;
  slug: string;
  location: string;
  date: string;
  time: string;
};

export const events: EventDetails[] = [
  {
    image: '/images/event1.png',
    title: 'Tech Summit 2025',
    slug: 'tech-summit-2025',
    location: 'Bhubaneshwar, India',
    date: '2025-11-10',
    time: '10:00 AM'
  },
  {
    image: '/images/event2.png',
    title: 'Startup Mixer',
    slug: 'startup-mixer',
    location: 'Mumbai, India',
    date: '2025-11-12',
    time: '6:30 PM'
  },
  {
    image: '/images/event3.png',
    title: 'AI & ML Conference',
    slug: 'ai-ml-conference',
    location: 'Bangalore, India',
    date: '2025-11-15',
    time: '9:00 AM'
  },
  {
    image: '/images/event4.png',
    title: 'Design Thinking Workshop',
    slug: 'design-thinking-workshop',
    location: 'Pune, India',
    date: '2025-11-18',
    time: '2:00 PM'
  },
  {
    image: '/images/event5.png',
    title: 'React Dev Meetup',
    slug: 'react-dev-meetup',
    location: 'Hyderabad, India',
    date: '2025-11-20',
    time: '5:00 PM'
  },
  {
    image: '/images/event6.png',
    title: 'Next.js Bootcamp',
    slug: 'nextjs-bootcamp',
    location: 'Chennai, India',
    date: '2025-11-22',
    time: '11:00 AM'
  }
];