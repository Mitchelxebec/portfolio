import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Project from './components/Projects'
import SkillBagde from './components/SkillBadge'
import Footer from './components/Footer'


function App() {


  return (
    <div>
      <div id="home">
        <Header />
      </div>

      <hr className='max-sm:mt-19' />

      <section id='profile' className='p-5 flex flex-col gap-5 justify-center text-center sm:flex sm:gap-5 sm:p-10 '>
        <img src="../src/assets/removedBg.png" className="h-[200px] w-[200px] border-4 border-green-500 rounded-full mx-auto" alt="pfp" />
        <div className='max-w-2xl mx-auto'>
          <h3 className='text-2xl text-green-500'>
            GM World!
            <br />
            I'm Mitchel Okoh
          </h3>
          {/* BIG DEVICE PROFILE */}
          <p className='mt-3 hidden sm:block'>
            Frontend Developer skilled in building responsive and accessible web applications using
            <span className='text-amber-300 font-bold'> React, Tailwind CSS, and modern JavaScript</span>.
            Experienced in working with <span className='text-amber-300 font-bold'>APIs</span>,
            optimizing performance, and collaborating with designers to create user-friendly digital experiences.
            Passionate about <span className='text-amber-300 font-bold'>problem-solving and delivering impactful solutions</span>.
          </p>

          {/* SMALL DEVICE PROFILE */}
          <p className="mt-3 text-sm sm:hidden">
            Frontend Developer skilled in
            <span className="text-amber-300 font-bold"> React, Tailwind CSS, and JavaScript</span>.
            Experienced with <span className="text-amber-300 font-bold">APIs</span> and passionate about
            <span className="text-amber-300 font-bold"> problem-solving</span>.
          </p>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id='project' className="p-5 flex flex-col justify-center sm:p-10">
        <h2 className="text-2xl mb-5 font-bold text-blue-500">PROJECTS</h2>
        {/* Scrollable container */}
        <Project />
      </section>

      {/* SKILL BADGE */}
      <section id='skills' className='p-5 flex flex-col justify-center sm:p-10'>
        <h2 className="text-2xl mb-5 font-bold text-[#BB86FC]">SKILLS</h2>
        <SkillBagde />
      </section>

      <hr />

      <footer id='contact' className='p-5 flex justify-center gap-20 sm:p-10'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
