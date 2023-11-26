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
          
          <section className='relative h-screen overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/1.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='hidden absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='flex justify-between items-center py-28 px-5 relative z-10'>
              <div className='w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='w-1/2'>
                <img src='img/slider/1.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>

        <SwiperSlide>
          
          <section className='relative h-screen overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/2.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='hidden absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='flex justify-between items-center py-28 px-5 relative z-10'>
            <div className='w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='w-1/2'>
                <img src='img/slider/2.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>

        <SwiperSlide>
          
          <section className='relative h-screen overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/3.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='hidden absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='flex justify-between items-center py-28 px-5 relative z-10'>
            <div className='w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='w-1/2'>
                <img src='img/slider/3.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>
      
       
      </Swiper>
    </div>
  )
}

export default Header