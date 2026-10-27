"use client";
import { classname } from "@/lib/utils";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconKeyboard,
  IconPuzzle,
  IconCloudBolt,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { StarsBackground } from "@/app/components/ui/StarsBackground";
import { WobbleCard } from "@/app/components/ui/WobbleCard";
import { TextHoverEffect } from "@/app/components/ui/TextHoverEffect";
import { ReactElement } from "react";
import { JSX } from "react";

type Project = {
  title: string,
  description: ReactElement,
  slug?: string,
  href?: string,
  header: ReactElement,
  className: string,
  img?: string,
  offset?: number,
  content: any, // TODO: select actual type
  skills: string[]
}

export function Projects() {
  return (
    <div className="relative flex flex-col items-center justify-start min-h-screen overflow-hidden">
      <StarsBackground
        starDensity={0.004}
        twinkleProbability={0.7}
        atHome={false}
      />
      <div className="mx-auto max-w-7xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="w-full">
            <TextHoverEffect
              align="center"
              className="text-hero-2"
              segments={[
                { text: "Projects", color: "#3364D7" },
              ]}
            />
          </div>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl px-12 mx-auto w-full">
        {projects.map((item, i) => (
          <a
            className={item.slug || item.href ? 
              "group rounded-3xl bg-zinc-950/70 shadow-sm transition duration-300" :
              "group rounded-3xl bg-zinc-950/70 shadow-sm transition duration-300 cursor-default"}
            href={item.href ? item.href : item.slug ? `/projects/${item.slug}` : "#"}
            key={item.title}
          >
          <WobbleCard
            key={i}
            className={classname("[&>p:text-lg]", item.className)}
          >
            <div className="max-w-xs">
              <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                {item.title}
              </h2>
              <p className="mt-4 text-left text-base/6 text-neutral-100">
                {item.description}
              </p>
            </div>
            {item.img &&
            <img
              src={item.img}
              className={`absolute max-w-1/2 -z-10 -right-4 lg:-right-[10%] filter -bottom-[30%] object-contain rounded-2xl` + ((item.slug || item.href) ? "" : " grayscale")}
            />}
          </WobbleCard>
          </a>
        ))}
      </div>
    </div>
  );
}

const BaseSkeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black" />
)

const projects: Project[] = [
  {
    title: "Autonomous maze mapping robot",
    description: (
      <span className="text-sm">
        Mapping, localization, and path planning for a LiDAR-equipped, non-holonomic robot.
      </span>
    ),
    header: <BaseSkeleton />,
    className: "md:col-span-2",
    // slug: "maze",
    content: () => {
      return (
        <div className="flex flex-col-2">
          <p>
            The problem:
            A non-holonomic robot has to plan smooth, drivable paths, and it
            has to do that in a maze it has never seen. Without a map and an estimate
            of its own position, it must decide where to go.
            What I built:
            I built a pipeline as ROS 2 nodes: LiDAR scans feed a mapping and
            localizatoin stack, and a path finder turns the resulting map into
            paths the robot can drive. The same code ran across mazes of different
            sizes successfully.
          </p>
        </div>
      )
    },
    skills: ["Python", "ROS 2", "Bash", "LiDAR"],
  },
  {
    title: "Shell and interpreter in C and Java",
    description: (
      <span className="text-sm">
        A command-line shell and programming language interpreter built purely in C, then rebuilt using Java.
      </span>
    ),
    header: <BaseSkeleton />,
    className: "md:col-span-1",
    img: "/noise.webp",
    content: () => { // TODO: add content
      return (
        <p>
          temp
        </p>
      )
    },
    skills: ["C", "Linux", "Java"] // TODO: Add skills
  },
  {
    title: "WordLess",
    description: (
      <span className="text-sm">
        An interactive word game that saves your progress in the browser.
      </span>
    ),
    header: <BaseSkeleton />,
    className: "md:col-span-2",
    href: "https://haqer-man.github.io/WordLess/",
    img: "/wordless-preview.webp",
    offset: -5,
    content: () => { // TODO: add content
      return (
        <>
        temp
        </>
      )
    },
    skills: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "Sudontku",
    description: (
      <span className="text-sm">
        A Python rebuild of the puzzle game Sudoku, documented with PyDocs.
      </span>
    ),
    header: <BaseSkeleton />,
    className: "md:col-span-1",
    content: () => {
      return (
        <>
          temp
        </>
      )
    },
    skills: ["Python", "PyDocs", "Git"],
  },
  {
    title: "Weather prediction model",
    description: (
      <span className="text-sm">
        A linear regression machine learning model that predicts weather conditions for Fresno, CA.
      </span>
    ),
    header: <BaseSkeleton />, // TODO: Make this be a bunch of clouds that rain when hovered over
    className: "md:col-span-2",
    content: () => {
      return (
        <>
          temp
        </>
      )
    },
    skills: ["Python", "pandas", "NumPy", "Matplotlib"]
  },
];