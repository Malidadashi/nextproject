import React from 'react'
import { CgSearch } from 'react-icons/cg';
import { IoIosCalendar } from "react-icons/io";
import { LuCode2 } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import Image from 'next/image';



export default function WorkSteps(name,img,text,icon) {
  return (
    <>
      <h3 className='title'>How projects are executed</h3>
      <section className='2xl:w-[1536px] xl:w-[1280px] sm:px-12 max-lg:max-w-screen-lg mx-auto my-12 mb-24 flex gap-4 max-lg:grid max-lg:grid-cols-2 max-sm:px-4 max-sm:grid-cols-1'>
        <Step name="Search" img="/images/progress/search.jpg" text="This phase involves gathering information, exploring options, and identifying resources necessary to begin the project. It's about researching the landscape and understanding the scope of what needs to be done.">
          <CgSearch className='text-3xl sm:min-w-[2rem] max-sm:text-xl' />
        </Step>
        <Step name="Planning" img="/images/progress/plan.jpg" text="During this stage, detailed strategies are formulated based on the information gathered. This includes outlining timelines, allocating resources, and defining milestones to ensure the project progresses efficiently and meets its objectives.">
          <IoIosCalendar className='text-3xl sm:min-w-[2rem] max-sm:text-xl' />
        </Step>
        <Step name="Develop" img="/images/progress/develop.jpg" text="This is where the actual creation or implementation of the project begins. Ideas and plans are transformed into tangible outputs, whether it's developing software, creating content, or constructing a product.">
          <LuCode2 className='text-3xl sm:min-w-[2rem] max-sm:text-xl' />
        </Step>
        <Step name="Final" img="/images/progress/final.jpg" text="The final stage encompasses reviewing, refining, and completing the project. It involves quality checks, testing, making necessary adjustments, and ensuring all deliverables meet the required standards before final approval and implementation.">
          <BsStars className='text-3xl sm:min-w-[2rem] max-sm:text-xl' />
        </Step>
      </section>
    </>
  )
}

const Step = ({ img, name, text, children }) => {
  return (
    <figure className='lg:w-1/4 lg:hover:w-1/2 rounded-2xl 2xl:h-72 h-60 max-md:h-72 relative overflow-hidden transition-all duration-500  group max-sm:h-56'>
      <Image width={500} height={500} src={img} alt={name} className='w-full h-full absolute top-0 left-0 object-cover' />
      <figcaption className='w-full h-full absolute left-0 top-0 p-8 z-10 bg-neutral-900 bg-opacity-80 text-white transition-all group-hover:bg-opacity-90 group-hover:backdrop-blur-sm max-sm:p-4'>
        <span className='flex items-center gap-x-3'>
          {children}
          <p className='text-3xl font-semibold max-sm:text-xl '>{name}</p>
        </span>
        <p className='text-lg mt-3 max-sm:text-base max-xl:line-clamp-5 max-md:line-clamp-6'>{text}</p>
      </figcaption>
    </figure>
  )
}