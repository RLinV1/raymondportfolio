"use client"
import { AnimatedTooltip } from '@/components/ui/AnimatedToolTip'
import { Meteors } from '@/components/ui/Meteors'
import { TimeLine } from '@/components/ui/TimeLine'
import { timeLine } from '@/data'
import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];
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
            I'm interested in backend technologies and learning new programming languages.
          </p>
          <p className='mb-3 text-gray-100'>
            My goal is to become a backend engineer in the coming years after college. Currently
            working on sharpening my skills learning C and algorithms. Some related hobbies to 
            computer science include game development and design. I've created some games using
            LibGDX, a Java Framework, which utilized 2D pixel art.
          </p>
          <p className='mb-3 text-gray-100'>
            Some hobbies outside of Computer Science include Badminton, Basketball, and Art.
          </p>
        </div>
        <Meteors number={200} />

        <div className='items-center sm:flex py-20 w-full justify-center'> 
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