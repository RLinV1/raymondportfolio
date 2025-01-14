"use client"
import { AnimatedTooltip } from '@/components/ui/AnimatedToolTip'
import { Meteors } from '@/components/ui/Meteors'
import { TimeLine } from '@/components/ui/TimeLine'
import { timeLine } from '@/data'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const AboutPage = () => {
  return (
    <div className='pt-20 pb-4  relative z-0'>
      <h1 className='heading pt-10'>
      <div className='flex justify-center items-center text-purple my-7 font-bold'>
          About
        </div>
      </h1>
        <div className='flex justify-between flex-col items-start text-xl py-10 gap-9 '>
          <p className='mb-3 text-gray-100'>
            Hello, I'm from NYC and currently attending Stony Brook University as a Sophmore.
            I'm eager to expand my skills in both frontend and backend technologies, with a focus on building comprehensive, full-stack applications.
          </p>
          <p className='mb-3 text-gray-100'>
            My goal is to become a Full Stack engineer in the coming years after college. Currently
            working on sharpening my skills through creating full stack applications. Some related hobbies to 
            computer science include game development and design. I've created some games using
            LibGDX, a Java Framework, which utilized 2D pixel art.
          </p>
          <p className='mb-3 text-gray-100'>
            Some hobbies outside of Computer Science include Badminton, Basketball, and Art.
          </p>
        </div>
        <Meteors number={200} />

        <div className='items-center sm:flex py-20 w-full justify-center lg:flex-row lg:text-left md:flex-col md:text-center'> 
          {timeLine.map(({ title, desc }) => (
            <div>
              <TimeLine title={title} desc={desc} key={title} />
              <div className="flex flex-row items-center mb-10 w-full h-full mt-5">
                <AnimatedTooltip items={desc} />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default AboutPage
