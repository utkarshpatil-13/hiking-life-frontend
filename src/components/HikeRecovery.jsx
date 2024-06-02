import React from 'react'
import image1 from '../assets/images/shape_18.png'
import image2 from '../assets/images/place_your_design_here_do_2.jpg'
import image3 from '../assets/images/place_your_design_here_do_3.jpg'
import image4 from '../assets/images/place_your_design_here_do.jpg'
import image5 from '../assets/images/place_your_image_here_dou_7.jpg'

const HikeRecovery = () => {
  return (
    <>
        <div className='h-fit w-[90vw] mx-auto p-10 flex justify-center gap-10'>
            <div>
                <img src={image1} alt="" />
            </div>
            <div className=''>
                <div className='mb-10'>
                    <h2 className='text-3xl font-bold w-[20vw]'>HOW TO RECOVER FROM A HIKE</h2>
                    <span className='px-20 bg-[#2fc8e1] text-[5px]'></span>
                </div>
                <div className='flex gap-20'>
                    <div className='text-xl'>
                        <div className='flex gap-5 items-center mt-4'>
                            <img src={image2} alt="" />
                            <div className='w-[20vw]'>
                                <i className='block'>- Lorem ipsum</i>
                                <i className='block'>- Dolor sit amet consectetur</i>
                                <i className='block'>- Adipiscing elit aptent - Torquent, interdum</i>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center mt-4'>
                            <img src={image3} alt="" />
                            <div className='w-[20vw]'>
                                <i className='block'>- Fusce etiam augue - Dignissim at euismod - Libero montes,</i>
                                <i className='block'>- Adipiscing elit aptent - Torquent, interdum</i>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center mt-4'>
                            <img src={image4} alt="" />
                            <div className='w-[20vw]'>
                                <i className='block'>- Libero montes,</i>
                                <i className='block'>- Adipiscing elit aptent</i>
                                <i className='block'>- Torquent, interdum</i>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src={image5} className='rounded-full w-[28vw] h-[55vh] mb-5' alt="" />
                        <h2 className='text-3xl w-[24vw] text-[#2fc8e1] font-handwritten'>MAKE SURE YOUR GEAR FITS</h2>
                    </div>
                </div>
            </div>
            <div>
                <img src={image1} alt="" />
            </div>
        </div>
    </>
  )
}

export default HikeRecovery