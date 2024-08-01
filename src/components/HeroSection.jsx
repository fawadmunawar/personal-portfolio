import React from 'react'
import fawad from "../assets/fawad.jpg"

const HeroSection = () => {
  return (
    <>
        <div className='relative flex min-h-screen items-center justify-center' id='hero'>
            <img src={fawad} alt="fawad munawar"  className='absolute inset-0 z-10 h-full w-full object-cover'/>
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'></div>
            <div className='z-20 mx-4 max-w-3xl pb-8 absolute bottom-1'>
                <h1 className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>Fawad Munawar</h1>
                <p className='pt-2 font-semibold'>Front-end developer specializing in sleek and responsive design.</p>
            </div>
        </div>
    </>
  )
}

export default HeroSection