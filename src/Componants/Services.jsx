import React from 'react'
//import Spline from '@splinetool/react-spline';
// other way to use image as import imgname from 'path to that image ' and use in by {imgname}
const myimg ='IMG/logo512.png';// letter change image 

function Services() {
  return (
    <>
    <div className='w-full bg-slate-100 py-12 px-6'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img  className='w-[500px] mx-auto my-4' src={myimg} alt="/" />
            {/*<Spline  scene="https://prod.spline.design/Sh2KTf0Y6wOGwyKN/scene.splinecode" /> -- update this spline letter and replace with above image --*/}

            <div className='flex flex-col justify-center'>
                <p className='text-[#4d5ee8] font-bold py-5'>Join Programing Cources</p>
                <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold py-3'>Diproma Infotech training center 💻</h1>
                <p>Diproma training center , here get a hands on experience on new tech projects , learn while building a app , work in a team learn new Technology like UI/UX  , machine learning , data Science and web development</p>
                <button className='bg-[#4d5ee8] w-[200px] rounded-lg mx-auto py-5 px-6 font-bold text-black  mt-6'>Start Lerning</button>
            </div>



        </div>

    </div>



    <div className='w-full bg-slate-100 py-12 px-6'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            

            <div className='flex flex-col justify-center'>
                <p className='text-[#4d5ee8] font-bold py-5'>Need Web Services</p>
                <h1 className='md:text-4xl sm:text-2xl text-2xl font-bold py-3'>Diproma Web Solutions 💻</h1>
                <p>Build  websites , web app , web Services and more...</p>
                <button className='bg-[#4d5ee8] w-[200px] rounded-lg mx-auto py-5 px-6 font-bold text-black  mt-6'>Take a Look</button>
            </div>

            <img  className='w-[500px] mx-auto my-4' src={myimg} alt="/" />
            {/*<Spline  scene="https://prod.spline.design/Sh2KTf0Y6wOGwyKN/scene.splinecode" /> -- update this spline letter and replace with above image --*/}



        </div>

    </div>
    </>
  )
}

export default Services