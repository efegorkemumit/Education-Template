import React from 'react'

function ProductSection() {
  return (
    <div>
        <section className='py-10'>

            <div className='mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>

                <article className='rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:scale-105 duration-300 hover:duration-1000'>

                <a href='#' className='bg-black'>
                    <img className='rounded-2xl ' src='img/courseimages/1.jpg'/>
                </a>

          

                <div className='mt-2 text-center'>
                              <h2 className='text-slate-700 text-xl font-lora font-semibold'>Social media Course</h2>
                              <p className='text-sm font-roboto'>Turkey/ Istanbul</p>
                </div>

                <div className='text-center mb-6'>
                    <p className='text-lg text-red-700 font-bold'>$500</p>


                </div>

                <div className='flex items-center space-x-2 rounded-lg px-9 bg-primary-dark text-white  py-2'>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>

                    <button> Add to cart</button>




                    </div>



                </article>


            </div>

         
            
        </section>


    </div>
  )
}

export default ProductSection