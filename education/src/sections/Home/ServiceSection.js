import React, {useEffect,  useState} from 'react'
import anime from 'animejs/lib/anime.es.js';
function ServiceSection() {

    useEffect(()=>{
        const animateImage= ()=>{
          anime({
            targets: '.service-item',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: 'easeInOutQuad',
            duration: 800,
            delay: anime.stagger(200, { start: 300 }),
          });
        };
        animateImage();
    
      },[]);


  return (

    <div className='bg-white dark:bg-primary-dark'>
    <div className='container mx-auto p-8'>

    <div className='  p-3 text-center'>
          <p className='text-4xl font-roboto font-semibold uppercase mt-6 mb-20 '>
            <span className='border-b-2 font-extralight  border-gray-800 dark:border-slate-300 text-black dark:text-white'>
            Our services
            </span>
            </p>

        </div>


    <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 mb-9 mt-3'>
        
        <div className='text-center p-4 rounded-xl service-item'>
            <svg className="w-24 h-24 mx-auto p-3 mb-4 text-second-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
            </svg>
                <h3 className='text-xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
        </div>

        <div className='text-center p-4 rounded-xl service-item'>
        <svg className="w-24 h-24 mx-auto p-3 mb-4 text-second-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"  />
            </svg>
            <h3 className='text-xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
        </div>

        <div className='text-center p-4 rounded-xl service-item'>
        <svg className="w-24 h-24 mx-auto p-3 mb-4 text-second-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
            <h3 className='text-xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
        </div>

        <div className='text-center p-4 rounded-xl service-item'>
        <svg className="w-24 h-24 mx-auto p-3 mb-4 text-second-light bg-gray-800 rounded-full hover:scale-125 transition duration-300 hover:duration-1000" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008zm-3 0h.008v.008h-.008v-.008z"  />
            </svg>
            <h3 className='text-xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
        </div>

          
    
    
    </div>

        



    </div>
    </div>
  )
}

export default ServiceSection