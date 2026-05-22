import './App.css'
import Header from './components/Header'
import Project from './components/Projects'
import SkillBadge from './components/SkillBadge'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <div id="home">
        <Header />
      </div>

      {/* HERO / PROFILE SECTION */}
      <section id='profile' className='min-h-screen flex items-center justify-center px-5 pt-24 pb-16 sm:px-10'>
        <div className='flex flex-col sm:flex-row items-center gap-10 max-w-5xl w-full mx-auto'>

          {/* Avatar */}
          <div className="shrink-0 relative">
            <div className="absolute inset-0 rounded-full bg-green-500 blur-2xl opacity-20 scale-110" />
            <img
              src="../src/assets/removedBg.png"
              className="relative h-44 w-44 sm:h-56 sm:w-56 border-2 border-green-500 rounded-full object-cover"
              alt="Mitchel Okoh"
            />
          </div>

          {/* Text */}
          <div className='text-left'>
            <p className="text-green-500 text-sm font-mono mb-2 tracking-widest uppercase">
              Available for hire
            </p>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4'>
              Hi, I'm <span className="text-green-400">Mitchel Okoh</span>
            </h1>
            <h2 className="text-lg sm:text-xl text-amber-300 font-semibold mb-4">
              MERN Stack Developer
            </h2>

            {/* Big screen bio */}
            <p className='text-gray-400 leading-relaxed max-w-xl mb-6 hidden sm:block'>
              Passionate about building responsive, scalable, and impactful digital products using{' '}
              <span className='text-white font-medium'>MongoDB, Express.js, React, and Node.js</span>.
              Experienced in full-stack applications,{' '}
              <span className='text-white font-medium'>API integrations, authentication systems</span>, and
              database-driven solutions — with growing expertise in{' '}
              <span className='text-white font-medium'>Web3 and modern software architecture</span>.
            </p>

            {/* Small screen bio */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6 sm:hidden">
              MERN Stack Developer building{' '}
              <span className="text-white font-medium">full-stack apps</span> with MongoDB, Express.js,
              React &amp; Node.js. Into{' '}
              <span className="text-white font-medium">APIs, auth systems</span> and{' '}
              <span className="text-white font-medium">Web3</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black font-semibold 
                           rounded-lg transition-all duration-200 text-sm
                           hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                Hire Me
              </a>
              <a
                href="#project"
                className="px-5 py-2.5 border border-gray-600 hover:border-green-500 text-gray-300 
                           hover:text-green-400 font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                View Projects
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-5 py-2.5 border border-gray-600 hover:border-amber-400 text-gray-300 
                           hover:text-amber-300 font-semibold rounded-lg transition-all duration-200 text-sm"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* PROJECTS SECTION */}
      <section id='project' className="px-5 py-16 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-1 bg-blue-500 rounded-full" />
            <h2 className="text-2xl font-bold text-blue-500 tracking-wide uppercase font-mono">Projects</h2>
          </div>
          <p className="text-gray-500 text-sm mb-8 ml-11">
            A selection of things I've designed and built
          </p>
          <Project />
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* TECH STACK SECTION */}
      <section id='skills' className='px-5 py-16 sm:px-10'>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-1 bg-[#BB86FC] rounded-full" />
            <h2 className="text-2xl font-bold text-[#BB86FC] tracking-wide uppercase font-mono">Tech Stack</h2>
          </div>
          <p className="text-gray-500 text-sm mb-8 ml-11">Tools and technologies I work with</p>
          <SkillBadge />
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* CONTACT / FOOTER SECTION */}
      <footer id='contact' className='px-5 py-16 sm:px-10'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
