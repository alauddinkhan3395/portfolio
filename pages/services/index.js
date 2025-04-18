// Component
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circle from "../../components/Circles";


// Framer Motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
// import ServiceSlider from "../../components/serviceSlider";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circle />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* Text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
            variants={fadeIn('up', 0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="h2 xl:mt-8">My Services <span className="text-accent">.</span></motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className="mb-4 max-w-[400px] mx-auto lg:mx-0">I specialize in crafting seamless and engaging website and mobile design, ensuring exceptional user experiences and contributing to the success of your product.</motion.p>
          </div>
          {/* Slider */}
          <motion.div 
           variants={fadeIn('down', 0.6)} 
           initial="hidden" 
           animate="show" 
           exit="hidden" 
          className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
