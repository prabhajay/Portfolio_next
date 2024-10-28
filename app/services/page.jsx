"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Front end developer",
    language: "React, HTML5,CSS3, Javascript, next.js",
  },
  {
    num: "02",
    title: "Back end developer",
    language: "Node.js,Javascript, Express.js,C#",
  },
  {
    num: "03",
    title: "Full stack development",
    language: "MongoDB,MySQL,PostgraSQL Front end and Back end",
  },
  {
    num: "04",
    title: "MERN developer",
    language: "MongoDB,Express,React,and Node.js. ",
  },
];
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.5, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.language}
                    className="w-[70px] h-[70px] 
               rounded-full bg-white
               group-hover:bg-accent transition-all duration-500 
               flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 ">
                  {service.title}
                </h2>
                <p className="text-white/60 font-semibold">
                  {service.language}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
export default Services;
