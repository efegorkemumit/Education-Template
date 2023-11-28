import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceSection from '../sections/Home/ServiceSection'

function HomeScreen() {
  return (
    <div>


        <Header></Header>

        <div className='bg-second-light text-black p-3 text-center'>
          <p className='text-md font-semibold'>🎄 is simply dummy text of the printing and typesetting industry. Lorem</p>

        </div>
        <ServiceSection></ServiceSection>

        <Footer/>
    </div>
  )
}

export default HomeScreen