import React from 'react'
import image1 from '../assets/images/place_your_image_here_dou_9.jpg'
import image2 from '../assets/images/shape_23.png'

const RockClimbing = () => {
    return (
        <>
            <div className='h-fit flex w-[90vw] mx-auto p-10 justify-around max-md:flex-col'>
                <div className='flex flex-col justify-evenly h-screen'>
                    <div className='max-md:my-3'>
                        <h2 className='text-5xl font-bold w-[10vw] leading-snug max-md:text-center max-md:w-full'>ROCK CLIMBING</h2>
                    </div>
                    <div className='text-xl flex flex-col justify-between gap-4 max-md:w-full max-md:text-center'>
                        <h3 className='text-3xl font-bold mb-3'>1. CLASSES & EVENTS</h3>
                        <p className='w-[30vw] mb-4 text-2xl max-md:w-full'>Hatha is the most classic yoga. Its origin is in the Raya Yoga of Patanjali and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.</p>
                        <span className='pt-[2px] bg-[#2fc8e1]'></span>
                        <div className='text-2xl text-slate-500'>
                            <p>10 modules</p>
                            <p>divided into 7 weekends</p>
                        </div>
                    </div>
                    <div className='flex text-2xl font-bold gap-20 max-md:w-full max-md:flex max-md:justify-evenly max-md:gap-5 max-md:text-center'>
                        <h3 className='w-24'>Start April 15 20.00 hs</h3>
                        <h3 className='w-24'>Price $900</h3>
                    </div>
                </div>
                <div className='flex items-center gap-5 max-md:flex-col'>
                    <div className='max-md:flex max-md:flex-col max-md:items-center max-md:w-full'>
                        <img src={image1} className='rounded-full w-[30vw] h-[55vh] mb-5 max-md:w-64 max-md:h-64 max-md:flex max-md:justify-center' alt="" />
                        <h2 className='text-3xl w-[24vw] text-[#FD5F00] font-handwritten max-md:text-center max-md:w-full'>WALKING IN NATURE AS A RECREATIONAL ACTIVITY</h2>
                    </div>
                    <div className='max-md:hidden'>
                        <img src={image2} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default RockClimbing