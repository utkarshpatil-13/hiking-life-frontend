import React from 'react'
import image1 from '../assets/images/shape_8.png'
import image2 from '../assets/images/place_your_image_here_dou_5.jpg'
import image3 from '../assets/images/place_your_image_here_dou_4.jpg'
import image4 from '../assets/images/place_your_image_here_dou_3.jpg'

const PlacesToVisit = () => {
  return (
    <>
        <div className='h-fit w-[90vw] mx-auto p-10 max-md:w-full max-md:p-3 max-md:mb-10'>
            <div className='flex flex-col'>
                <div className='mb-20'>
                    <h3 className='text-4xl w-[30vw] font-bold max-md:text-center max-md:w-full'>PLACES TO VISIT IN AUTUMN</h3>
                </div>
                <div className='flex justify-evenly mb-10 gap-4 max-md:flex-col'>
                    <div className='flex flex-col gap-6 text-center mt-10'>
                        <img src={image2} className='w-44 h-44 mx-auto rounded-full max-md:w-64 max-md:h-64 max-md:flex max-md:justify-center' alt="" />
                        <img src={image1} className='w-2 h-5' alt="" />
                        <h2 className='text-2xl font-bold'>Mountain Loop</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
                        <p className='pt-[2px] bg-slate-500'></p>
                        <p className='text-2xl'><b>Location: </b>0.3 miles</p>
                    </div>
                    <div className='flex flex-col gap-6 text-center mt-10'>
                        <img src={image3} className='w-44 h-44 mx-auto rounded-full max-md:w-64 max-md:h-64 max-md:flex max-md:justify-center' alt="" />
                        <img src={image1} className='w-2 h-5' alt="" />
                        <h2 className='text-2xl font-bold'>National Park</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
                        <p className='pt-[2px] bg-slate-500'></p>
                        <p className='text-2xl'><b>Location: </b>0.2 miles</p>
                    </div>
                    <div className='flex flex-col gap-6 text-center mt-10'>
                        <img src={image4} className='w-44 h-44 mx-auto rounded-full max-md:w-64 max-md:h-64 max-md:flex max-md:justify-center' alt="" />
                        <img src={image1} className='w-2 h-5' alt="" />
                        <h2 className='text-2xl font-bold'>Canyon Trail</h2>
                        <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipiscing, elit molestie posuere</p>
                        <p className='pt-[2px] bg-slate-500'></p>
                        <p className='text-2xl'><b>Location: </b>0.6 miles</p>
                    </div>
                </div>
                <div className='text-center'>
                    <button className='p-2 border-2 border-[#2fc8e1] w-[20vw] bg-transparent text-xl font-semibold max-md:w-[60vw]'>See more</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default PlacesToVisit