import React from 'react'
import image1 from '../assets/images/shape_18.png'
import image2 from '../assets/images/place_your_design_here_do_2.jpg'
import image3 from '../assets/images/place_your_design_here_do_3.jpg'
import image4 from '../assets/images/place_your_design_here_do.jpg'
import image5 from '../assets/images/place_your_image_here_dou_7.jpg'

const HikeRecovery = () => {
  return (
    <>
        <div className='h-fit w-[90vw] mx-auto p-10 flex justify-center gap-10 max-md:flex-col max-md:p-3 max-md:mt-10'>
            <div className='max-md:hidden'>
                <img src={image1} alt="" />
            </div>
            <div className='max-md:text-center'>
                <div className='mb-10'>
                    <h2 className='text-3xl font-bold w-[20vw] max-md:w-full'>HOW TO RECOVER FROM A HIKE</h2>
                    <span className='px-20 bg-[#2fc8e1] text-[5px]'></span>
                </div>
                <div className='flex gap-20 max-md:flex-col'>
                    <div className='text-xl'>
                        <div className='flex gap-5 items-center mt-4 max-md:flex-col'>
                            <img src={image2} alt="" />
                            <div className='w-[20vw] max-md:w-full'>
                                <i className='block'>- Lorem ipsum</i>
                                <i className='block'>- Dolor sit amet consectetur</i>
                                <i className='block'>- Adipiscing elit aptent - Torquent, interdum</i>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center mt-4 max-md:flex-col'>
                            <img src={image3} alt="" />
                            <div className='w-[20vw] max-md:w-full'>
                                <i className='block'>- Fusce etiam augue - Dignissim at euismod - Libero montes,</i>
                                <i className='block'>- Adipiscing elit aptent - Torquent, interdum</i>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center mt-4 max-md:flex-col'>
                            <img src={image4} alt="" />
                            <div className='w-[20vw] max-md:w-full'>
                                <i className='block'>- Libero montes,</i>
                                <i className='block'>- Adipiscing elit aptent</i>
                                <i className='block'>- Torquent, interdum</i>
                            </div>
                        </div>
                    </div>
                    <div className='max-md:flex max-md:items-center max-md:flex-col'>
                        <img src={image5} className='rounded-full w-[28vw] h-[55vh] mb-5 max-md:w-64 max-md:h-64 max-md:flex max-md:justify-center' alt="" />
                        <h2 className='text-3xl w-[24vw] text-[#2fc8e1] font-handwritten max-md:w-full'>MAKE SURE YOUR GEAR FITS</h2>
                    </div>
                </div>
            </div>
            <div className='max-md:hidden'>
                <img src={image1} alt="" />
            </div>
        </div>
    </>
  )
}

export default HikeRecovery