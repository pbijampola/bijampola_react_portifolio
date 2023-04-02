import React from 'react'
import { profile } from '../../assets/index'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import { SiTailwindcss,SiHtml5,SiCss3,SiBootstrap,SiJavascript,SiPhp,SiPython,SiLaravel,SiFastapi,SiReact} from 'react-icons/si'

function Hero() {
  const [text] = useTypewriter({
    loop: true,
    cursor: true,
    cursorStyle: '_',
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
    words: ['Full Stack Developer.', 'AI Enthuasiast', 'Freelancer'],
  })
  return (
    <section id="home" className="w-full flex pt-10 pb-20 font-titleFont">
      <div className="w-1/2 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h4 className="text-lg uppercase font-normal">welcome to my world</h4>
          <h1 className="text-4xl font-bold text-white">
            Hi! I'm{' '}
            <span className="text-designColor capitalize pt-5">
              PATRICK BIJAMPOLA
            </span>
          </h1>

          <h2 className="text-2xl font-bold text-white">
            a <span>{text}</span>
            <Cursor cursorColor="#1E3B6C" cursorStyle="_" />
          </h2>
          <p className="text-base font-bodyFont leading-6 tracking-wide">
            Innovative and deadline-driven Software Developer & AI Enthuasiast
            with 2+ years of experience designing and developing user-centered
            software from initial concept to final, polished deliverable.
          </p>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-base uppercase font-titleFont mb-4">
              Let's Connect
            </h4>
            <div className='flex gap-4'>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </span>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <FaGithub></FaGithub>
              </span>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <FaTwitter></FaTwitter>
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-base uppercase font-titleFont mt-4 mb-4">
              Skilled On
            </h4>
            <div className='flex gap-4'>
            <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
            items-center hover:-translate-y-1 translate-all
            rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
              <SiHtml5></SiHtml5>
            </span>
            <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
            items-center hover:-translate-y-1 translate-all
            rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
             <SiCss3></SiCss3>
            </span>
            <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
             <SiJavascript></SiJavascript>
            </span>
            <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
            items-center hover:-translate-y-1 translate-all
            rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
            <SiBootstrap></SiBootstrap>
            </span>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
                  rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
            items-center hover:-translate-y-1 translate-all
            rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
              <SiPhp></SiPhp>
            </span>
            <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
            items-center hover:-translate-y-1 translate-all
            rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
             <SiPython></SiPython>
            </span>
            <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
             <SiLaravel></SiLaravel>
            </span>
            <span
              className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
            items-center hover:-translate-y-1 translate-all
            rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
            >
            <SiFastapi></SiFastapi>
            </span>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
                  rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <SiReact></SiReact>
              </span>
            </div>
          </div>
          
        </div>
        {/* <div className="flex justify-between">
          <div>
            
            <div className='flex gap-4'>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </span>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <FaGithub></FaGithub>
              </span>
              <span
                className="w-10 h-10 bg-black bg-opacity-20 text-gray-500 text-xl inline-flex justify-center
              items-center hover:-translate-y-1 translate-all
              rounded-md shadow-shadowOne hover:text-designColor cursor-pointer duration-300"
              >
                <FaTwitter></FaTwitter>
              </span>
            </div>
          </div>
          <div>
            <div className='flex gap-4'>
            
            </div>
          </div>
          
        </div> */}
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <div>
          <img className='w-[400px] h-[400px]' src={profile} alt="BIJAMPOLA" />
        </div>
      </div>
    </section>
  )
}

export default Hero
