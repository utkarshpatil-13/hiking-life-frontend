import React from 'react'
import Header from '../Header'
import image1 from '../assets/images/place_your_image_here_dou_10.jpg'
import image2 from '../assets/images/shape_28.png'
import image3 from '../assets/images/shape_33.png'
import image4 from '../assets/images/shape_31.png'
import image5 from '../assets/images/shape_29.png'
import image6 from '../assets/images/shape_30.png'
import image7 from '../assets/images/shape_25.png'
import Info from './Info'
import RockClimbing from './RockClimbing'
import HikingGuide from './HikingGuide'
import HikeRecovery from './HikeRecovery'
import Activities from './Activities'
import PlacesToVisit from './PlacesToVisit'
import Activities2 from './Activities2'

const IndexPage = () => {
  return (
    <>
        <div className='relative h-screen max-md:w-full'>
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${image1})`}}>
                <img src={image2} className='absolute mx-auto right-0 bottom-0' alt="" />
                <img src={image4} className='absolute mx-auto left-0 top-[-4vw] max-md:top-2' alt="" />
                <img src={image5} className='absolute mx-auto right-0 bottom-0' alt="" />
                <img src={image3} className='absolute mx-auto left-0 top-0' alt="" />
                <img src={image6} className='absolute mx-auto right-0 bottom-0' alt="" />
            </div>
            <Header/>
            <div className='relative z-10 text-white mx-10 flex gap-5 mt-20 max-md:text-center'>
                <div className='max-md:hidden'>
                    <img src={image7} className='w-2 h-10 pt-3' alt="" />
                </div>
                <div className='flex flex-col justify-center gap-10'>
                    <h2 className='text-5xl font-bold max-md:leading-tight'>Discover your next Hike</h2>
                    <h3 className='text-2xl text-slate-500 w-[15vw] max-md:w-full max-md:text-center'>DISCOVER YOUR NEXT HIKE</h3>
                    <p className='text-xl w-[20vw] max-md:w-full max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
                </div>
            </div>
        </div>
        <Info/>
        <RockClimbing />
        <HikeRecovery />
        <Activities />
        <PlacesToVisit />
        <Activities2/>
        <HikingGuide />
    </>
  )
}

export default IndexPage