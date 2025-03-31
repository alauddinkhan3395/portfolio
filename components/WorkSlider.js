// data
export const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'Project One',
          path: '/Solar.webp',
          link: 'https://www.figma.com/design/7MvRdUBHR1tP1GxhiZQI8V/Solar-Service-App?node-id=0-1&t=ZqAGNoGvaxP0z5ne-1',
        },
        {
          title: 'Project Two',
          path: '/Frame.png',
          link: 'https://www.figma.com/design/NagldDvoSR3Pi1awnqUZnP/PROJECT-1?t=4W6nkxj2C2yZCBto-1',
        },
        {
          title: 'Project Three',
          path: '/DASHBOARD.png',
          link: 'https://www.figma.com/design/Dem3NE3XPBi9xm496BNh9J/Untitled?t=4W6nkxj2C2yZCBto-1',
        },
        {
          title: 'Project Four',
          path: '/FRAME.png',
          link: 'https://www.figma.com/design/HweTCjRNq3wxrFq9Z89bQG/PROJECT-2?t=4W6nkxj2C2yZCBto-1',
        },
      ],
    },
    {
      images: [
        {
          title: 'Project Five',
          path: '/thumb4.jpg',
          link: '#',
        },
        {
          title: 'Project Six',
          path: '/thumb1.jpg',
          link: '#',
        },
        {
          title: 'Project Seven',
          path: '/thumb2.jpg',
          link: '#',
        },
        {
          title: 'Project Eight',
          path: '/thumb3.jpg',
          link: '#',
        },
      ],
    },
  ],
};

// import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from "swiper";

// Icons
import { BsArrowRight } from 'react-icons/bs';

// Next.js Image & Link
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
            {slide.images.map((image, index) => (
              <Link href={image.link} key={index} target="_blank" rel="noopener noreferrer">
                <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                  {/* Image */}
                  <Image src={image.path} width={500} height={300} alt={image.title} loading="lazy" />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                  {/* Title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                      {/* Title Part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* Title Part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* Icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
