import React from 'react';
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import pro1 from '../../img/pro1.png';
import pro2 from '../../img/pro2.png';
import pro3 from '../../img/pro3.png';
import pro4 from '../../img/pro4.png';
import pro5 from '../../img/pro5.png';
import pro6 from '../../img/pro6.png';
import pro7 from '../../img/pro7.png';
import pro8 from '../../img/pro8.png';
import 'swiper/css';

const Portfolio = () => {
  return (
    <div className="portfolio" id='Portfolio'>

      {/* heading */}
      <span>Recent Project</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
      >
        <SwiperSlide>
          <img src={pro1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pro8} alt="" />
        </SwiperSlide>



      </Swiper>
    </div>
  )
}

export default Portfolio