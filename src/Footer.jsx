import React from 'react'
import logo from './assets/logo.png'

const Footer = () => {
  return (
    <>
        <p className='p-[1px] bg-slate-700 w-full'></p>
        <div className='h-fit w-[90vw] mx-auto p-10 flex justify-around max-md:flex-col max-md:w-full max-md:p-3'>
            <div className='w-[50vw] flex flex-col justify-evenly gap-4 max-md:w-full max-md:text-center max-md:items-center max-md:gap-7 max-md:mb-10'>
                <h2 className='text-4xl font-bold'>ABOUT</h2>
                <p className='text-2xl'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum</p>
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className='flex gap-7 max-md:flex-col max-md:text-center'>
                <div>
                    <h2 className='text-3xl font-bold flex flex-col mb-3'>About</h2>
                    <ul className='text-xl flex flex-col gap-2'>
                        <li>Team</li>
                        <li>Join Us</li>
                        <li>Ethics</li>
                        <li>Goals</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl font-bold flex flex-col mb-3'>Contact</h2>
                    <ul className='text-xl flex flex-col gap-2'>
                        <li>Email</li>
                        <li>Phone</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-3xl font-bold flex flex-col mb-3'>Documents</h2>
                    <ul className='text-xl flex flex-col gap-2'>
                        <li>Privacy Policy</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
            </div>
        </div>
        <span className='pt-5 bg-[#2fc8e1]'></span>
    </>
  )
}

export default Footer