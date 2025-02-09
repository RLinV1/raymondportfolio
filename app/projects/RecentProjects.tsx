"use client";
import React from 'react'
import {projects} from '../../data';
import { PinContainer } from '@/components/ui/Pin';
import { FaLocationArrow } from 'react-icons/fa';
import { TypewriterEffectSmooth } from "../../components/ui/TypeWriter";

const words = [
  {
    text: "A",
  },
  {
    text: "Selection",
  },
  {
    text: "Of",
    className: "dark:text-purple",
  },
  {
    text: "Projects",
    className: "dark:text-purple",
  }
];

const RecentProjects = () => {
  return (
    <div className='py-20 relative z-0'>
      <div className='heading pt-10'>
        <div className='flex justify-center items-center text-'>
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center p-4
      mt-10 gap-16 lg:gap-x-32
      '>
        {projects.map(({id, title, des, img, iconLists, link, date}) => (
          
          <div key={id} className='lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
            <PinContainer title={title} href={link}>
              <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img"/>
                </div>
                <img src={img} alt={title} className='z-10 object-fit'/>
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <p className='lg:text-xl lg:font-bold font-light text-sm line-clamp-1 mt-2' >
                {date}
              </p>
              
              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div key={icon} className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 
                    w-8 h-8 flex justify-center items-center' style={ {transform: `translate(-${5 * index * 2}px)`}}>
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <p className='flex md:text-xl text-sm text-purple'>Check Link</p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>

              
            </PinContainer>
          </div>
        ))}
      </div>

    </div>
  )
}

export default RecentProjects
