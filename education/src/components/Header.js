import React, {useEffect, useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../myswiper.css';
import anime from 'animejs/lib/anime.es.js';
import Menu from './Menu';

function Header() {

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  const slideref1 = useRef(null);
  const slideref2 = useRef(null);
  const slideref3 = useRef(null);

  const [scrolling, setScorlling] = useState(false);

  useEffect(()=>{
    const handleScroll = ()=>
    {
      const headerHeight =document.querySelector('header').offsetHeight;

      if(window.scrollY > headerHeight)
      {
        setScorlling(true);
      }
      else
      {
        setScorlling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return()=>{
      window.removeEventListener('scroll', handleScroll);
    }


  },[]);

  const HeaderClassName= scrolling
  ?'fixed bg-primary-light dark:bg-primary-dark text-second-light dark:text-second-dark inset-x-0 top-0 z-50 py-2 border-b border-slate-600 shadow-2xl'
  :'absolute inset-x-0 top-0 z-50 py-2 border-b border-slate-600 shadow-2xl';

  

  useEffect(()=>{
    const animateImage= ()=>{
      anime({
        targets: [imageRef1.current,imageRef2.current,imageRef3.current,],
        translateX:  ['0%', '25%'],
        translateY:  ['5%', '15%'],
        duration: 4000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };
    animateImage();

  },[]);

  useEffect(()=>{
    const animateImage2= ()=>{
      anime({
        targets: [slideref1.current, slideref2.current, slideref3.current,],
        scale:  [1, 1.3],
        duration: 8000,
        easing:'linear',
        direction: 'alternate',
        loop:true,
      });
    };
    animateImage2();

  },[]);


  return (
    <div className='relative'>
      <header className={HeaderClassName}>

        <div className='py-4'>

        <Menu></Menu>


        </div>


      </header>

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
          
          <section className='relative h-full overflow-hidden'>
            <div ref={slideref1} className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/1.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='flex flex-col lg:flex-row justify-between items-center py-28 px-5 relative z-10'>
              <div className='lg:w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>1lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='lg:w-1/2'>
                <img ref={imageRef1} src='img/slider/1.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>

        <SwiperSlide>
          
          <section className='relative h-full overflow-hidden'>
            <div ref={slideref2} className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/slider2.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='flex flex-col lg:flex-row justify-between items-center py-28 px-5 relative z-10'>
            <div className='lg:w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='lg:w-1/2'>
                <img ref={imageRef2} src='img/slider/2.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>

        <SwiperSlide>
          
          <section className='relative h-full overflow-hidden'>
            <div ref={slideref3} className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/slider1.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='flex flex-col lg:flex-row justify-between items-center py-28 px-5 relative z-10'>
            <div className='lg:w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='lg:w-1/2'>
                <img ref={imageRef3} s src='img/slider/3.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>
      
       
      </Swiper>
    </div>
  )
}

export default Header