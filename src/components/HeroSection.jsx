import React from 'react'
import fawad from "../assets/fawad.jpg"
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

const HeroSection = () => {
  const comp = useRef(null)

  useEffect(() => {
    const splitText = new SplitType('#heading', {types: "words"})

    let ctx = gsap.context(() => {
      const tl = gsap.timeline()

      tl.from(splitText.words, {
        
        yPercent: 400,
        stagger: 0.5,
        ease: "back",
        delay: 0.8
      })
      .from("#para", {
        yPercent: 400,
        ease: "power1.inOut",
        duration: 1,
      })

    }, comp)

    return () => ctx.revert();
  }, [])
  

  return (
    <>
        <div ref={comp} className='relative flex min-h-screen items-center justify-center overflow-hidden' id='hero'>
            <img src={fawad} alt="fawad munawar"  className='absolute inset-0 z-10 h-full w-full object-cover'/>
            <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent from-60% to-black lg:from-30%'></div>
            <div className='z-20 mx-4 max-w-3xl pb-8 absolute bottom-1'>
                <h1 id='heading' className='text-5xl font-semibold uppercase tracking-wide md:text-7xl'>Fawad Munawar</h1>
                <p id='para' className='pt-2 font-semibold text-gray-300'>Front-end developer specializing in sleek and responsive design.</p>
            </div>
        </div>
    </>
  )
}

export default HeroSection