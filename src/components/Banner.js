import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full  h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div>
          <img loading="lazy" src="https://links.papareact.com/gi1" alt="xd" />
        </div>

        <div>
          <img loading="lazy" src="https://links.papareact.com/6ff" alt="xd" />
        </div>

        <div>
          <img loading="lazy" src="https://links.papareact.com/7ma" alt="xd" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
