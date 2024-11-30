import React from 'react'
import Navbar from './Navbar'

function About() {
  return (
    <div>
        <Navbar />
        <section className="bg-white ">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
                <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    
                    <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                    We are a emerging ride sharing platform in North India</h1>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-900">Book your first ride and see how much it can save your pocket. Enjoy the premiumness and great hospitality of ours. Ride without any hesitation of safety and comfort, we're here to serve you.</p>
                    
                </div>
            </div>
        </section>

        <section className="bg-white ">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <div className="mt-4 md:mt-0">
                    
                    <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
                    Our Mission</h1>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-900">At Cabsy, we are pledged to provide you with the best service and experience at very affordable price to the residents and the tourists. Your safety and comfort are our top priorities. We are committed to solve your problems within the shortest possible time.</p>
                    
                </div>
                {/* <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/> */}
                <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/>
            </div>
        </section>

        <section className="bg-white ">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                <img className="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"/>
                <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"/>
                <div className="mt-4 md:mt-0">
                    
                    <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Our Vision</h1>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-900">Our vision is to be the best ride sharing platform in J&K and Uttarakhand, to be famous as a best in </p>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default About