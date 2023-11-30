import React from 'react'

function SectionOne() {
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
        
        <div className='text-center p-4 rounded-xl service-item'>
          
                <h3 className='text-4xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
        </div>

        <div className='text-center p-4 rounded-xl service-item'>
       
       
        <h3 className='text-4xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
        </div>

        <div className='text-center p-4 rounded-xl service-item'>
       
        <h3 className='text-4xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
        </div>

        <div className='text-center p-4 rounded-xl service-item'>
        
        <h3 className='text-4xl font-semibold mb-2 dark:text-white text-black'>Service 1</h3>
                <p className='dark:text-white text-black'>Description lorem ipmsum falan</p>
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