import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const projects = [
  {
    id: 13,
    title: "BigBook One",
    image: "/big-book.png",
    url: "https://bigbookone.com/",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
    description: "A powerful scientific content search platform covering Islamic fields such as Arabic language, Quranic interpretation (Tafsir), Hadith, and more. Built for researchers and students seeking reliable references.",
    tags: ["Node.js", "MongoDB", "Express", "Search Engine", "Islamic Content"],
    features: [
      "Full-text search across multiple Islamic disciplines",
      "Covers Tafsir, Hadith, Arabic language and more",
      "Fast and accurate results from curated scientific sources",
      "Clean reading interface optimized for long-form content"
    ]
  },
  {
    id: 14,
    title: "Moshtak",
    image: "/moshtak.png",
    url: "https://moshtak.com/",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
    description: "A comprehensive travel platform specializing in Hajj, Umrah, and flight bookings. Helps pilgrims and travelers easily find and book their spiritual journeys with a seamless experience.",
    tags: ["Node.js", "MongoDB", "Express", "Travel Platform", "Booking System"],
    features: [
      "Hajj & Umrah package search and booking system",
      "Flight search with flexible filters and availability",
      "Secure user accounts with booking history tracking",
      "Streamlined checkout and reservation management"
    ]
  },
  {
    id: 15,
    title: "Mihad Cowhide",
    image: "/mihad.png",
    url: "https://mihadcowhide.com/",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
    description: "An e-commerce platform for selling premium carpets and cowhide leather products. Features a rich product catalog with detailed listings, smooth browsing, and a secure purchasing flow.",
    tags: ["Node.js", "MongoDB", "Express", "E-commerce", "Carpets & Leather"],
    features: [
      "Full product catalog for carpets and cowhide leather items",
      "Detailed product pages with images and specifications",
      "Secure user accounts and order management",
      "Smooth shopping cart and checkout experience"
    ]
  },
  {
    id: 9,
    title: "Habit Tracker API",
    image: "/habit-tracker-api-image.jpg",
    url: "/habit-tracker-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
    description: "A RESTful API for tracking daily habits with features like habit creation, progress tracking, and user management. Built with Node.js, Express, and MongoDB.",
    tags: ["Node.js", "MongoDB", "Express", "REST API", "JWT Auth"],
    features: [
      "Habit creation & customization options",
      "Daily progress tracking & streak calculations",
      "Secure user registration & cookie-based authentication",
      "Comprehensive statistics & completion rate dashboards"
    ]
  },
  {
    id: 8,
    title: "Social Media API",
    image: "/social-media-api-image.png",
    url: "/social-media-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
    description: "A complete social media backend API with authentication, post management, user following, likes, and comments. Features JWT authentication and comprehensive CRUD operations.",
    tags: ["Node.js", "MongoDB", "Express", "Social API", "Media Uploads"],
    features: [
      "Secure user registration with email verification codes",
      "Profile management & follow/unfollow system",
      "Post creation with image support, likes & comments",
      "Real-time notifications for activities"
    ]
  },
  {
    id: 7,
    title: "To Do List API",
    image: "/API-To-Do-List.png",
    url: "/to-do-list-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
    description: "A simple yet powerful To-Do List API with task management, priority levels, due dates, and user-specific task organization.",
    tags: ["Node.js", "MongoDB", "Express", "Task Manager", "Cookies"],
    features: [
      "Full CRUD operations for task scheduling",
      "Priority levels & customizable due dates",
      "User profile updates & password resets",
      "Cookie-based authorization & account deletion"
    ]
  },
  {
    id: 10,
    title: "E-commerce API",
    image: "/ecommerceAPI.png",
    url: "/ecommerce-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
    description: "A comprehensive e-commerce backend API with product management, cart functionality, user authentication, and order processing.",
    tags: ["Node.js", "MongoDB", "Express", "E-commerce", "REST API"],
    features: [
      "Product catalog with sorting & pagination support",
      "Shopping cart CRUD endpoints per user",
      "Persistent user watchlist/favorites support",
      "Admin products control & user registration roles"
    ]
  },
  {
    id: 6,
    title: "E-commerce MERN",
    image: "/e-commerce-mern.png",
    url: "https://e-commerce-react-chi-smoky.vercel.app/",
    by: "nodejs",
    icons: [FaNodeJs, FaReact, SiMongodb],
    github: "",
    description: "A full-stack e-commerce application built with MERN stack. Features include product catalog, shopping cart, user authentication, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
    features: [
      "Responsive React interactive user interface",
      "Dynamic catalog search & filtering controls",
      "Persistent shopping cart and secure order flow",
      "User signup & secure authentication integration"
    ]
  },
  {
    id: 11,
    title: "Zad Elmuslim Bot",
    image: "/zad-bot.png",
    url: "https://t.me/zad_converter_bot",
    by: "telegram",
    icons: [FaNodeJs],
    github: "https://github.com/Abo-Osama/telegram-bot",
    description: "A Telegram bot for converting Islamic content. Built with Node.js and Telegram Bot API, providing seamless content conversion for users.",
    tags: ["Node.js", "Telegram Bot API", "Javascript", "Islamic Tools"],
    features: [
      "Islamic content conversion engines",
      "Custom inline keyboards & navigation menus",
      "High scalability and minimal response latency",
      "Automated log handlers for chat errors"
    ]
  },
  {
    id: 12,
    title: "Voting Blockchain",
    image: "/voting-blockchain.png",
    url: "https://voting-blockchain-green.vercel.app/",
    by: "blockchain",
    icons: [FaReact, FaNodeJs],
    github: "https://github.com/AhmdBlack0/voting-blockchain-project",
    description: "A blockchain-based voting system ensuring secure and transparent elections. Built with React frontend and Node.js backend, featuring smart contract integration.",
    tags: ["React", "Node.js", "Blockchain", "Smart Contracts", "Web3 UI"],
    features: [
      "Decentralized voter authentication & identity checks",
      "Immutable, tamper-proof vote tally recording on ledger",
      "Interactive charts displaying real-time election statistics",
      "Smart contract validations for vote authenticity"
    ]
  },
];

export default projects;
