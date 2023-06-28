import React from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai' // menu icons 
import { useState } from 'react'

function Nav() {
     const [nav , setNav] = useState(false)

    const handelNav = () => {
        setNav(!nav) // initially hidden and the view for laptop size 
    }

  return (
    <>
    <div className= ' text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#4d5ee8] font-serif'>DIPROMA.</h1>
      <ul className=' hidden md:flex'>
        <li className='p-4 '>Home</li>
        <li className='p-4 '>About</li>
        <li className='p-4 '>Services</li>
        <li className='p-4 '>Blog</li>
        <li className='p-4 '>Contact</li>
      </ul>
      <div onClick={handelNav} className='block md:hidden'>
        {nav?<AiOutlineClose size={20}/>:<AiOutlineMenu size={20}/>}
        
      </div>
       
      {/** This is for mobile view  */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] border-r-gray-800 h-full bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className='w-full text-3xl font-bold text-[#4d5ee8] pt-4 m-4 font-serif'>DIPROMA.</h1>
        <ul className=' uppercase'>
        <li className='p-4 border-b border-gray-700'>Home</li>
        <li className='p-4 border-b border-gray-700'>About</li>
        <li className='p-4 border-b border-gray-700'>Services</li>
        <li className='p-4 border-b border-gray-700'>Blog</li>
        <li className='p-4 '>Contact</li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Nav

