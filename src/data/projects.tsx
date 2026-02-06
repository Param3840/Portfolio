"use client";

import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiMongodb,
  SiPython,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { Button } from "@/components/ui/button";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => (
  <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
    <Link rel="noopener" target="_new" href={live}>
      <Button variant={"default"} size={"sm"}>
        Visit Website
        <ArrowUpRight className="ml-3 w-5 h-5" />
      </Button>
    </Link>
    {repo && (
      <Link rel="noopener" target="_new" href={repo}>
        <Button variant={"default"} size={"sm"}>
          Github
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
    )}
  </div>
);

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  next: { title: "Next.js", bg: "black", fg: "white", icon: <RiNextjsFill /> },
  node: { title: "Node.js", bg: "black", fg: "white", icon: <RiNodejsFill /> },
  react: { title: "React.js", bg: "black", fg: "white", icon: <RiReactjsFill /> },
  ts: { title: "TypeScript", bg: "black", fg: "white", icon: <SiTypescript /> },
  js: { title: "JavaScript", bg: "black", fg: "white", icon: <SiJavascript /> },
  tailwind: { title: "Tailwind", bg: "black", fg: "white", icon: <SiTailwindcss /> },
  mongo: { title: "MongoDB", bg: "black", fg: "white", icon: <SiMongodb /> },
  express: { title: "Express", bg: "black", fg: "white", icon: <SiExpress /> },
  sockerio: { title: "Socket.io", bg: "black", fg: "white", icon: <SiSocketdotio /> },
  python: { title: "Python", bg: "black", fg: "white", icon: <SiPython /> },
  framerMotion: { title: "Framer Motion", bg: "black", fg: "white", icon: <TbBrandFramerMotion /> },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "medical-ai",
    category: "Mobile Application",
    title: "Smart Medical AI Assistant",
    src: "/assets/SmartMedical.jpeg",
    screenshots: ["SmartMedical.jpeg"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo],
    },
    live: "https://github.com/Param3840/Smart-Medical-AI-Assistant---Backend-and-Frontend",
    github: "https://github.com/Param3840/Smart-Medical-AI-Assistant---Backend-and-Frontend",
    content: (
      <div>
        <TypographyP>
          Developed a mobile application that allows users to input their symptoms
          and receive potential disease predictions using the Gemini API. The app
          also displays nearby hospitals based on the user’s current location,
          along with real-time distance and directions. Additionally, it features
          a reminder system enabling users to schedule notifications for
          medications and doctor appointments.
        </TypographyP>
        <TypographyP>
          <strong>Tech Stack:</strong> React Native (Expo), Node.js, Express,
          MongoDB, JWT, Gemini Pro API, Geoapify, Google Maps
        </TypographyP>
        <p>You Can Dowanload App From Git</p>
        <ProjectsLinks
          live="https://github.com/Param3840/Smart-Medical-AI-Assistant---Backend-and-Frontend"
          repo="https://github.com/Param3840/Smart-Medical-AI-Assistant---Backend-and-Frontend"
        />
      </div>
    ),
  },
  {
    id: "local-marketplace",
    category: "Web Platform",
    title: "Local Market Place",
    src: "/assets/local.png",
    screenshots: ["local.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.ts, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express, PROJECT_SKILLS.mongo, PROJECT_SKILLS.sockerio],
    },
    live: "https://local-market-place-ten.vercel.app/",
    github: "https://github.com/Param3840/Local-Market-Place",
    content: (
      <div>
        <TypographyP>
          A full-stack web platform where buyers can browse products, manage carts
          and wishlists, and communicate with sellers in real time. Includes secure
          authentication, media sharing, and role-based access control where buyers
          and sellers access separate platforms.
        </TypographyP>
        <TypographyP>
          <strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, JWT, Socket.IO
        </TypographyP>
        <ProjectsLinks
          live="https://local-market-place-ten.vercel.app/"
          repo="https://github.com/Param3840/Local-Market-Place"
        />
      </div>
    ),
  },
  {
    id: "complaint-system",
    category: "Web Platform",
    title: "Student Complaint Management System",
    src: "/assets/student.png",
    screenshots: ["student.png"],
    skills: {
      frontend: [PROJECT_SKILLS.js],
      backend: [PROJECT_SKILLS.python],
    },
    live: "https://campus-complaint-management-system.onrender.com/",
    github: "https://github.com/Param3840/Campus-Complaint-Management-System",
    content: (
      <div>
        <TypographyP>
          Web-based platform for students to submit complaints and track status,
          with admins able to manage and resolve issues. Includes JWT authentication,
          persistent storage, and role-based access.
        </TypographyP>
        <TypographyP>
          <strong>Tech Stack:</strong> HTML, CSS, JavaScript, Flask, JSON, JWT
        </TypographyP>
        <TypographyP>
          <strong>Key Achievement:</strong> Improved complaint resolution workflow
          for 50+ test cases.
        </TypographyP>
        <ProjectsLinks
          live="https://campus-complaint-management-system.onrender.com/"
          repo="https://github.com/Param3840/Campus-Complaint-Management-System"
        />
      </div>
    ),
  },
  {
    id: "portfolio",
    category: "Portfolio Website",
    title: "Personal Portfolio",
    src: "/assets/Portfolio.png",
    screenshots: ["Portfolio.png"],
    skills: {
      frontend: [PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.framerMotion],
      backend: [],
    },
    live: "https://paramveer-portfolio.vercel.app", // ✅ actual portfolio live link
    github: "https://github.com/Param3840/Portfolio", // ✅ actual GitHub repo link
    content: (
      <div>
        <TypographyP>
          A visually premium portfolio website showcasing academic achievements,
          projects, and interactive 3D animations. Built with Next.js App Router,
          Tailwind CSS, and Framer Motion for smooth animations.
        </TypographyP>
        <ProjectsLinks
          live="https://paramveer-portfolio.vercel.app"
          repo="https://github.com/Param3840/Portfolio"
        />
      </div>
    ),
  },
];

export default projects;