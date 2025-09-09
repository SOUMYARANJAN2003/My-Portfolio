export const myProjects = [
  {
    id: 1,
    title: "ToDo App",
    description:
      "A streamlined task management application built with Django to help users organize and track their daily tasks efficiently.",
    subDescription: [
      "This application features a clean, user-friendly interface for creating, updating, and deleting tasks.",
      "Developed using Django 5.0.5 and Python 3.10, it includes essential development configurations like a .gitignore for Python projects and dependency management via both Pipfile.lock and requirements.txt.",
      "Ideal for personal use or as a starting point for more complex task management solutions."
    ],
    href: "https://github.com/SOUMYARANJAN2003/To-do-App",
    logo: "",
    image: "/assets/projects/ToDo_App.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.png",
      },
      {
        id: 2,
        name: "Django",
        path: "/assets/logos/django.jpeg",
      },
      {
        id: 3,
        name: "VS Code",
        path: "/assets/logos/visualstudiocode.svg",
      },
    ],
  },
  {
    id: 2,
    title: "My Portfolio",
    description:
      "A responsive portfolio built with React, Vite, Tailwind CSS, Framer Motion, and 3D models clean, fast, and visually engaging.",
    subDescription: [
      "A modern, responsive portfolio website built using React, Vite, and Tailwind CSS, designed to showcase my work with smooth Framer Motion animations and an interactive 3D model integration.",
      "The site delivers a fast, seamless experience across devices, with a minimal yet visually engaging design that highlights creativity, performance, and technical skill.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/Portfolio.png",
    tags: [
      {
        id: 1,
        name: "React",
        path: "/assets/logos/react.svg",
      },
      {
        id: 2,
        name: "Vite",
        path: "/assets/logos/vitejs.svg",
      },
      {
        id: 3,
        name: "TailwindCSS",
        path: "/assets/logos/tailwindcss.svg",
      },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/soumya-ranjan-chaudhury-9b6424197/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ranjan.soumyaaaa/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    job: "CODEBEAT",
    date: " June 2024-July 2024",
    contents: [
      "Developed and maintained web applications using Django framework and Python, contributing to both front-end and back-end features.",
      "Designed and implemented RESTful APIs using Django REST Framework to support mobile and web clients.",
      "Integrated PostgreSQL database models and wrote custom queries to optimize data handling and performance.",
      "Applied user authentication and authorization using Django's built-in system and third-party packages like django-allauth.",
    ],
  },
  {
    title: " Mern Stack Web Developer",
    job: "CODTECH IT SOLUTIONS PVT.LTD",
    date: " May 2025-June 2025",
    contents: [
      "Developed a real-time chat application using Socket.IO (Node.js) and React, enabling seamless live messaging between users.",
      "Created a responsive weather application integrating OpenWeatherMap API to fetch and display dynamic weather data.",
      " Built a real-time collaboration tool (e.g., shared editor or whiteboard) using WebSocket, supporting synchronized multi-user interactions.",
      "Engineered a Chrome extension for productivity tracking using the MERN stack, featuring time tracking, site blocking, and daily report generation with backend data synchronization.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2025-Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
