import { socialMedia } from '@/data'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='w-full pb-3 pt-14' id="contact">
        <div className='w-full absolute left-0 bottom-1/4 min-h-10 max-h-20'>
            
        </div>
        <div className='flex justify-center items-center z-50'>
            <h1 className='heading lg:max-w-[45vw] text-purple z-50'>
                Contact Me
            </h1>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light z-50'>
                Copyright &copy; Raymond 2024
            </p>
            <div className='flex items-center md:gap-3 lg:gap-6 mt-3 '>
                {socialMedia.map((profile) => (
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center
                    backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200
                    rounded-lg border border-black-300'>
                        <a href={profile.link}>
                            <img src={profile.img} alt={"socials"} width={20} height={20} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    
    </footer>
  )
}
