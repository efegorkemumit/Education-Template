import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ServiceSection from '../sections/Home/ServiceSection'

function HomeScreen() {
  return (
    <div>


        <Header></Header>
        <ServiceSection></ServiceSection>

        <Footer/>
    </div>
  )
}

export default HomeScreen