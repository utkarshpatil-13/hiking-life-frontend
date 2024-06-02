import React from 'react'
import image1 from '../assets/images/place_your_image_here_dou.jpg'
import image2 from '../assets/images/shape_3.png'

const HikingGuide = () => {
  return (
    <>
        {/* <div className='relative'>
            <div className='absolute inset-0 object-cover bg-center'></div>
            <div className='relative w-[80vw] mx-auto p-10'>
                    <img src={image1} className='w-full' alt="hiking" />
                </div>
                <div className='relative z-10 flex flex-col justify-center gap-4 mx-10 h-full'>
                    <h2 className='text-5xl font-bold font-handwritten'>BIG BEND NATIONAL PARK HIKING GUIDE</h2>
                    <p>THIS HIKE IS THE NEXT BEST OPTION</p>
                    <p>Lorem, ipsum.</p>
                    <button className='p-2 border-2 border-[#2fc8e1] w-[20vw] bg-transparent'>See more</button>
                </div>
            
        </div> */}

        <div className="relative h-[80vh] max-md:h-[70%] flex items-center justify-start my-20">
            <div className={`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url(${image1})`}}></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='relative z-10 flex flex-col justify-center items-center gap-7 mx-10 h-full text-white mt-10'>
                <h2 className='text-4xl font-bold font-handwritten text-center'>THE ASANAS PURIFY OUR BODY AND KEEP IT HEALTHY, MAKING IT A SUITABLE VEHICLE FOR THE SOUL.</h2>
                {/* <p className='text-2xl font-semibold'>THIS HIKE IS THE NEXT BEST OPTION</p>
                <p className='text-2xl'>Lorem, ipsum.</p> */}
                <img src={image2} className='w-20 h-20' alt="" />
                <button className='p-2 border-2 border-[#2fc8e1] w-[20vw] bg-transparent text-xl font-semibold'>See more</button>
                </div>
        </div>
    </>
  )
}

export default HikingGuide