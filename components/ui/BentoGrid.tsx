"use client"
import dynamic from 'next/dynamic';
import { cn } from "@/utils/cn";
import { GlobeDemo } from "./GridGlobe";
import { useEffect, useState } from "react";
import animationData from '@/data/confetti.json'
import Lottie from 'react-lottie';
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import {BoxesCore} from "./BackgroundBoxes";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
 
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('rlin7289@gmail.com');
        setCopied(true);
    }; 
    return (
      <div
        className={cn(
          `row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl 
          transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4`,
          className
        )}
        style={{
          background: "rgb(4,7,29)",
          backgroundColor:
            "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
        }}
      >
        {/* add img divs */}
        <div className={`${id === 2 && "flex justify-center"} h-full`}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, "object-cover object-center ")}
              />
            )}
          </div>
          <div
            className={`absolute right-0 -bottom-5 ${id === 2 && "w-full opacity-80"
              } `}
          >
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                //   width={220}
                className="object-cover object-center w-full h-full"
              />
            )}
          </div>
  
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 lg:w-full flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans font-extralight md:max-w-32 lg:max-w-64 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            <div className={`font-sans text-lg lg:text-3xl max-w-100 font-bold z-10 ${id==2 && "mb-10"}`}>
              {title}
            </div>
  
            {/* for the github 3d globe */}
            {id === 2 && <GlobeDemo />}
            {id === 4 && <BoxesCore/>}

            {/* Tech stack list div */}
            {id === 1 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 md:right-2 lg:right-6">
                {/* tech stack lists */}
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                  {['Java', 'JavaScript', 'Python'].map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                  {['Next.js', 'React.js', 'Docker'].map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-6">
                  {['Typescript', 'PostgreSQL', 'GraphQL'].map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                   <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                </div>
              </div>
            )}
            {id == 4 && (
              <div className="mt-5 relative mx-auto">
                  <div className={`absolute -bottom-5 right-0`}>
                  {(
                    <Lottie
                      options={{
                        loop: copied,
                        autoplay: copied,
                        animationData: animationData,
                        rendererSettings: {
                          preserveAspectRatio: 'xMidYMid slice'
                        }
                      }}
                    />
                  )}
                  </div>
                  <MagicButton 
                    title={copied ? 'Email copied' : 'Copy my email'}
                    icon={<IoCopyOutline />}
                    position="left"
                    otherClasses="`bg-[#161a31]"
                    handleClick={handleCopy}
                  />
              </div>
            )}
          </div>
        </div>
      </div>
  )}
