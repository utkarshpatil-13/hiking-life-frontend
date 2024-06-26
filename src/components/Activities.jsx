import React from 'react'
import image1 from '../assets/images/place_your_image_here_dou_6.jpg'
import image2 from '../assets/images/shape_28.png'
import image3 from '../assets/images/shape_33.png'
import image4 from '../assets/images/shape_14.png'
import image5 from '../assets/images/shape_12.png'
import image6 from '../assets/images/shape_30.png'
import image7 from '../assets/images/shape_25.png'

const Activities = () => {
  return (
    <>
        <div className='relative h-screen overflow-hidden my-20'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image1})`}}>
                {/* <img src={image2} className='absolute mx-auto right-0 bottom-0' alt="" /> */}
                <img src={image4} className='absolute mx-auto left-0 top-[-3vw]' alt="" />
                <img src={image3} className='absolute mx-auto left-0 top-0' alt="" />
                <img src={image5} className='absolute mx-auto right-0 bottom-[-2vw]' alt="" />
                <img src={image6} className='absolute mx-auto right-0 bottom-0' alt="" /> 
            </div>
            <div className='relative z-10 text-white mx-10 flex gap-5 mt-20 max-md:flex-col'>
                <div className='flex flex-col justify-center gap-10 text-white w-[40vw] mt-20 max-md:w-full'>
                    <h2 className='text-5xl font-bold font-handwritten text-[#fd5f00] max-md:leading-tight max-md:text-center max-md:text-white'>WALKING IN NATURE AS A <span className='max-md:text-black md:hidden'>RECREATIONAL ACTIVITY</span><span className='max-md:hidden'>RECREATIONAL ACTIVITY</span></h2>
                    <h3 className='text-2xl text-slate-500 w-[15vw] max-md:text-black max-md:text-4xl max-md:text-semibold max-md:text-center max-md:w-full'>.ACTIVITIES</h3>
                    <p className='text-xl w-[20vw] max-md:w-full max-md:text-center'>Lorem ipsum dolor sit amet consectetur adip.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Activities