export interface Link {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  period?: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string;
  highlights?: string[];
  links?: Link[];
}

export const profile = {
  name: "Zachary Burgoon",
  headline: "Software engineer who likes systems, robots, and security.",
  bio: "I'm a Computer Science and Robotics Engineering student at Worcester Polytechnic Institute (BS/MS, May 2028). I build things close to the machine: shells in C, SLAM on a LiDAR robot, and the occasional repaired pinball machine. I'm looking for software engineering internships in systems, robotics, or security.",
  github: "https://github.com/haqer-man",
  linkedin: "https://linkedin.com/in/zburgoon",
  resume: "/Zachary_Burgoon_Resume.pdf", // put the PDF in /public
};

export const projects: Project[] = [
  {
    id: "slam",
    title: "Autonomous maze mapping robot",
    summary:
      "Mapping, localization, and path planning for a LiDAR-equipped, non-holonomic robot.",
    period: "May 2026",
    role: "Team project (Unified Robotics IV). I implemented mapping, localization, and path planning.",
    stack: ["Python", "ROS 2", "Bash", "LiDAR"],
    problem:
      "A robot that can't turn in place has to plan smooth, drivable paths, and it has to do that in a maze it has never seen. Without a map and an estimate of its own position, it can't decide where to go.",
    solution:
      "I built the pipeline as ROS 2 nodes: LiDAR scans feed a mapping and localization stack, and a planner turns the resulting map into paths the robot's drive constraints allow. The same code ran across mazes of different sizes without changes.",
    highlights: [
      "Completed SLAM in mazes of varying sizes",
      "Planner respects non-holonomic motion limits",
    ],
  },
  {
    id: "c-shell",
    title: "Shell and interpreter in C",
    summary: "A command-line shell built on raw POSIX process APIs.",
    period: "July 2026",
    role: "Solo project. I designed and wrote all of it.",
    stack: ["C", "POSIX", "Linux"],
    problem:
      "Typing a command into a terminal feels simple, but it hides process creation, program loading, and file descriptor handling. I wanted to understand those pieces by building them instead of using them.",
    solution:
      "I wrote a shell that parses input, creates child processes, runs commands, and handles I/O redirection by rewiring file descriptors, with manual memory management throughout.",
    highlights: ["Process creation and execution", "I/O redirection"],
  },
  {
    id: "java-shell",
    title: "Shell and interpreter in Java",
    summary: "The same shell, redesigned with object-oriented structure.",
    period: "July 2026",
    role: "Solo project. I designed and wrote all of it.",
    stack: ["Java", "OOP", "JUnit"],
    problem:
      "My C shell worked, but its structure was tied to the language. I wanted to see how the same problem looks when it's modeled with classes and a proper language-processing pipeline.",
    solution:
      "I reimplemented the shell in Java, separating lexing, parsing, and execution into distinct objects. Rebuilding it a second time made the design tradeoffs between the two languages concrete.",
    highlights: ["Object-oriented design", "Language-processing concepts"],
  },
  {
    id: "wordless",
    title: "WordLess",
    summary: "An interactive word game that saves your progress in the browser.",
    period: "Sept. 2022 to Sept. 2025",
    role: "Solo project. I built and hosted it.",
    stack: ["JavaScript", "HTML", "CSS"],
    problem:
      "Browser games are easy to start and easy to lose. Close the tab and your progress is gone, which makes players less likely to come back.",
    solution:
      "I built the game as a static web app and used the browser's local storage to track progress between sessions. It's hosted on GitHub Pages, so anyone can play it from a link.",
    highlights: ["Persistent progress with local storage", "Deployed on GitHub Pages"],
    links: [{ label: "Play it", href: "https://haqer-man.github.io/WordLess/" }],
  },
  {
    id: "sudoku",
    title: "Sudoku",
    summary: "A Python rebuild of the puzzle game, documented with PyDoc.",
    role: "Solo project.",
    stack: ["Python", "PyDoc", "GitHub"],
    problem:
      "I wanted a project where the code was written to be read, not only to run.",
    solution:
      "I rebuilt Sudoku in Python, documented every module with PyDoc, and published it on GitHub.",
  },
  {
    id: "weather",
    title: "Weather prediction model",
    summary: "A machine learning model that predicts conditions for Fresno, CA.",
    role: "Solo project.",
    stack: ["Python", "pandas", "NumPy", "Matplotlib"],
    problem:
      "Weather depends on many measurements at once, and no single reading tells you what tomorrow will look like.",
    solution:
      "I trained a model on a set of input data points to predict conditions for Fresno, using pandas and NumPy to prepare the data and Matplotlib to inspect it.",
  },
];

export const experience = [
  {
    role: "IT Specialist Intern",
    org: "Densification, Inc.",
    when: "Jun to Aug 2026",
    points: [
      "Researched map APIs and database querying approaches, then drafted a requirements and API pricing document for a location-based job search feature.",
      "Managed Microsoft accounts, subscriptions, and storage policies; configured and deployed new employee devices.",
    ],
  },
  {
    role: "Freelance Arcade Repair Technician",
    org: "Self-employed",
    when: "Summer 2026",
    points: [
      "Diagnosed electrical, mechanical, and control faults in antique pinball machines and jukeboxes and restored them to working order.",
    ],
  },
  {
    role: "President, Cyber Security Activity",
    org: "Flint Hill School",
    when: "Aug 2023 to Jun 2024",
    points: [
      "Led events, competitions, and operations for a for-credit cybersecurity club, and mentored competition teams.",
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "C/C++", "JavaScript", "HTML/CSS", "SQL", "Go", "Bash", "MATLAB"],
  "Tools and frameworks": ["Git", "Docker", "Linux", "Node.js", "JUnit", "ROS 2"],
  Libraries: ["pandas", "NumPy", "Matplotlib", "OpenCV", "Dynamixel SDK"],
  Security: ["Burp Suite", "Nmap", "Metasploit", "Autopsy", "Ghidra", "Packet Tracer"],
};

export const credentials = [
  "GIAC Security Essentials (GSEC), SANS Institute",
  "GIAC Foundational Cybersecurity Technologies, SANS Institute",
  "Regional Cyber Defender, VirginiaCode",
  "National Cyber Scholar, CyberStart America",
  "2nd place, Networking with Cisco Packet Tracer, CyberPatriot XV Platinum",
];