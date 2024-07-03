"use-client"
import React from "react";
import { AnimatedTooltip } from "./AnimatedToolTip";

interface DescriptionItem {
    id: number;
    name: string;
    designation: string;
    image: string;
}
interface TimeLineProps {
    title: string;
    desc: DescriptionItem[];
    otherClassName?: string;
}

// had to remove the ol for it work
export const TimeLine = ({title, desc, otherClassName} : TimeLineProps) => {
    return (
        <div>
            <div className="relative mb-6 sm:mb-0 w-96">
                <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                        <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg>
                    </div>
                    <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                </div>
                <div className="mt-4 sm:pe-8">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h3>
                </div>
            </div>
        </div>
        
    );
};
