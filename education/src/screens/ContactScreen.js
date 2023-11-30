import React from 'react'
import HeaderFixed from '../components/HeaderFixed'
import Footer from '../components/Footer'
import ServiceSection from '../sections/Home/ServiceSection'
import SectionOne from '../sections/Contact/SectionOne'
import ContactForm from '../sections/Contact/ContactForm'

function ContactScreen() {
  return (
    <div>

        <HeaderFixed/>

        <SectionOne></SectionOne>

     <ContactForm></ContactForm>


            <ServiceSection></ServiceSection>

            <Footer/>
        
    </div>
  )
}

export default ContactScreen