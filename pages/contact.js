import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTelegramPlane } from 'react-icons/fa'
import { TbPhone } from "react-icons/tb";
import { MdAlternateEmail } from "react-icons/md";


export default function Contact() {
  return (
    <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto flex flex-col items-center md:mt-14 mt-6 max-lg:px-4'>
        <div className='w-[55rem] bg-white rounded-xl overflow-hidden shadow-2xl flex max-lg:w-full max-sm:flex-col'>
            <ContactForm/>
            <div className='flex-1 bg-gradient-to-br from-neutral-800 to-neutral-600 text-white p-3 flex flex-col justify-between'>
                <ContactOptions/>
            </div>
        </div>
    </section>
  )
}

const ContactForm = () => {
    return (
        <form className='w-2/3 p-4 flex flex-col gap-y-2 text-neutral-800 max-sm:w-full'>
            <label htmlFor="">Name</label>
            <input type="text"/>
            <label htmlFor="">Email</label>
            <input type="email"/>
            <label htmlFor="">Select category</label>
            <select id="">
                <option value="">meet in person</option>
                <option value="">Project reservation</option>
                <option value="">Found a bug</option>
            </select>
            <label htmlFor="">Your message</label>
            <textarea id="" className='h-52'></textarea>
            <button className='rounded-lg bg-gradient-to-br from-neutral-800 to-neutral-600 text-white p-3'>Send request</button>
        </form>
    )
}

const ContactOptions = () => {
    return (
        <>
        <p className='text-lg'>You'll recieve an email as soon as possible</p>
        <div>
            <p className='text-xl mt-4'>Socials : </p>

            <div className='flex items-center justify-between mt-4 mb-10 pr-2 justify-self-end'>
                <a className='p-1 rounded-lg border-2 border-transparent hover:border-white flex items-center gap-x-2 transition-all duration-150 group' target='_blank' href="linkedin.com/in/arsi-gh/"><FaLinkedin  className='text-3xl'/><p className='text-[0px] group-hover:text-base transition-all duration-300 delay-75'>Linkedin</p></a>
                <a className='p-1 rounded-lg border-2 border-transparent hover:border-white flex items-center gap-x-2 transition-all duration-150 group' href=""><FaInstagram  className='text-3xl'/><p className='text-[0px] group-hover:text-base transition-all duration-300 delay-75'>Instagram</p></a>
                <a className='p-1 rounded-lg border-2 border-transparent hover:border-white flex items-center gap-x-2 transition-all duration-150 group' href=""><FaTelegramPlane  className='text-3xl'/><p className='text-[0px] group-hover:text-base transition-all duration-300 delay-75'>Telegram</p></a>
                <a className='p-1 rounded-lg border-2 border-transparent hover:border-white flex items-center gap-x-2 transition-all duration-150 group' target='_blank' href="github.com/Arsi-gh"><FaGithub  className='text-3xl'/><p className='text-[0px] group-hover:text-base transition-all duration-300 delay-75'>Github</p></a>
            </div>
            <div className='flex flex-col gap-3'>
                <a className='rounded-lg border-2 border-white p-2 flex justify-between items-center' href="mailto:arsalanghoochani15@gmail.com">Send an email<MdAlternateEmail className='text-2xl'/></a>
                <a className='rounded-lg border-2 border-white p-2 flex justify-between items-center' href="tel:09136955525">Contact phone<TbPhone className='text-2xl'/></a>
            </div>
        </div>
        </>
    )
}