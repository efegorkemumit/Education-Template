import React, {useEffect, useRef, useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../myswiper.css';
import anime from 'animejs/lib/anime.es.js';

function Header() {

  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  const [theme, setTheme] =useState(
    localStorage.theme === 'dark' || (!('theme' in localStorage) && 
      window.matchMedia('(prefers-color-scheme:dark)').matches) ?'dark' : 'light'


  );

  const toogleTheme = (selectedTheme)=>{
    setTheme(selectedTheme);
    localStorage.theme=selectedTheme;

  }

  useEffect(()=>{

    document.documentElement.classList.toggle('dark', theme==='dark');

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

  },[theme]);
  return (
    <div className='relative'>
      <header className='absolute inset-x-0 top-0 z-50 py-0'>

        <div className='py-4'>

          <div className='container mx-auto flex items-center justify-between px-4'>
               <div className=' text-white text-xl  transition font-bold'>Logo</div>

               <div className='hidden md:flex space-x-4'>
                      <a href='#' className='text-white text-xl hover:underline transition '>Home</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Programming</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Chemical</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Maths</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Physical</a>
                      <a href='#' className='text-white text-xl hover:underline transition '>Contact</a>
               </div>

               <div className='flex items-center space-x-4'>
                     <a href='#' className='text-white text-xl hover:underline transition  '>Login</a>

                     <a onClick={()=>toogleTheme('dark')} className={`text-white text-xl ${theme=='dark'? 'hidden':'block'}`}>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg></a>

<a onClick={()=>toogleTheme('light')}  className={`text-white text-xl ${theme=='light'? 'hidden':'block'}`}>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>

</a>

<a href='#' className='text-white text-xl lg:hidden flex'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
</svg>


                   
  </a>

               </div>

          </div>


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
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/1.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-40 bg-black'></div>
            <div className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='flex justify-between items-center py-28 px-5 relative z-10'>
              <div className='w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>1lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='w-1/2'>
                <img ref={imageRef1} src='img/slider/1.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>

        <SwiperSlide>
          
          <section className='relative h-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/2.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='flex justify-between items-center py-28 px-5 relative z-10'>
            <div className='w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='w-1/2'>
                <img ref={imageRef2} src='img/slider/2.png' className='w-full h-auto'/>
              </div>


            </div>



          </section>



        </SwiperSlide>

        <SwiperSlide>
          
          <section className='relative h-full overflow-hidden'>
            <div className='absolute top-0 left-0 w-full h-full bg-cover bg-center'  style={{backgroundImage:'url("img/slider/3.jpg")'}}></div>
            <div className='absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black'></div>
            <div className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></div>
            <div className='flex justify-between items-center py-28 px-5 relative z-10'>
            <div className='w-1/2 space-y-6'>
                <h2 className='uppercase text-3xl lg:text-6xl font-poppins font-semibold text-white'>lorem ipmsum title</h2>
                <h3 className='text-lg lg:text-xl font-roboto text-yellow-400'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </h3>
                <p className='text-sm font-lora text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>
              </div>
              <div className='w-1/2'>
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