import React, { useState } from "react";
import { FaFigma } from "react-icons/fa6"

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  fa6
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
} from "react-icons/si";

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// Counters
import CountUp from "react-countup";

// Data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "UI/UX Designer",
        icons: [
          // <FaHtml5 key="html" />,
          // <FaCss3 key="css" />,
          // <FaJs key="js" />,
          // <FaReact key="react" />,
          // <SiNextdotjs key="nextjs" />,
          // <SiFramer key="framer" />,
          <FaFigma key="figma" />,
          <FaWordpress key="wordpress" />,
        ],
      },
    ],
  },
  {
    title: "learning",
    info: [
      { title: "Ecommerce Website Development", stage: "14-12-2022" },
      { title: "E-Commerce Store: Custom Theme, Payments integration", stage: "2023" },
      { title: "Master of all MS Excel Macros And basic VBA", stage: "2023" },
      { title: "Figma for Beginners by Figma", stage: "2025" },
      { title: "Level Up with Figma", stage: "2025" },
      { title: "Figma UI UX Design Essentials", stage: "2025" },
      { title: "Design System Bootcapm", stage: "2025" },
      { title: "UI/UX Product Design Bootcamp", stage: "2025" },
      { title: "Complete Figma Course: Web & Mobile Projects from Scratch", stage: "2025" },
    ],
  },
  {
    title: "experience",
    info: [
      { title: "UI/UX Designer", stage: "2025" },
    ],
  },
  {
    title: "Education",
    info: [
      { title: "Bachelor of Management Studies - University of Mumbai", stage: "2022-25" },
      { title: "Higher Secondary Certificate - N.E. Jr Collge College", stage: "2020-2022" },
      { title: "Secondary School Certificate - R.G.H.H.S", stage: "2020" },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Get <span className="text-accent">Know</span> Me!
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I&apos;m a UI/UX Designer with a passion for crafting visually stunning and user-centric experiences. I bring ideas to life through intuitive design and seamless interactions. Explore my work in the Work section!
          </motion.p>
          {/* Counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={0} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Year of experience
                </div>
              </div>
              {/* Skills */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={7} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Skills
                </div>
              </div> */}
              {/* Projects */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                    : ""
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl text-white">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
