import React from 'react'
import image1 from '../assets/images/place_your_image_here_dou_2.jpg'

const Activities2 = () => {
  return (
    <>
        <div className='h-fit bg-primary text-white max-md:py-10'>
            <div className='flex w-[90vw] mx-auto p-10 gap-20 justify-evenly max-md:w-full max-md:p-3 max-md:flex-col max-md:gap-10'>
                <div className='max-md:flex max-md:items-center max-md:flex-col'>
                    <img src={image1} className='rounded-full w-[28vw] h-[55vh] mb-5 max-md:w-64 max-md:h-64 max-md:flex max-md:justify-center' alt="" />
                    <h2 className='text-3xl w-[24vw] text-[#2fc8e1] font-handwritten max-md:w-full max-md:text-center'> WALKING IN NATURE AS A RECREATIONAL ACTIVITY</h2>
                </div>
                <div className='flex flex-col justify-evenly'>
                    <div className='mb-10'>
                        <h2 className='text-5xl font-bold w-[10vw] leading-snug max-md:w-full max-md:text-center max-md:text-4xl'>MOUNTAINEERING ICE CLIMBING</h2>
                    </div>
                    <div className='text-xl flex flex-col justify-between gap-4 max-md:text-center'>
                        <h3 className='text-3xl font-bold mb-3'>2. ACTIVITIES</h3>
                        <p className='w-[30vw] mb-4 text-2xl max-md:w-full'>Kundalini is the most classic yoga. Its origin is in the Raya Yoga of Patanjali and other classical texts such as Bhagavad Gita and Hatha Yoga Pradipika.</p>
                        <span className='pt-[2px] bg-[#2fc8e1]'></span>
                        <div className='text-2xl text-slate-300 mb-10'>
                            <p>17 modules</p>
                            <p>divided into 5 weekends</p>
                        </div>
                    </div>
                    <div className='flex text-2xl font-bold gap-20 max-md:justify-center'>
                        <h3 className='w-24'>Start April 15 20.00 hs</h3>
                        <h3 className='w-24'>Price $900</h3>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default Activities2