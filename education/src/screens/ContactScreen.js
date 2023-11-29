import React from 'react'
import HeaderFixed from '../components/HeaderFixed'
import Footer from '../components/Footer'
import ServiceSection from '../sections/Home/ServiceSection'

function ContactScreen() {
  return (
    <div>

        <HeaderFixed/>

        <section className='relative h-full overflow-hidden'>

        <div className='container mx-auto flex items-center justify-between px-4 mt-10'>
        contact
            </div>

       

            </section>


            <ServiceSection></ServiceSection>

            <Footer/>
        
    </div>
  )
}

export default ContactScreen