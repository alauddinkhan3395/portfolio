import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";
// import Avatar from "../../components/Avatar";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development [ Frontend ]',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      // {
      //   title: 'UI/UX Design',
      //   icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      // },
    ],
  },
  {
    title: 'learning',
    info: [
      {
        title: 'Ecommerce Website Development',
        stage: ' 14-12-2022',
      },
      {
        title: '"E-Commerce Store: Custom Theme, Payments integration"',
        stage: '2023',
      },
      {
        title: 'Master of all MS Excel Macros And basic VBA',
        stage: '2023',
      },
      {
        title: 'CSS, JavaScript And Python Complete Course',
        stage: '2024',
      },
      {
        title: 'Next.Js Framer Motion Complete Course',
        stage: 'Currently Learning',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      // {
      //   title: 'UX/UI Designer - XYZ Company',
      //   stage: '2012 - 2023',
      // },
      {
        title: 'Web Developer [ Frontend ]',
        stage: '2024 - Fresher',
      },
      // {
      //   title: 'Intern - DEF Corporation',
      //   stage: '2008 - 2010',
      // },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Web Development - Self-taught',
        stage: '2024',
      },
      {
        title: 'Bachelor of Management Studies - University of Mumbai',
        stage: '2022-25',
      },
      {
        title: 'Higher Secondary Certificate - N.E. Jr Collge College',
        stage: '2020-2022',
      },
      {
        title: 'Secondary School Certificate - R.G.H.H.S',
        stage: '2020',
      },
    ],
  },
];

// Components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// Framer motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

// Counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0)
  console.log(index);
  return (  
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      {/* Avatar img  */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        {/** Text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2">Get <span className="text-accent">Know</span> Me !</motion.h2>
          <motion.p 
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">I'm a Frontend Focused Web Developer building and managing the Front-end of Websites that leads to the success of the overall product. Check out some of my work in the Work section.</motion.p>
          {/** Counters */}
          <motion.div 
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 xl:gap-x-6">
              {/** Experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={0} duration={5}  /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Year of experience</div>
              </div>
              {/** Clients*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={7} duration={5}  /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Skills</div>
              </div>
              {/** Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={2} duration={5}  /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Finished Projects</div>
              </div>
              {/** Awards */}
              {/* <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={0} duration={5}  /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">Winning Awards</div>
              </div> */}
            </div>
          </motion.div>
        </div>
        {/** Info */}
        <motion.div 
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div 
              key={itemIndex} 
              className={`${
                index === itemIndex && 
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              onClick={() => setIndex(itemIndex)}
              >
                {item.title}
                </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
          {aboutData[index].info.map((item, itemIndex)=>{
            return (
            <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
              {/** title */}
              <div className="font-light mb-2 md:mb-0">{item.title}</div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {/** icons */}
              {item.icons?.map((icon, itemIndex)=> {
                return <div className="text-2xl text-white">{icon}</div>
              })}
              </div>
            </div>
          );
          })}
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
