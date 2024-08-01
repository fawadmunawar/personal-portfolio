import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
      <main className='overflow-x-hidden tracking-tighter text-gray-200 antialiased '>
        <NavBar />
        <HeroSection />
      </main>
    </>
  )
}

export default App