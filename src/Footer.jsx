import React from 'react'
import logo from './assets/logo.png'

const Footer = () => {
  return (
    <>
        <div className='h-fit w-[90vw] mx-auto p-10 flex justify-around'>
            <div className='w-[50vw] flex flex-col justify-evenly gap-4'>
                <h2 className='text-4xl font-bold'>ABOUT</h2>
                <p className='text-2xl'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum</p>
                <div>
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className='flex gap-7'>
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