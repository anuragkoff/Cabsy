import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Feature from './Feature'
import BookingSteps from './BookingSteps'
import Footer from './Footer'

function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <Feature/>
    <BookingSteps />
    <Footer />
    </div>
  )
}

export default Home