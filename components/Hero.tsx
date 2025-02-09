import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from "react-icons/fa";
import Link from 'next/link';
function Hero() {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='blue'/>
            <Spotlight className='top-10 left-1/3 h-[80vh] w-[50vw]' fill='purple'/>
        </div>

        <div className="h-[50rem] w-full dark:bg-black-100 bg-white  dark:bg-dot-white/[0.15] bg-dot-black/[0.2] 
         flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 
            bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
                </h2>
                <TextGenerateEffect 
                    className='text-center text-[40px] md:text-5xl lg:text-6xl'
                    words=' Hi, I&apos;m Raymond, an aspiring Full Stack developer.'
                    />

                <p className='text-center md:tracking-normal mb-4 text-sm md:text-lg'>
                    Interested in new technologies 
                </p>
                <Link href="/projects" className='md:mt-10'>
                    <MagicButton 
                        title="Show My Work"
                        icon={<FaLocationArrow />}
                        position={'right'}
                    />
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Hero
