import React, {useEffect,  useState} from 'react'
import anime from 'animejs/lib/anime.es.js';

function Footer() {

  
  useEffect(()=>{

    let animationsPlayed = false;

    const handleScroll= ()=>{

        if(animationsPlayed){
            return;
        }

    const titleElement = document.querySelectorAll('.title-animation-footer');
    const cardselements = document.querySelectorAll('.card-animation-footer');

    const titleOffset = titleElement[0].getBoundingClientRect().top;
    const cardsOffset = cardselements[0].getBoundingClientRect().top;

    const TriggerOffset = window.innerHeight * 0.9;

    if(titleOffset < TriggerOffset){
        anime({
            targets: '.title-animation-footer',
            translateY: [-50, 0],
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

    if(cardsOffset < TriggerOffset){

        anime({
            targets: '.card-animation-footer',
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

    
    <div className='bg-primary-light dark:bg-primary-dark text-white dark:text-second-dark  shadow-2xl'>
     <div className='bg-second-light text-black p-1 bg-opacity-50 text-center'>

        </div>
    <div className='container mx-auto p-8 '>
      <footer className='flex flex-wrap '>

<div className='w-full lg:w-1/4 p-6'>
  <h3 className='text-lg font-semibold mb-4 font-lora title-animation-footer'>About us</h3>
  <p className='card-animation-footer'>Lorem Ipsum t to make a type specimen book typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

</p>

</div>

<div className='w-full lg:w-1/4 p-6'>
  <h3 className='text-lg font-semibold mb-4 font-lora title-animation-footer'>Contact</h3>
<div className='card-animation-footer'>
<p>Address :  Losangeles California Turkey Bişey Street</p>
<p>Youtubeabone@gmail.com</p>
<p>0535 111 222 33</p>
</div>
</div>

<div className='w-full lg:w-1/4 p-6'>
  <h3 className='text-lg font-semibold mb-4 font-lora title-animation-footer'>About us</h3>
<ul className='card-animation-footer'>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
</ul>
</div>


<div className='w-full lg:w-1/4 p-6'>
  <h3 className='text-lg font-semibold mb-4 font-lora title-animation-footer'>About us</h3>
  <ul className='card-animation-footer'>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
<li className='mb-2'>Contact</li>
</ul>
</div>


      </footer>



    </div>

    <div className='bg-second-light text-black p-3 text-center'>
          <p className='text-md font-semibold'>🎄 is simply dummy text of the printing and typesetting industry. Lorem</p>

        </div>
    </div>

    
  )
}

export default Footer