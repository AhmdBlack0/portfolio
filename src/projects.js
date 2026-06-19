import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const projects = [
  {
    id: 9,
    title: " Habit Tracker API",
    image: "/habit-tracker-api-image.jpg",
    url: "/habit-tracker-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
  },
  {
    id: 8,
    title: " Social Media API",
    image: "/social-media-api-image.png",
    url: "/social-media-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
  },
  {
    id: 7,
    title: "To Do List API",
    image: "/API-To-Do-List.png",
    url: "/to-do-list-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
  },
  {
    id: 10,
    title: "E-commerce API",
    image: "/ecommerceAPI.png",
    url: "/ecommerce-api",
    by: "nodejs",
    icons: [FaNodeJs, SiMongodb, SiExpress],
    github: "",
  },
  {
    id: 6,
    title: "E-commerce MERN",
    image: "/e-commerce-mern.png",
    url: "https://e-commerce-react-chi-smoky.vercel.app/",
    by: "nodejs",
    icons: [FaNodeJs, FaReact, SiMongodb],
    github: "",
  },
  {
    id: 11,
    title: "Zad Elmuslim Bot",
    image: "/zad-bot.png",
    url: "https://t.me/zad_converter_bot",
    by: "telegram",
    icons: [FaNodeJs],
    github: "https://github.com/Abo-Osama/telegram-bot",
  },
  {
    id: 12,
    title: "Voting Blockchain",
    image: "/voting-blockchain.png",
    url: "https://voting-blockchain-green.vercel.app/",
    by: "blockchain",
    icons: [FaReact, FaNodeJs],
    github: "https://github.com/AhmdBlack0/voting-blockchain-project",
  },
];

export default projects;
