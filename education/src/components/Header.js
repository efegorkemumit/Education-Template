import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../myswiper.css';


function Header() {
  return (
    <div>

<Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src='img/slider/1.jpg'></img>


        </SwiperSlide>
        <SwiperSlide>
            <img src='img/slider/2.jpg'></img>


        </SwiperSlide>
        <SwiperSlide>
            <img src='img/slider/3.jpg'></img>


        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default Header