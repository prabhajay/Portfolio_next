"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaAws
} from "react-icons/fa";
import { SiTailwindcss,SiShadcnui, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Lakshmi Prabha",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 403-671-9263",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+",
    },
    {
      fieldName: "Skype",
      fieldValue: "lakshmiprabha_s",
    },
    {
      fieldName: "Email",
      fieldValue: "lakshmi.prbh@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English,Tamil",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  items: [
    {
      company: "Freelance.",
      postion: "Full stack developer",
      duration: "2024-present",
    },
    {
      company: "Eat for Life by Marsha .",
      postion: "Website Developer (Internship)",
      duration: "2022-2023",
    },
    {
      company: "Shifa Company.",
      postion: "Full stack developer",
      duration: "2014-2021",
    },
    {
      company: "AGP College.",
      postion: "Lecture",
      duration: "2009-2014",
    },
    {
      company: "Sirahu Techology.",
      postion: "Web developer",
      duration: "2008-2009",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  items: [
    {
      institution: "Robertson College",
      degree: "Full stack Web developer",
      duration: "2023-2024",
    },
    {
      institution: "CompIT",
      degree: "Node.js courses",
      duration: "2022",
    },
    {
      institution: "PSR engineering College",
      degree: "Bachelor of computer science and engineering",
      duration: "2004-2007",
    },
    {
      institution: "ANJA Polytechnic college",
      degree: "Diploma in computer Technology",
      duration: "2002-2004",
    },
  ],
};

const skills = {
  title: "My Skills",
  skillList: [
    {
      icon: <FaHtml5 size={50} />,
      name: "HTML 5",
      experience: 9,
    },

    {
      icon: <FaCss3 size={50} />,
      name: "CSS 3",
      experience: 9,
    },
    {
      icon: <FaJs size={50} />,
      name: "JavaScript",
      experience: 9,
    },
    {
      icon: <FaNodeJs size={50} />,
      name: "Node Js",
      experience: 6,
    },
    {
      icon: <FaReact size={50} />,
      name: "React",
      experience: 6,
    },
    {
      icon: <SiNextdotjs size={50} />,
      name: "Next Js",
      experience: 6,
    },
    {
      icon: <SiTailwindcss size={50} />,
      name: "Tailwind CSS",
      experience: 6,
    },
    {
      icon: <FaBootstrap size={50} />,
      name: "Bootstrap",
      experience: 6,
    },
    {
      icon: <FaAws size={50} />,
      name: "AWS",
      experience: 5,
    },
    {
      icon: <SiShadcnui size={50} />,
      name: "Shadcn ui",
      experience: 5,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { delay, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full flex">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                {/*<p className="max-w-[600px] text-white/60mx-auto xl:mx-0">
                  {experience.description}
                </p>*/}
                <ScrollArea className="overflow-auto h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.postion}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full ">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                {/*<p className="max-w-[600px] text-white/60mx-auto xl:mx-0">
                  {education.description}
                </p>*/}
                <ScrollArea className="overflow-auto h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.degree}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.institution}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                {/* <p className="max-w-[600px] text-white/60mx-auto xl:mx-0">
                  {skills.description}
                </p>*/}
                <ScrollArea className="overflow-auto h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p> {skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          {/*<span className="text-accent">{skill.icon}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {skill.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{`${skill.experience} experience`}</p>
                          </div>*/}
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                {/*<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>*/}
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
