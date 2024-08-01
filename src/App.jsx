import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Goal from './components/Goal'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden tracking-tighter text-gray-200 antialiased '>
        <NavBar />
        <HeroSection />
        <About />
        <Projects />
        <Skills />
        <Goal />
      </main>
    </>
  )
}

export default App