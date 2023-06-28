import React from 'react';
import Typed from 'react-typed';
//import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <div className=' text-white'>
        <div className='max-w-[1000px] mt[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#4d5ee8] font-bold p-2 font-xl'>Step into world of Technology with</p>
            <h1 className='md:text-7xl sm:text-5xl text-4xl font-bold md:py-6'>Diproma Infotech</h1>
            <div className='flex justify-center items-center'>
            <p className='md:text-4xl sm:text-2xl text-xl font-bold text-gray-400 py-3'>start your learning journey from-</p>
            {/** React typed to change the last string in a interval of time randomly */}
            <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#4d5ee8]' strings={['Linux','JAVA' , 'Full-Stack','C','C++','Python','Data-Science']} typeSpeed ={180} backSpeed={140} loop/>
            </div>
            <button className='bg-[#4d5ee8] w-[200px]  rounded-md mx-auto py-3 px-6 font-bold text-black  mt-6'>Get Started</button>
          {/*<div className='top-10'>
           <Spline  scene="https://prod.spline.design/Sh2KTf0Y6wOGwyKN/scene.splinecode" />
           </div>*/}

        </div>
        

    </div>
  )
}

export default Hero