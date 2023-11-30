import React, {useEffect,  useState} from 'react'
import anime from 'animejs/lib/anime.es.js';

function SectionOne() {
    useEffect(()=>{
        const animateImage= ()=>{
          anime({
            targets: '.person',
            innerHTML: [0, 150],
            easing: 'linear',
            round: 1 // Will round the animated value to 1 decimal
          });

          anime({
            targets: '.customers',
            innerHTML: [0, 15000],
            easing: 'linear',
            round: 1 // Will round the animated value to 1 decimal
          });

          anime({
            targets: '.ticket',
            innerHTML: [0, 1500000],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
          });

          anime({
            targets: '.order',
            innerHTML: [0, 9999],
            easing: 'linear',
            round: 10 // Will round the animated value to 1 decimal
          });
        };
        animateImage();
    
      },[]);

  return (
    <section className='relative'>
    <div className='relative pt-96 pb-80 lg:pt-32 lg:pb-32 flex content-center items-center justify-center'>
        <div className='absolute top-0 w-full h-full bg-cover bg-center' style={{backgroundImage:'url("img/slider/slider2.jpg")'}}>
        <span className='absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></span>
        <span className='hidden dark:block absolute top-0 left-0 w-full h-full bg-opacity-70 bg-black'></span>

        <div className='container relative mx-auto'>
            <div className='items-center flex flex-wrap'>
                <div className='w-full lg:w-6-/12 px-4  ml-auto mr-auto text-center  pt-20'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-9 mt-3'>
        
        <div className='text-center p-4 rounded-xl '>
          
                <h3 className='text-4xl font-semibold mb-2 dark:text-white text-white person'> </h3>
                <p className='dark:text-white text-black'>Person</p>
        </div>

        <div className='text-center p-4 rounded-xl '>
       
       
        <h3 className='text-4xl font-semibold mb-2 dark:text-white text-white customers'></h3>
                <p className='dark:text-white text-black'>Customers</p>
        </div>

        <div className='text-center p-4 rounded-xl '>
       
        <h3 className='text-4xl font-semibold mb-2 dark:text-white text-white ticket'></h3>
                <p className='dark:text-white text-black'>Ticket</p>
        </div>

        <div className='text-center p-4 rounded-xl '>
        
        <h3 className='text-4xl font-semibold mb-2 dark:text-white text-white order'></h3>
                <p className='dark:text-white text-black'>Order</p>
        </div>

          
    
    
    </div>

                  
                </div>


            </div>


        </div>




        </div>



    </div>
    </section>
  )
}

export default SectionOne