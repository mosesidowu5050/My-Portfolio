type Project = {
  title: string;
  year: string;
  image: string;
  description: string;
  url: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    title: "E-Commerce Project",
    year: "2024",
    image: "/e-commerce.png",
    description:
      "A full-stack group project building an E-Commerce platform with product catalog, shopping cart, and secure checkout system. Includes user authentication, order management, and admin dashboard for inventory control.",
    url: "https://github.com/mosesidowu5050/SME-E-Commerce",
    tech: ["Java", "Spring Boot"],
  },
  {
    title: "URL Shortener Service",
    year: "2024",
    image: "/url.png",
    description:
      "A scalable microservice for shortening URLs, similar to Bitly. Supports analytics for click tracking, unique short codes, and REST APIs for integration with other apps.",
    url: "https://github.com/mosesidowu5050/UrlShortnerService",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
  },
  {
    title: "Geolocation Dependency",
    year: "2025",
    image: "/auction.png",
    description:
      "A Spring Boot application that provides geolocation services for users, allowing them to find nearby places and services.",
    url: "https://github.com/mosesidowu5050/Geolocation-Dependency",
    tech: ["Java", "Spring Boot", "Hibernate"],
  },
  {
    title: "Advance Banking System",
    year: "2025",
    image: "/bank.png",
    description:
      "A digital banking system with secure account management, fund transfers, transaction history, and balance monitoring. Built with enterprise-grade practices to simulate core banking operations.",
    url: "https://github.com/mosesidowu5050/advance-banking-system",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
  },
  {
    title: "Expense Tracker",
    year: "2022",
    image: "/tracker.png",
    description:
      "A personal finance tracking app to record daily expenses, categorize transactions, and visualize financial health using charts. Helps users stay on top of their budgets and savings goals.",
    url: "https://github.com/mosesidowu5050/ExpenseTrackerApp",
    tech: ["Java, Spring Boot"],
  },
  {
    title: "Voting System",
    year: "2025",
    image: "/vote.png",
    description:
      "A secure digital election and civic engagement system that allows citizens to vote securely, track election results, and report incidents and concerns.",
    url: "https://github.com/mosesidowu5050/Voting-System-Capstone-Project",
    tech: ["React", "Vite", "Chart.js", "TailwindCSS", "Docker", "Python", "Django"],
  },
];
