export const description: string[] = [
  "Hi! I am Stephanie Morales, a passionate Frontend Developer with over two years of experience building intuitive and engaging web applications. I specialize in React and TypeScript, focusing on writing clean, maintainable code and creating scalable user interfaces.",
  "I started my career transitioning from Civil Engineering after completing a Frontend Bootcamp at Laboratoria, where I solidified my skills and discovered my passion for coding.",
];

export const interestsImages: {
  src: string;
  alt: string;
  isVertical: boolean;
  size?: "small" | "medium" | "large";
}[] = [
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769163962/bailey_glajck.jpg", alt: "Bailey", isVertical: false, size: "large" },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769163968/rocky_q7qdns.jpg", alt: "Rocky", isVertical: false, size: "large" },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769163956/abba_tadfb0.jpg", alt: "Abba", isVertical: false, size: "small" },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769163982/retro_xlx1p6.jpg", alt: "Retro", isVertical: false, size: "small" },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769163991/movie_g5ldj6.jpg", alt: "Movie", isVertical: false, size: "small" },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769164139/dark-logo-cke_g6mi2j.jpg", alt: "Dark Logo", isVertical: false, size: "small" },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769164085/76122_tpa9jb.webp", alt: "Stranger Things", isVertical: true },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769164433/ChatGPT_Image_23_ene_2026_05_33_17_a.m._l3o4hb.png", alt: "Dark Matter and Ready Player One & Two Books", isVertical: true },
  { src: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769166028/music_ie1i44.png", alt: "Piano and Disc Plater", isVertical: false, size: "large" },
];



export const experiences = [
  {
    role: "Frontend Developer",
    company: "Simetrik – Remote (Bogotá, Colombia)",
    date: "Aug 2022 – Aug 2024",
    description: "Developed and maintained React-based accounting modules, improving form reliability and reducing errors by 25%. Enhanced testing practices and contributed to a shared component library, ensuring consistent UI and stable dependencies across teams.",
    tech: ["React", "TypeScript", "React Hook Form", "Yup", "Jest", "RTL", "Git"]
  }
];

export const topSkills = [
  "React", "Next.js", "JavaScript", "TypeScript", "Redux", "Context API",
  "React Hooks", "Tailwind CSS", "Python", "SQL", "Git", "React Testing Library",
  "Jest", "REST APIs", "Sass", "Storybook"
];

export const projects: Array<{desktop: string, mobile: string, title: string, description: string, tags: string[], demoUrl: string, codeUrl: string}> = [
  {
    desktop: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769166925/Elon_Physio_Screenshot_wwbrxt.png",
    mobile: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769170070/Elon_Physio_Mobile_fi3ttd.png",
    title: "Elon Physio",
    description: "A professional responsive website for a physiotherapy clinic, featuring services, team profiles, blog posts, and appointment booking with multi-language support.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel"],
    demoUrl: "https://physiotherapy-clinic-lemon.vercel.app/en",
    codeUrl: "https://github.com/smmu94/physiotherapy-clinic"
  },
  {
    desktop: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769166924/Mobile_Store_Screenshot_sjwcmk.png",
    mobile: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769170067/Mobile_Store_Mobile_okpdt6.png",
    title: "Mobile Store E-commerce",
    description: "A web application to browse, search, and manage a catalog of mobile phones with detailed views, shopping cart, and Stripe checkout integration.",
    tags: ["Next.js", "React", "TypeScript", "Sass", "Context API", "Jest"],
    demoUrl: "https://mbst-app.netlify.app/",
    codeUrl: "https://github.com/smmu94/mobile-phone-catalog-app"
  },
  {
    desktop: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769166926/Aurum_Screenshot_meaoqu.png",
    mobile: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769170068/Aurum_Mobile_cqp2wb.png",
    title: "Aurum Restaurant",
    description: "A modern, responsive website for a restaurant, showcasing menus, reservations, and contact information with smooth navigation and mobile-friendly design.",
    tags: ["Astro", "React", "TypeScript", "Tailwind CSS", "Netlify"],
    demoUrl: "https://aurumdining.netlify.app/",
    codeUrl: "https://github.com/smmu94/aurum"
  },
  {
    desktop: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769166923/BurgerQueen_Api_Client_jdxo9j.png",
    mobile: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769170065/Burger_Queen_mobile_gvrtyc.png",
    title: "Burger Queen API Client",
    description: "A web application for managing burger restaurant orders, allowing waitstaff to register, send, and track orders in real-time, with a responsive interface for tablets and desktops.",
    tags: ["React", "JavaScript", "Sass", "REST API", "Jest"],
    demoUrl: "https://bog-004-burger-queen-api-client.vercel.app/",
    codeUrl: "https://github.com/smmu94/BOG004-burger-queen-api-client"
  },
  {
    desktop: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769166922/MD_Links_Description_vllhof.png",
    mobile: "https://res.cloudinary.com/dhcvj3jms/image/upload/v1769170064/MD_Links_Mobile_ayukgd.png",
    title: "MD Links",
    description: "A Node.js library and CLI tool that extracts, validates, and provides statistics for links in Markdown files, helping developers detect broken links efficiently.",
    tags: ["Node.js", "JavaScript", "CLI", "Markdown", "Jest"],
    demoUrl: "https://www.npmjs.com/package/@smmu94/md-links",
    codeUrl: "https://github.com/smmu94/BOG004-md-links"
  }
];
