import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const projects = [
  {
    id: 6,
    title: "E-commerce MERN",
    image: "/e-commerce-mern.png",
    url: "https://e-commerce-react-chi-smoky.vercel.app/",
    by: "node",
    icons: [FaNodeJs, FaReact, SiMongodb],
    github: "",
  },
  {
    id: 5,
    title: "Social Media App",
    image: "/social-media-app.png",
    url: "https://social-media-app--phi.vercel.app/",
    by: "react",
    icons: [FaReact],
    github: "https://github.com/AhmdBlack0/social-media-app",
  },
  {
    id: 3,
    title: "Zad Elmuslim",
    image: "/zad-elmuslim.png",
    url: "https://zad-elmuslim.vercel.app/",
    by: "react",
    icons: [FaReact],
    github: "https://github.com/AhmdBlack0/zad-elmuslim",
  },
  {
    id: 1,
    title: "Clipboard Landing Page Master",
    image: "/clipboard-landing-page-master.jpg",
    url: "https://ahmdblack0.github.io/frontend-mentor-clipboard-landing-page-master/",
    by: "html",
    icons: [FaHtml5, IoLogoCss3],
    github:
      "https://github.com/AhmdBlack0/frontend-mentor-clipboard-landing-page-master",
  },
  {
    id: 2,
    title: "Huddle Landing Page",
    image: "/huddle-landing-page-with-alternating-feature-blocks-master.png",
    url: "https://ahmdblack0.github.io/frontend-mentor-huddle-landing-page-with-alternating-feature-blocks-master/",
    by: "html",
    icons: [FaHtml5, IoLogoCss3],
    github: "",
  },
  {
    id: 4,
    title: "Business Landing Page",
    image: "/business-landing-page.png",
    url: "https://ahmdblack0.github.io/business-landing-page/",
    by: "javascript",
    icons: [FaJsSquare],
    github: "https://github.com/AhmdBlack0/business-landing-page",
  },
];

export default projects;
