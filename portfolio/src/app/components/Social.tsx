import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiPolywork } from "react-icons/si";
import { IoMdMail } from "react-icons/io";

const socials = [
  {
    alt: "github",
    img: <BsGithub className="text-3xl md:text-5xl sm:text-lg" />,
    link: "https://github.com/haqer-man",
  },
  {
    alt: "linkedin",
    img: <BsLinkedin className="text-3xl md:text-5xl sm:text-lg" />,
    link: "https://www.linkedin.com/in/zburgoon",
  },
  {
    alt: "email",
    img: <IoMdMail className="text-3xl md:text-5xl sm:text-lg" />,
    link: "/contact",
    color: "text-cyan-600",
  },
];

export const Social: React.FC = () => {
  return (
    <div className="z-50 flex flex-col animate-fade-in">
      <div className="flex flex-row items-left justify-start mb-4 text-zinc-400 transition duration-700">
        {socials.map((icon, i) => (
          <div
            key={i}
            className="mr-6 cursor-pointer transition duration-300 hover:text-zinc-200"
          >
            <a href={icon.link} target="_blank" rel="noreferrer">
              {icon.img}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};