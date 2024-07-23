// Icons
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import StackIcon from "tech-stack-icons";

export const navLinks = [
  { id: "Home", icon: <HomeIcon color="primary" /> },
  { id: "About", icon: <InfoIcon color="primary" /> },
  { id: "Portfolio", icon: <ListAltIcon color="primary" /> },
  { id: "Contact", icon: <PermPhoneMsgIcon color="primary" /> },
];

export const socialLinks = [
  {
    id: "Github",
    icon: <GitHubIcon fontSize="large" />,
    redirectLink: "https://github.com/AhmedKamran1",
  },
  {
    id: "LinkedIn",
    icon: <LinkedInIcon fontSize="large" />,
    redirectLink: "https://www.linkedin.com/in/AhmedKamran1/",
  },
  {
    id: "Email",
    icon: <EmailIcon fontSize="large" />,
    redirectLink: "mailto:ahmed.kamran11122@gmail.com",
  },
];

const iconSize = {
  height: "35px",
  width: "35px",
};

export const projects = [
  {
    id: 1,
    title: "DineEase",
    img: [
      "/assets/projects/dine-ease/home-page.png",
      "/assets/projects/dine-ease/about-page.png",
      "/assets/projects/dine-ease/profile-page.png",
      "/assets/projects/dine-ease/restaurant-page.png",
      "/assets/projects/dine-ease/restaurant-dashboard-page.png",
      "/assets/projects/dine-ease/restaurant-discovery-page.png",
      "/assets/projects/dine-ease/favourites-map-page.png",
    ],
    techStack: [
      {
        icon: <StackIcon name="nextjs2" style={iconSize} />,
        name: "Next.js",
      },
      {
        icon: <StackIcon name="reactjs" style={iconSize} />,
        name: "React.js",
      },
      {
        icon: <StackIcon name="materialui" style={iconSize} />,
        name: "Material-UI",
      },
      {
        icon: <StackIcon name="redux" style={iconSize} />,
        name: "Redux-Toolkit.js",
      },
      {
        icon: <StackIcon name="aws" style={iconSize} />,
        name: "AWS S3",
      },
      {
        icon: null,
        name: "Mapbox.js",
      },
      {
        icon: null,
        name: "Meilisearch",
      },
      {
        icon: null,
        name: "Chart.js",
      },
      {
        icon: null,
        name: "Stripe",
      },
    ],
    description: "A comprehensive dining platform with the following features.",
    bullets: [
      "Detailed restaurant listings with Mapbox integration.",
      "User critiques and engagement functionalities.",
      "Shareable personalized restaurant maps for tailored dining experiences.",
      "Dining plans for organizing meals.",
    ],
    url: {
      githubLink: "https://github.com/orgs/FYP-DineEase/repositories",
      viewLink:
        "https://drive.google.com/file/d/1FuwX-qkqPvrICNHPeQFHXFliH23f1bNQ/view?usp=sharing",
    },
  },
  {
    id: 2,
    title: "Blog Application",
    img: [
      "/assets/projects/blog-app/home-page.png",
      "/assets/projects/blog-app/posts-page.png",
      "/assets/projects/blog-app/post-1-content-page.png",
      "/assets/projects/blog-app/post-2-content-page.png",
      "/assets/projects/blog-app/contact-page.png",
    ],
    techStack: [
      {
        icon: <StackIcon name="nextjs2" style={iconSize} />,
        name: "Next.js",
      },
      {
        icon: <StackIcon name="reactjs" style={iconSize} />,
        name: "React.js",
      },
      {
        icon: <StackIcon name="mongodb" style={iconSize} />,
        name: "MongoDB",
      },
      {
        icon: <StackIcon name="nodejs" style={iconSize} />,
        name: "Node.js",
      },
    ],
    description: "Full-stack application developed with Next.js.",
    bullets: [
      "Allows publishing blogs with comments, stored in MongoDB.",
      "Integration of code snippets using react-markdown and gray matter.",
    ],
    url: {
      githubLink: "https://github.com/AhmedKamran1/ahmed-blog-app",
      viewLink: "https://ahmed-blog-app.vercel.app/",
    },
  },
];

export const technologies = [
  {
    name: "React JS",
    image: "/assets/section-animations/tech-stack/reactjs.png",
  },
  {
    name: "Next JS",
    image: "/assets/section-animations/tech-stack/nextjs.png",
  },
  {
    name: "Express JS",
    image: "/assets/section-animations/tech-stack/expressjs.png",
  },
  {
    name: "Node JS",
    image: "/assets/section-animations/tech-stack/nodejs.png",
  },
  {
    name: "MongoDB",
    image: "/assets/section-animations/tech-stack/mongodb.png",
  },
  {
    name: "git",
    image: "/assets/section-animations/tech-stack/git.png",
  },
  {
    name: "HTML 5",
    image: "/assets/section-animations/tech-stack/html.png",
  },
  {
    name: "CSS 3",
    image: "/assets/section-animations/tech-stack/css.png",
  },
  {
    name: "JavaScript",
    image: "/assets/section-animations/tech-stack/javascript.png",
  },
];
