import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Clipboard Landing Page Master",
    image: "/clipboard-landing-page-master.jpg", // Corrected path
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
    id: 3,
    title: "Zad Elmuslim",
    image: "/zad-elmuslim.png",
    url: "https://zad-elmuslim.vercel.app/",
    by: "react",
    icons: [FaReact],
    github: "https://github.com/AhmdBlack0/zad-elmuslim",
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
