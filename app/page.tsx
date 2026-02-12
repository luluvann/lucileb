"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { MenuIcon, Moon, Sun, ArrowDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  FaAngular,
  FaDocker,
  FaGitAlt,
  FaReact,
  FaSass,
  FaSlack,
} from "react-icons/fa";
import {
  SiBlazor,
  SiCss3,
  SiHtml5,
  SiJest,
  SiNestjs,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript,
  SiTestinglibrary,
  SiGithub,
  SiMongodb,
  SiJira,
  SiPostgresql,
  SiApollographql,
  SiPostman,
  SiInsomnia,
  SiExpress,
} from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import {
  TbBrandCSharp,
  TbBrandPrisma,
  TbBrandStorybook,
  TbSql,
} from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";
import { MdHttp } from "react-icons/md";

export default function Home() {
  const { setTheme } = useTheme();

  const languages = [
    { name: "TypeScript", icon: <SiTypescript className="w-4 h-4" /> },
    { name: "C#", icon: <TbBrandCSharp className="w-4 h-4" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-4 h-4" /> },
    { name: "Python", icon: <FaPython className="w-4 h-4" /> },
    { name: "SQL", icon: <TbSql className="w-4 h-4" /> },
    { name: "HTML", icon: <SiHtml5 className="w-4 h-4" /> },
    { name: "CSS", icon: <SiCss3 className="w-4 h-4" /> },
    { name: "Sass", icon: <FaSass className="w-4 h-4" /> },
  ];

  const frontTechnologies = [
    { name: "React", icon: <FaReact className="w-4 h-4" /> },
    { name: "Vue.js", icon: <FaVuejs className="w-4 h-4" /> },
    { name: "Blazor", icon: <SiBlazor className="w-4 h-4" /> },
    { name: "Angular", icon: <FaAngular className="w-4 h-4" /> },
    { name: "Next.js", icon: <RiNextjsLine className="w-4 h-4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4" /> },
    { name: "Shadcn UI", icon: <SiShadcnui className="w-4 h-4" /> },
    { name: "Storybook", icon: <TbBrandStorybook className="w-4 h-4" /> },
    { name: "Jest", icon: <SiJest className="w-4 h-4" /> },
    { name: "Testing Library", icon: <SiTestinglibrary className="w-4 h-4" /> },
  ];

  const backTechnologies = [
    { name: "REST Apis", icon: <MdHttp className="w-4 h-4" /> },
    { name: "NestJS", icon: <SiNestjs className="w-4 h-4" /> },
    { name: "Express.js", icon: <SiExpress className="w-4 h-4" /> },
    { name: "GraphQL", icon: <GrGraphQl className="w-4 h-4" /> },
    { name: "Apollo GraphQL", icon: <SiApollographql className="w-4 h-4" /> },
    { name: "Prisma", icon: <TbBrandPrisma className="w-4 h-4" /> },
  ];

  const databaseTechnologies = [
    { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4" /> },
    { name: "MongoDB", icon: <SiMongodb className="w-4 h-4" /> },
  ];

  const tools = [
    { name: "Git", icon: <FaGitAlt className="w-4 h-4" /> },
    { name: "GitHub", icon: <SiGithub className="w-4 h-4" /> },
    { name: "VS Code", icon: <VscVscode className="w-4 h-4" /> },
    { name: "Figma", icon: <FiFigma className="w-4 h-4" /> },
    { name: "Docker", icon: <FaDocker className="w-4 h-4" /> },
    { name: "Postman", icon: <SiPostman className="w-4 h-4" /> },
    { name: "Insomnia", icon: <SiInsomnia className="w-4 h-4" /> },
    { name: "Jira", icon: <SiJira className="w-4 h-4" /> },
    { name: "Slack", icon: <FaSlack className="w-4 h-4" /> },
  ];

  const projectCards = [
    {
      title: "Scaffold project with NestJS in TypeScript & MongoDB/Mongoose",
      description:
        "A scaffold back-end project NestJS with a MongoDB db with basic settings and routes examples to be re-used in any new back-end projects",
      technologies: "NestJS, MongoDB, TypeScript",
      links: [
        "https://github.com/luluvann/NestJSMongoDB",
        "https://github.com/luluvann/NestJSMongoDB",
      ],
    },
    {
      title: "Login in React TS, SCSS",
      description: "Login page",
      technologies: "React, TypeScript, SCSS",
      links: [
        "https://luluvann.github.io/login-react/",
        "https://github.com/luluvann/login-react",
      ],
    },
    {
      title: "My Portfolio",
      description: "My webapps portfolio",
      technologies: "HTML, CSS, Javascript",
      links: [
        "https://www.lucile.dev",
        "https://github.com/luluvann/portfolio-website",
      ],
    },
    {
      title: "React Project with TypeScript and Redux",
      description: "A React Project developped in TypeScript using Redux",
      technologies: "HTML, Sass, TypeScript, Redux",
      links: [
        "https://luluvann.github.io/react-typescript-redux/",
        "https://github.com/luluvann/react-typescript-redux",
      ],
    },
    {
      title: "Weather Web App",
      description: "A simple web app to see the current weather in a city",
      technologies: "React, Open Weather Map API",
      links: [
        "https://github.com/luluvann/react-weather-app",
        "https://luluvann.github.io/react-weather-app/website/?city=Montreal",
      ],
    },
    {
      title: "Github Repos Lister",
      description: "List all the public repos of a given user",
      technologies: "React, Github API",
      links: [
        "https://github.com/luluvann/github-api",
        "https://luluvann.github.io/github-api",
      ],
    },
    {
      title: "Password Generator",
      description: "Generate a random password based on criterias",
      technologies: "Vanilla Javascript",
      links: [
        "https://github.com/luluvann/password-generator",
        "https://luluvann.github.io/password-generator",
      ],
    },
    {
      title: "Mobile App Landing Page",
      description: "A landing page to promote a mobile app",
      technologies: "HTML, CSS",
      links: [
        "https://github.com/luluvann/po-contacts",
        "https://www.pocontacts.app",
      ],
    },
    {
      title: "Javascript Code Quiz",
      description: "A quiz to test coding knowledge",
      technologies: "jQuery, Bootstrap 4",
      links: [
        "https://github.com/luluvann/code-quiz",
        "https://luluvann.github.io/code-quiz",
      ],
    },
    {
      title: "Weather Forecast Dashboard",
      description:
        "A simple weather dashboard to see current and weather forecast ",
      technologies: "jQuery, Bootstrap 4, Open Weather Map API",
      links: [
        "https://github.com/luluvann/weather-dashboard",
        "https://luluvann.github.io/weather-dashboard",
      ],
    },
    {
      title: "Pro-Trader Simulator",
      description:
        "An app to simulate stock exchange trading (collaborative project)",
      technologies: "jQuery, Bootstrap 4, Server side APIs",
      links: [
        "https://github.com/luluvann/Pro-Trader",
        "https://phonix375.github.io/Pro-Trader",
      ],
    },
    {
      title: "Live The Outdoors",
      description:
        "Full Stack Plateform to favorite hiking trails (collaborative project)",
      technologies: "Express.js, Handlebars, Connect-Session, Sequelize, MySQL",
      links: ["https://github.com/luluvann/live-the-outdoors"],
    },
    {
      title: "The Community Gallery",
      description:
        "Full Stack Plateform to vote or sell artworks (collaborative project)",
      technologies: "React.js, Express.js, GraphQL, MongoDB/Mongoose",
      links: ["https://github.com/deepikabekal/TCG"],
    },
  ];

  return (
    <div className="flex">
      {/* Navigation */}
      <NavigationMenu className="fixed top-0 w-full bg-white/50 backdrop-blur-sm dark:bg-slate-800/50 h-16 flex justify-end items-center p-4 max-w-full">
        <NavigationMenuList className="flex items-center gap-4">
          <NavigationMenuItem className="hidden md:flex">
            <a
              href="#summary"
              className="cursor-pointer hover:text-emerald-400 transition-colors"
            >
              <span className="mr-2 text-emerald-400 font-roboto-mono">
                01.
              </span>
              About Me
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <a
              href="#tech-stack"
              className="cursor-pointer hover:text-emerald-400 transition-colors"
            >
              <span className="mr-2 text-emerald-400 font-roboto-mono">
                02.
              </span>
              My Tech Stack
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <a
              href="#projects"
              className="cursor-pointer hover:text-emerald-400 transition-colors"
            >
              <span className="mr-2 text-emerald-400 font-roboto-mono">
                03.
              </span>
              A Few Projects
            </a>
          </NavigationMenuItem>

          {/* Mobile hamburger */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
                  <MenuIcon className="w-6 h-6" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-slate-800 shadow-md rounded-md mt-2 right-0 w-40">
                <DropdownMenuItem asChild>
                  <a href="#summary" className="cursor-pointer">
                    <span className="mr-2 text-emerald-400 font-roboto-mono">
                      01.
                    </span>
                    About Me
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#tech-stack" className="cursor-pointer">
                    <span className="mr-2 text-emerald-400 font-roboto-mono">
                      02.
                    </span>
                    My Tech Stack
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#projects" className="cursor-pointer">
                    <span className="mr-2 text-emerald-400 font-roboto-mono">
                      02.
                    </span>
                    A Few Projects
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white dark:bg-slate-800 shadow-md rounded-md mt-2 right-0 w-40">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex flex-wrap min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-slate-800 max-w-full">
        <main
          id="summary"
          className="min-h-screen flex items-center justify-center w-full"
        >
          <section className="flex gap-4 w-full max-w-3xl flex-col items-center justify-between py-32 md:px-48 px-16 bg-white dark:bg-slate-800 md:items-start max-w-full">
            {/* Summary */}
            <h4 className="text-emerald-400 scroll-m-20 text-xl font-semibold tracking-tight  md:text-left text-center">
              Hello World, I'm
            </h4>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance  md:text-left text-center">
              Lucile
            </h1>
            <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight md:text-left text-center">
              Fullstack Web Developer
            </h1>
            <h1 className="scroll-m-20 tracking-tight leading-8  md:text-left text-center">
              I am a self-taught and bilingual (FR/EN) TypeScript/Node.js
              fullstack web developer with 4 years of experience working in
              agile teams/squads in both start-up and scale-up SaaS (Software as
              a Service) companies. I enjoy creating functional applications
              with clean, testable and maintainable code. I'm proficient with
              modern web technologies and frameworks, and I'm always eager to
              learn new tools and techniques to improve my skills.
            </h1>
            <a href="#tech-stack">
              <Button className="mt-8 bg-emerald-400 hover:bg-emerald-500 text-slate-900 dark:text-slate-100 font-semibold flex items-center gap-2">
                <ArrowDown className="w-4 h-4" />
                Explore My Tech Stack
              </Button>
            </a>
          </section>
        </main>

        {/* About Section */}
        <section
          id="tech-stack"
          className="flex w-full min-h-screen items-center justify-center bg-white font-sans dark:bg-slate-900 max-w-full"
        >
          <div className="flex gap-4 w-full max-w-3xl flex-col items-center justify-between py-32 md:px-48 px-16 dark:bg-slate-900 md:items-start max-w-full">
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight text-emerald-400 md:text-left text-center">
              <span className="text-emerald-400 font-roboto-mono mr-2">
                02.
              </span>
              My Tech Stack
            </h2>
            {/* Technologies */}
            <div className="flex flex-wrap flex-col gap-8 justify-center md:justify-start justify-center">
              <h1 className="scroll-m-20 tracking-tight leading-8  md:text-left text-center">
                Here are the technologies I've been using:
              </h1>
              {/* Languages */}
              <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                <span className="flex items-center">Languages</span>
                {languages.map((tech) => (
                  <div
                    className="flex flex-col items-center gap-2"
                    key={tech.name}
                  >
                    {tech.icon && tech.icon}
                    <Badge key={tech.name} variant="outline">
                      {tech.name}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Frontend */}
              <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                <span className="flex items-center">Frontend</span>
                {frontTechnologies.map((tech) => (
                  <div
                    className="flex flex-col items-center gap-2"
                    key={tech.name}
                  >
                    {tech.icon && tech.icon}
                    <Badge key={tech.name} variant="outline">
                      {tech.name}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Backend */}
              <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                <span className="flex items-center">Backend</span>
                {backTechnologies.map((tech) => (
                  <div
                    className="flex flex-col items-center gap-2"
                    key={tech.name}
                  >
                    {tech.icon && tech.icon}
                    <Badge key={tech.name} variant="outline">
                      {tech.name}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Databases */}
              <div className="flex flex-wrap gap-2 md:justify-start justify-center">
                <span className="flex items-center">Databases</span>
                {databaseTechnologies.map((tech) => (
                  <div
                    className="flex flex-col items-center gap-2"
                    key={tech.name}
                  >
                    {tech.icon && tech.icon}
                    <Badge key={tech.name} variant="outline">
                      {tech.name}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Tools */}
              <div className="flex  flex-wrap gap-2 md:justify-start justify-center">
                <span className="flex items-center">Tools</span>
                {tools.map((tech) => (
                  <div
                    className="flex gap-4 flex-col items-center gap-2"
                    key={tech.name}
                  >
                    {tech.icon && tech.icon}
                    <Badge key={tech.name} variant="outline">
                      {tech.name}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
            <a href="#projects">
              <Button className="mt-8 bg-emerald-400 hover:bg-emerald-500 text-slate-900 dark:text-slate-100 font-semibold flex items-center gap-2">
                <ArrowDown className="w-4 h-4" />
                View My Projects
              </Button>
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="flex w-full min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-slate-800 max-w-full"
        >
          <div className="flex gap-4 w-full max-w-6xl flex-col items-center justify-start py-32 md:px-48 px-16 bg-white dark:bg-slate-800 md:items-start max-w-full">
            <h2 className="scroll-m-20 text-3xl font-bold tracking-tight text-emerald-400 md:text-left text-center">
              <span className="text-emerald-400 font-roboto-mono mr-2">
                03.
              </span>{" "}
              A Few Projects
            </h2>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full mt-8">
              {projectCards.map((card, index) => (
                <div
                  key={index}
                  className="flex flex-col w-80 min-h-56 p-4 bg-slate-200 dark:bg-slate-700 rounded-lg border border-slate-300 dark:border-slate-600 hover:shadow-lg transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                    <a
                      href={card.links[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-500 transition-colors"
                    >
                      {card.title}
                    </a>
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 mb-3 w-11/12">
                    {card.description}
                  </p>
                  <h5 className="text-xs font-mono text-slate-600 dark:text-slate-400 mb-auto">
                    {card.technologies}
                  </h5>
                  <div className="flex gap-3 mt-4">
                    <a
                      href={card.links[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-500 transition-colors"
                    >
                      <SiGithub className="w-5 h-5" />
                    </a>
                    {card.links[1] && (
                      <a
                        href={card.links[1]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-500 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
