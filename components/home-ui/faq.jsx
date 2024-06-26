// import React, { useState } from 'react'
// import { FiChevronDown } from 'react-icons/fi'


// const Accordion = () => {

//     const [displayAnswer, setDisplayAnswer] = useState(false)

//     return (
//         <div onClick={() => setDisplayAnswer(!displayAnswer)} className='rounded-2xl cursor-pointer bg-white w-[45rem] flex flex-col h-fit gap-y-2 p-5 border-2 border-zinc-200 shadow-xl transition-all max-md:w-full'>
//             <span className='flex justify-between items-center'>
//                 <p className='font-semibold text-lg max-sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicin ?</p>
//                 <FiChevronDown className={`text-3xl  transition-all ${displayAnswer ? 'rotate-180' : 'rotate-0'}`} />
//             </span>
//             <span className={`w-full h-[1px] bg-zinc-300 transition-all ${!displayAnswer && 'hidden'}`}></span>
//             <p className={`transition-all max-sm:text-sm ${!displayAnswer && 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ducimus ad esse unde consequatur modi sed quidem. Quis, voluptas. Architecto excepturi explicabo eligendi veniam alias soluta quam tempora? Ut, culpa.</p>
//         </div>
//     )
// }

// export default function Faq() {
//     return (
//         <>
//             <h3 className='title'>FAQ</h3>
//             <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto flex flex-col gap-4 my-12 items-center text-neutral-700 max-md:px-4'>
//                 <Accordion />
// a
               

//             </section>
//         </>
//     )
// }

import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I make my website responsive?',
      answer: 'A responsive website adjusts its layout and content based on the screen size and orientation of the device being used. Use frameworks like Bootstrap or Tailwind CSS, CSS media queries, flexible grid layouts, and the viewport meta tag.',
    },
    {
      question: 'How do I improve my website’s performance?',
      answer: 'Improve performance by optimizing images, minimizing CSS and JavaScript, implementing lazy loading, reducing HTTP requests, using a CDN, and enabling caching.',
    },
    {
      question: 'How do I ensure my website is accessible?',
      answer: 'Ensure accessibility by using semantic HTML, ARIA landmarks and roles, keyboard navigation, descriptive alt text for images, sufficient color contrast, and proper form labels.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h3 className='title'>FAQ</h3>
      <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto flex flex-col gap-4 my-12 items-center text-neutral-700 max-md:px-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleAccordion(index)}
            className='rounded-2xl cursor-pointer bg-white w-[45rem] flex flex-col h-fit gap-y-2 p-5 border-2 border-zinc-200 shadow-xl transition-all max-md:w-full'
          >
            <span className='flex justify-between items-center'>
              <p className='font-semibold text-lg max-sm:text-base'>{faq.question}</p>
              <FiChevronDown className={`text-3xl transition-all ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} />
            </span>
            <span className={`w-full h-[1px] bg-zinc-300 transition-all ${activeIndex !== index && 'hidden'}`}></span>
            <p className={`transition-all max-sm:text-sm ${activeIndex !== index && 'hidden'}`}>{faq.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Faq;

