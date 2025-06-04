import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About/About'
import Projects from './Sections/Projects/Projects'
import Contact from './Sections/Contact/Contact'

export default function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Contact />
    </div>
  )
}
