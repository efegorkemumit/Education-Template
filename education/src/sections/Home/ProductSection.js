import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ProductCard from '../../components/ProductCard';
const productData=[

    {id:1, title:'Product 1', images:'img/courseimages/1.jpg'},
    {id:2, title:'Product 1', images:'img/courseimages/2.jpg'},
    {id:3, title:'Product 1', images:'img/courseimages/3.jpg'},
    {id:4, title:'Product 1', images:'img/courseimages/4.jpg'},
    {id:5, title:'Product 1', images:'img/courseimages/5.jpg'},
    {id:6, title:'Product 1', images:'img/courseimages/6.jpg'},
    {id:7, title:'Product 1', images:'img/courseimages/7.jpg'},
    {id:8, title:'Product 1', images:'img/courseimages/8.jpg'},
    {id:9, title:'Product 1', images:'img/courseimages/9.jpg'},
]
function ProductSection() {
  return (
    <div>

<Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {productData.map((product)=>(

        <SwiperSlide key={product.id}>
            <ProductCard title={product.title} images={product.images}/>
                
        </SwiperSlide>

        ))}

        
      
       
      </Swiper>


        <section className='py-10 bg-white dark:bg-primary-dark'>

        <div className='  p-3 text-center'>
          <p className='text-4xl    mt-6 mb-20 '>
            <span className='border-b-2 font-lora  border-gray-800 dark:border-slate-300 text-black dark:text-white'>
           Top Product
            </span>
            </p>

        </div>

            <div className='mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 '>

           
            {productData.map((product)=>(

    <ProductCard title={product.title} images={product.images}/>
        

))}


            </div>

         
            
        </section>


    </div>
  )
}

export default ProductSection