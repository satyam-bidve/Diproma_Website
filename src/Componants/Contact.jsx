import React from 'react';
import {IoMdCall} from 'react-icons/io';
import {TbMail} from 'react-icons/tb';
import {GoLocation} from 'react-icons/go';
import {BsWhatsapp,BsInstagram} from 'react-icons/bs';
import {CiFacebook} from 'react-icons/ci';
import {FiLinkedin} from 'react-icons/fi';
function Contact() {

   // Onclick go to whatsapp messenger to send msg
    const handleClick = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=8208262804';
    }
  return (
    <>
    {/**Parent div  */}
    <div className='flex w-full min-h-screen justify-center items-center text-white'>
        <div className='w-full max-w-4xl p-8 rounded-xl shadow-xl flex flex-col space-y-8 md:flex-row md:space-x-10 md:space-y-0'>
         
         {/**Contact info */}
         <div className='flex flex-col justify-between'>
            <div>
                <h1 className='font-bold text-4xl tracking-wide my-3 text-[#4d5ee8]'>Contact Us</h1>
                <p className='pt-2 text-gray-300 text-sm'>Get in touch with us for more infoz.</p>
            </div>
            <div>{/** fon mail loc whatsaap */}
                <div className='flex px-4 pt-8 space-x-4'>
                    <IoMdCall size={20}/>
                    <span className='px-4'> +91 8208262804</span>
                </div>
                <div className='flex px-4 pt-8 space-x-4'>
                    <TbMail size={20}/>
                    <span className='px-4'><a href="mailto:satyambidve@gmail.com">Drop a mail</a></span>
                </div>
                <div className='flex px-4 pt-8 space-x-4'>
                    <GoLocation size={20}/>
                    <span className='px-4'>1st floor ,model colony ,jailRoad, Near Inox ,Nashikroad, Nashik</span>
                </div>
                <div className='flex px-4 pt-8 space-x-4'>
                    <BsWhatsapp size={20} onClick={handleClick} />
                    <span className='px-4'>+91 8208262804</span>
                </div>

            </div>
            {/**social icons */}
            <div className='flex justify-center space-x-7 mt-8 text-[#4d5ee8]'>
                <a className='hover:text-yellow-50' href="https://www.instagram.com/dipromainfotech"><BsInstagram size={25}/></a>
                <a className='hover:text-yellow-50' href="https://www.facebook.com/dipromainfotech"><CiFacebook size={30}/></a>
                <a className='hover:text-yellow-50' href="https://www.google.co.in/"><FiLinkedin size={30}/></a>
                <button className='hover:text-yellow-50' ><BsWhatsapp size={25} onClick={handleClick}/></button>
            </div>

         </div>
         
         {/**Contact form */}
         <div >
            <div className='bg-white rounded-xl shadow-sm shadow-white p8 text-black md:w-96'>
                <form action="https://formsubmit.co/97edb089639d38ea3717c7191f5ccbb2" method="POST" className='flex flex-col space-y-4'>
                <div className='mt-4 pt-4'></div>
                    <div>
                        <label htmlFor="" className='text-bold px-6'>Your Name :</label>
                    
                        <input type="text" name='name' placeholder='Enter your name' className=' ring-1 ring-gray-300  w-5/6 rounded-md px-6 py-2 outline-none mx-5 focus:ring-2 focus:ring-black' required/>
                    </div>
                    
                    <div className='md:flex-col' >
                        <label htmlFor="" className='text-bold px-6'>Email :</label>
                    
                        <input type="email" name='email' placeholder='Enter Adrees' className=' ring-1 ring-gray-300  w-5/6 rounded-md px-6 py-2 outline-none mx-5 focus:ring-2 focus:ring-black' required />
                    </div>
                   
                    <div>
                        <label htmlFor="" className='text-bold px-6 '>Mobile Number :</label>
                    
                        <input type="text" name='mobile' placeholder='Enter Mobile number' className=' ring-1 ring-gray-300  w-5/6 rounded-md px-6 py-2 outline-none mx-5 focus:ring-2 focus:ring-black' required />
                    </div>
                    
                    <div className='mb-4 pb-4'>
                        <label htmlFor="" className='text-bold px-6 '>Adress :</label>
                    
                        <input type="text" name='address' placeholder='Enter Adrees' className=' ring-1 ring-gray-300  w-5/6 rounded-md px-6 py-2 outline-none mx-5 focus:ring-2 focus:ring-black' />
                    </div>

                    <div className='mb-4 pb-4'>
                        <label htmlFor="" className='text-bold px-6 '>Cource :</label>
                    
                        <input type="text" name='cource' placeholder='Enter Cource you want to get' className=' ring-1 ring-gray-300  w-5/6 rounded-md px-6 py-2 outline-none mx-5 focus:ring-2 focus:ring-black' />
                    </div>
                    
                        <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-2 font-bold text-black '>Send message</button>
                        <input  className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-2 font-bold text-black' type="reset" value="Reset Form"/>


                        <div className='mb-4 pb-4' ></div>
                    
                    
                </form>

            </div>

         </div>
        
        
        </div>

    </div>
    </>
  )
}

export default Contact     