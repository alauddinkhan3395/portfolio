// testimonial data
export const TestimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Minimal design, incredibly well documented, and an absolute pleasure to use! The customer support is one of the absolute best I have ever had the pleasure of interacting with. Quick, courteous, and extremely helpful! Thanks a lot for your hard work!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Ave Smith',
    position: 'Customer',
    message:
      'Loved the template design, documentation, customizability and the customer support from Marketify team! I am a noob in programming with very little knowledge about coding but the Marketify team helped me to launch my resume website successfully.',
  },
  {
    image: '/t-avt-3.png',
    name: 'Albert Kennedy',
    position: 'Customer',
    message:
      'I rarely like to write reviews, but the Marketify team truly deserve a standing ovation for their customer support, customisation and most importantly is professionalism. Many thanks once again for everything and hope that I get to deal with you again in the near future!',
  },
];

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";


// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import {Navigation, Pagination } from "swiper";

//Icons
import { FaQuoteLeft } from 'react-icons/fa';

// Image
import Image from 'next/image';


const TestimonialSlider = () => {
  return (
    <Swiper 
     navigation={true}
          pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {
        TestimonialData.map((person, index) => {
          return (
          <SwiperSlide key={index}>
           <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* Avatar, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* Avatar */}
                <div className="mb-2 mx-auto">
                  <Image src={person.image} width={100} height={100} alt="" />
                </div>
                {/* Name */}
                <div className="text-lg">{person.name}</div>
                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
              </div>
            </div>
            {/* Quote & Message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* Quote Icon */}
              <div className="mb-4"><FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" /></div>
              {/* Message */}
              <div className="xl:text-lg text-center md:text-left">{person.message}</div>
            </div>
           </div>
          </SwiperSlide>
          );
        })}
      </Swiper>

  );
};

export default TestimonialSlider;
