import React from 'react'
import image1 from '../assets/images/shape_25.png'
import image2 from '../assets/images/place_your_design_here_do_3.jpg'
import image3 from '../assets/images/place_your_design_here_do.jpg'
import image4 from '../assets/images/place_your_design_here_do_2.jpg'

const Info = () => {
  return (
    <>
        <div className='h-fit w-[90vw] mx-auto p-10 flex gap-5 max-md:p-2 max-md:w-full max-md:text-center max-md:gap-2'>
            <div className='my-10 max-md:hidden'>
                <img src={image1} className='w-8 h-20' alt="" />
            </div>
            <div>
                <div className='my-10'>
                    <h2 className='text-4xl mb-3'>HIKING AND CAMPING <span className='font-bold'>CLASSES</span></h2>
                    <span className='px-20 bg-[#2fc8e1] text-[5px]'></span>
                </div>
                <div className='flex justify-evenly max-md:gap-4 max-md:flex-col'>
                    <div className='flex flex-col gap-3 text-center'>
                        <img src={image2} className='w-44 mx-auto' alt="" />
                        <h2 className='text-2xl font-semibold'>ACTIVITIES</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
                    </div>
                    {/* <div className='flex flex-col gap-3 text-center'>
                        <img src={image3} className='w-44 mx-auto max-md:w-28' alt="" />
                        <h2 className='text-2xl font-semibold'>HIKING</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
                    </div> */}
                    <div className='flex flex-col gap-3 text-center'>
                        <img src={image3} className='w-44 mx-auto' alt="" />
                        <h2 className='text-2xl font-semibold'>HIKING</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
                    </div>
                    <div className='flex flex-col gap-3 text-center'>
                        <img src={image4} className='w-44 mx-auto' alt="" />
                        <h2 className='text-2xl font-semibold'>MOUNTAINS</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-end max-md:hidden'>
                <img src={image1} className='w-8 h-20' alt="" />
            </div>
        </div>
    </>
  )
}

export default Info