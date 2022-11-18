import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import '../css/Sliders.css';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { RouterLink } from '../constantes/RoutersLinks';

const Sliders = ({ listImg }) => {

   let link = window.location.pathname;
   console.log(link);
   return (
      <div className='content-slider'>
         <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            spaceBetween={50}
            slidesPerView={1}
            navigation={true}
            pagination={{
               clickable: true,
            }}
         >
            {listImg.map((item, index) => (
               <SwiperSlide key={index}>
                  <img className={`img-slider`} src={item.imgSlider} alt="" />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   );
};

export default Sliders;