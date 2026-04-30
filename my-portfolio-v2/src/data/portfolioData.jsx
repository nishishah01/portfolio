import {
  FaAws,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiDjango,
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPostman,
  SiPython,
  SiSpringboot
} from "react-icons/si";

export const personalInfo = {
  name: "Nishi Shah",
  title: "Full Stack Developer",
  email: "nishishah0104@gmail.com",
  linkedin: "https://www.linkedin.com/in/nishishahh/",
  github: "https://github.com/nishishah01",
  leetcode: "https://leetcode.com/u/nishishah1/",
  shortBio: "I fix bugs, but first I create them",
  bio: "Full-stack developer skilled in building scalable web applications using modern frontend and backend technologies. Experienced in creating responsive, user-centric interfaces and robust APIs for seamless performance. Passionate about solving real-world problems through clean code, efficient architecture, and continuous learning.",

};

export const education = [
  {
    institution: "Dwarkadas J. Sanghvi College Of Engineering",
    degree: "Bachelor of Technology in Computer Engineering",
    duration: "Aug 2023 – Present",
    score: "CGPA: 9.33/10",
  },
  {
    institution: "Childrens Academy Ashok Nagar",
    degree: "Class 10th ICSE",
    duration: "April 2016 - May 2021",
    score: "96.82%",
  }
];

export const projects = [
  {
  title: "DJSCE Campus Placement Portal",
  tech: [
    "Django",
    "TypeScript",
    "Python",
    "Pandas",
    "NumPy",
    "Cloudinary"
  ],
  description: [
    <>
      Built a{" "}
      <span className="text-text-primary font-medium">
        full-stack campus placement management system
      </span>{" "}
      connecting students, recruiters, and placement coordinators on a unified platform, streamlining the end-to-end recruitment workflow.
    </>,
    <>
      Developed role-based dashboards enabling{" "}
      <span className="text-text-primary font-medium">
        student profile management, job applications, and recruiter job postings with application tracking
      </span>
      , improving efficiency and transparency in the placement process.
    </>,
    <>
      Implemented an{" "}
      <span className="text-text-primary font-medium">
        AI-powered Applicant Tracking System (ATS)
      </span>{" "}
      using Python, Pandas, and NumPy to analyze resumes and rank candidates, generating top matches based on job descriptions.
    </>,
    <>
      Designed a{" "}
      <span className="text-text-primary font-medium">
        centralized analytics and reporting system
      </span>{" "}
      for coordinators to monitor applications, manage data, and extract actionable insights.
    </>,
  ],
  date: "March 2026 – Present",
  githubLink: "https://github.com/nishishah01/djsce-campus-placement-portal.git",
  category: "Full Stack / AI",
  icon: <FaDatabase size={24} className="text-accent-1" />,
  image: "/placement.png",
},
  {
    title: "AyuSphere",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Multer",
      "Cloudinary",
      "Twilio",
      "CSV Seed",
      "REST APIs"
    ],
    description: [
      <>
        Built{" "}
        <span className="text-text-primary font-medium">
          AyuSphere – a modern healthcare platform
        </span>{" "}
        featuring patient and doctor dashboards with a robust backend API and
        emergency SOS functionality.
      </>,
      <>
        Developed an{" "}
        <span className="text-text-primary font-medium">
          end-to-end medical record & telehealth system
        </span>{" "}
        including doctor portal (ayucare-final-doctor), patient portal
        (ayucare-final-patient), and Express backend (ayucare-backend).
      </>,
      <>
        Implemented{" "}
        <span className="text-text-primary font-medium">
          OTP authentication
        </span>
        , EMR management, SOS alerts, profile handling, patient history, file
        uploads, and analytics dashboards.
      </>,
    ],
    date: "June 2025 – Present",
    githubLink: "https://github.com/nishishah01/ayusphere-personal.git",
    category: "Full Stack",
    icon: <FaReact size={24} className="text-accent-1" />,
    image: "/Ayusphere.png",
  },
  {
    title: "Booknest- Book Rental Platform",
    tech: ["Django", "PostgreSQL", "React.js", "TailwindCSS"],
    description: [
      <>
        Built{" "}
        <span className="text-text-primary font-medium">
          BookNest – a digital book marketplace
        </span>{" "}
        with 1000+ listings enabling users to rent, buy, and sell books,
        making reading more affordable and accessible.
      </>,
      <>
        Implemented{" "}
        <span className="text-text-primary font-medium">
          advanced search and filtering
        </span>{" "}
        improving discovery efficiency by 50%, allowing users to find books
        by author, genre, category, and more.
      </>,
      <>
        Developed a{" "}
        <span className="text-text-primary font-medium">
          community forum
        </span>{" "}
        where readers can connect, discuss genres, exchange recommendations,
        and build peer-to-peer learning networks.
      </>,
    ],

    date: "Jan 2025 – Dec2025",
    githubLink: "https://github.com/djunicode/BookNest.git",
    icon: <FaCode size={24} className="text-accent-1" />,
    image: "/Booknest.png",
  },
  {
    title: "Shopsphere",
    tech: ["Django", "React.js", "Flutterwave", "Paypal"],
    description: [
      <>
        Developed and deployed{" "}
        <span className="text-text-primary font-medium">
          RESTful APIs using Django
        </span>{" "}
        to manage product listings, orders, and payment workflows, improving
        scalability and maintainability.
      </>,
      <>
        Integrated{" "}
        <span className="text-text-primary font-medium">
          Flutterwave and PayPal APIs
        </span>{" "}
        to enable secure and reliable payment processing.
      </>,
    ],
    date: "April 2025 – July 2025",
    githubLink: "https://github.com/nishishah01/E-Commerce-Website.git",
    icon: <FaDatabase size={24} className="text-accent-1" />,
    image: "/Shopsphere.png",
  },
  
];

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "SQL", icon: <FaDatabase /> },
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Springboot", icon: <SiSpringboot /> },

  ],
  toolsAndPlatforms: [
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Postman", icon: <SiPostman /> }
  ],
  cloudTechnologies: [
    { name: "AWS", icon: <FaAws /> }
  ]
};

export const experience = [

  {
    role: "Fullstack Django Mentor",
    organization: "DJS Unicode",
    duration: "June 2024 – Present",
    points: [
      "Promoted to Mentor role to support and guide new mentees by sharing best practices in Django, reviewing code, and helping with real-world project development."
    ],
  }
  , {
    role: "Web Development Intern",
    organization: "Quickyearning Private Limited",
    duration: "December 2024 – April 2025",
    points: [
      "Worked on building a responsive web application using React.js, Tailwind CSS, and Redux, focusing on creating clean and user-friendly interfaces.",
      "Integrated RESTful APIs to ensure smooth data flow between frontend and backend and improved overall performance and user experience by optimizing components and managing state effectively."
    ],
  },

];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: {
    url: `mailto:${personalInfo.email}`,
    icon: <FaEnvelope size={24} />,
  },
};
