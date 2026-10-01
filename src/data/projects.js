// Real projects from Shiv's resume. Swap the '#' repo/live links below for
// your actual GitHub repo and deployed-site URLs.
export const projects = [
  {
    title: 'Roam - In Progress',
    subtitle: 'Real-Time Ride-Hailing Platform',
    description:
      'An Uber-style ride-hailing app with separate rider and captain experiences, kept in sync in real time with Socket.io and smooth GSAP-driven transitions.',
    highlights: [
      'Built a full rider flow: location search, fare comparison, ride confirmation, live driver tracking, and in-app payment on a mobile-first UI',
      'Built a captain-side flow with an earnings dashboard and accept/start/cancel ride controls, synced live via Socket.io',
      'Designed a modular architecture — separated API layer, state/context, custom hooks, and reusable UI — for independently testable features',
      'Implemented physics-based screen transitions and bottom-sheet interactions with GSAP for a native app feel',
      'Built a REST API with JWT auth for separate rider/captain flows, plus real-time location and ride-status updates over WebSockets',
      'Modeled a MongoDB schema for rides, users, captains, and vehicles, supporting full ride-status transitions',
    ],
    tags: ['React', 'Tailwind CSS', 'GSAP', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    repo: 'https://github.com/26-Shiv-Gupta/Roam',
    live: 'https://roam-3t2y.onrender.com/',
    accent: 'from-cyan-400 to-violet-500',
  },
  {
    title: 'Tech Hack World',
    subtitle: 'Cybersecurity Learning Management Platform',
    description:
      'A scalable LMS built solo, covering course delivery, enrollment, and admin management, with secure Stripe checkout and role-based access control.',
    highlights: [
      'Designed a scalable LMS architecture delivering 15+ core capabilities including courses, enrollment, and administration',
      'Engineered backend services handling concurrent requests with structured routing and middleware',
      'Integrated secure Stripe-based transactions, increasing checkout success rate by 30%',
      'Enforced role-driven authorization to safeguard restricted admin and instructor routes',
      'Optimized database access patterns, cutting API response latency by 25% through indexing',
    ],
    tags: ['Node.js', 'MongoDB', 'Stripe', 'React', 'Express', 'Tailwind CSS', 'Clerk'],
    repo: 'https://github.com/26-Shiv-Gupta/hackerworld',
    live: 'https://techhackworld.onrender.com/',
    accent: 'from-violet-500 to-cyan-400',
  },
  {
    title: 'JobMailer',
    subtitle: 'Automated Job Application Email Sender',
    description:
      'A Node.js automation tool that reads recruiter contacts from an Excel sheet and sends personalized job application emails through Gmail, one at a time with a safe delay between sends.',
    highlights: [
      'Built a Node.js script that sends personalized job application emails in bulk using Nodemailer and the Gmail SMTP service',
      'Parsed Excel contact lists with SheetJS (xlsx) and filled each email subject and body with the recruiter name, company, and job role',
      'Secured Gmail credentials with dotenv environment variables and Google App Passwords, keeping secrets out of the source code',
      'Implemented sequential async/await processing with a 3-minute delay between sends to respect Gmail rate limits and avoid spam flags',
      'Added per-email error handling and logging so one failed send never stops the rest of the batch',
      'Cut repetitive manual outreach by automating applications to 50 companies in a single run',
    ],
    tags: ['Node.js', 'Nodemailer', 'SheetJS', 'dotenv', 'Gmail SMTP', 'Async/Await'],
    repo: 'https://github.com/26-Shiv-Gupta/Job-Mailer',
    accent: 'from-emerald-400 to-cyan-500',
  },
  {
    title: 'Coriander Leaf',
    subtitle: 'Restaurant Booking & Management Platform',
    description:
      'A full-stack platform for a pure-veg restaurant in Indore, with a customer website for menu browsing and table reservations, and a secure admin dashboard for managing bookings, menu and staff.',
    highlights: [
      'Built a 4-step table reservation flow with client-side and schema-level validation, returning a unique booking reference for status tracking',
      'Designed a REST API with role-based JWT authentication (owner/staff), bcrypt hashing, rate limiting, Helmet and CORS',
      'Integrated Nodemailer and Twilio WhatsApp to send instant booking alerts to restaurant staff with non-blocking async delivery',
      'Built an admin dashboard with today\'s schedule, guest counts, a 7-day booking trend and occasion analytics using MongoDB aggregation pipelines',
      'Created a bookings manager with search, status filters, pagination, status workflow and internal notes, plus a menu manager for live item, price and availability updates',
      'Developed a dynamic menu page with search, vegan, bestseller and spice filters, skeleton loaders and error/retry handling, plus a photo gallery with a lightbox',
    ],
    tags: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer', 'Twilio'],
    repo: 'https://github.com/26-Shiv-Gupta/Coriander-Leaf-Restaurant',
    accent: 'from-green-400 to-amber-500',
  },
  {
    title: 'Developer Portfolio',
    subtitle: 'Responsive Personal Portfolio Website',
    description:
      'A responsive single-page portfolio built with React and Vite, with About, Resume, Portfolio and Contact sections. It has a dark theme, a filterable project gallery and a mobile-first layout.',
    highlights: [
      'Built a single-page app with React 19 and Vite, using a component-based structure and useState-driven navigation for instant section switching without page reloads',
      'Developed a mobile-first responsive layout with CSS Grid, Flexbox and media queries, including a sticky desktop sidebar, a collapsible mobile profile header and a fixed bottom tab bar with safe-area support',
      'Created a filterable project gallery with category tabs, hover overlays and animated cards for quick project browsing',
      'Designed a data-driven content layer with reusable constants for skills, experience, education and projects, so content updates need no UI changes',
      'Built a resume page with education and experience timelines (custom CSS pseudo-element timeline) and a contact section with a form UI',
      'Applied a consistent dark theme with custom CSS transitions, styled scrollbars and Google Fonts typography',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'Tailwind CSS', 'CSS3', 'Responsive Design'],
    repo: 'https://github.com/26-Shiv-Gupta/Portfolio_template',
    live: 'https://portfoliositetemplate.netlify.app/',
    accent: 'from-yellow-400 to-amber-500',
  },
  {
    title: 'Dice Game',
    subtitle: 'Interactive Number-Guessing Game',
    description:
      'A browser-based dice game built with React where players pick a number, roll the dice and win or lose points based on the result, with a clean start screen and a game screen.',
    highlights: [
      'Built a two-screen app (Home and Game) using component-based architecture, switching screens with React state and conditional rendering',
      'Implemented game logic with React Hooks: random dice roll, score add/deduct on match or mismatch, and a one-click score reset',
      'Added input validation with a timed error message that stops rolls until the player picks a number',
      'Created an auto-dismissing rules overlay using setTimeout to guide new players without cluttering the UI',
      'Styled the UI with scoped styled-components, including hover and selected states for the number picker and dynamic dice-face images that update on every roll',
    ],
    tags: ['React', 'Vite', 'JavaScript', 'styled-components', 'CSS3'],
    repo: 'https://github.com/26-Shiv-Gupta/Dice-Game',
    live: 'https://dicestrike.netlify.app/',
    accent: 'from-gray-700 to-gray-900',
  },
]
