import React, {useEffect,  useState} from 'react'
import anime from 'animejs/lib/anime.es.js';

function Partwo() {


    useEffect(()=>{

        let animationsPlayed = false;

        const handleScroll= ()=>{

            if(animationsPlayed){
                return;
            }

        const titleElement = document.querySelector('.title-animation');
        const cardselements = document.querySelectorAll('.card-animation');

        const titleOffset = titleElement.getBoundingClientRect().top;
        const cardsOffset = cardselements[0].getBoundingClientRect().top;

        const TriggerOffset = window.innerHeight * 0.7;

        if(titleOffset < TriggerOffset){
            anime({
                targets: '.title-animation',
                translateY: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 800,
                delay: anime.stagger(200),
                complete:()=>
                {
                    animationsPlayed= true;
                }
              });

        }

        if(cardsOffset < TriggerOffset){

            anime({
                targets: '.card-animation',
                translateX: [-50, 0],
                opacity: [0, 1],
                easing: 'easeInOutQuad',
                duration: 800,
                delay: anime.stagger(200, { start: 300 }),
                complete:()=>
                {
                    animationsPlayed= true;
                }
              });

        }
        
        };


        window.addEventListener('scroll', handleScroll);

        return () =>{
            window.removeEventListener('scroll', handleScroll);

        };
       
      },[]);
  return (
    <div>
        <section className='relative'>
            <div className='relative pt-72 pb-32 flex content-center items-center justify-center'>
                <div className='absolute top-0 w-full h-full bg-cover bg-center' style={{backgroundImage:'url("img/slider/slider2.jpg")'}}>
                <span className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></span>
                <span className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></span>

                <div className='container relative mx-auto'>
                    <div className='items-center flex flex-wrap'>
                        <div className='w-full lg:w-6-/12 px-4  ml-auto mr-auto text-center  pt-32'>

                            <h1 className='text-white font-semibold text-5xl title-animation'>lorem ipsum</h1>

                            <p className='mt-4 text-lg text-white' >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            </p>


                        </div>


                    </div>


                </div>




                </div>



            </div>

            <section className='pb-10 -mt-24 bg-white dark:bg-primary-dark'>
                <div className='container mx-auto px-4'>
                    <div className='flex flex-wrap'>

                        <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center card-animation'>
                            <div className='relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg'>
                                <div className='p-3 text-center items-center justify-center inline-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 p-2 rounded-full text-center justify-center items-center bg-slate-900 text-white">
  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg></div>


                                <h6 className='text-xl font-lora font-semibold p-2'>Lorem ipsum</h6>
                                <p className='text-sm font-roboto  p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>

                        </div>

                        <div className='lg:pt-4 pt-6 w-full md:w-4/12 px-4 text-center card-animation'>
                            <div className='relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg'>
                                <div className='p-3 text-center items-center justify-center inline-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 p-2 rounded-full text-center justify-center items-center bg-slate-900 text-white">
  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg></div>


                                <h6 className='text-xl font-lora font-semibold p-2'>Lorem ipsum</h6>
                                <p className='text-sm font-roboto  p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>

                        </div>

                        <div className='lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center card-animation'>
                            <div className='relative flex flex-col bg-white w-full mb-8 shadow-lg rounded-lg'>
                                <div className='p-3 text-center items-center justify-center inline-flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-16 h-16 p-2 rounded-full text-center justify-center items-center bg-slate-900 text-white">
  <path stroke-linecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
</svg></div>


                                <h6 className='text-xl font-lora font-semibold p-2'>Lorem ipsum</h6>
                                <p className='text-sm font-roboto  p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                            </div>

                        </div>


                    </div>
                </div>

            </section>


        </section>


        
    </div>
  )
}

export default Partwo