import React from 'react';
//import python from '../../public/python.png';

// file urls 
const DevOps = 'http://localhost:3000/DEVOPS.PDF';
const Redhat = 'http://localhost:3000/Redhat.PDF';

function Cources() {
// for syllabus downloading
const downloadFileAtURL =(url)=>{
 
  
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download",fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();

 

};

  return (
    <>
    <div className='w-full py-[5rem] px-4 bg-slate-100'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8 md:gap-16 md:max-w-full'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/Red_Hat_logo.svg.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Red Hat</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>RHCSA | RHCE</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button onClick={()=>{downloadFileAtURL(Redhat)}} className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

            {/** card  */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/java-removebg-preview.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Java</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

              {/** card  */}
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/cloud-removebg-preview.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Cloud Computing</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

                {/** card  */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/c.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>C & C++</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>PROGRAMMING LANGANGUE</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

                {/** card  */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/Software.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Software Testing</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

                {/** card  */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/DevOps.webp' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>DevOps</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Advanced DevOps

               </p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button onClick={()=>{downloadFileAtURL(DevOps)}} className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

        </div>

        {/**Second plate of six cards edit letter  */}

        <div className='max-w-[1240px] mx-auto grid md:grid-cols-6 gap-8 md:gap-16 md:max-w-full mt-10'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/Cyber Security.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Cyber Security</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

            {/** card  */}
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/ethical_hacking-removebg-preview.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Ethical Hacking</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

              {/** card  */}
              <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/ux-ui-logo.svg' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>UI / UX Design</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

                {/** card  */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/Hardware___Networking-removebg-preview.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Hardware & Networking</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

                {/** card  */}
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/PHP-logo.svg.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Php</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

                {/** card  */}
                <div className='w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 md:w-auto'>
                <img  className='w-20 mx-auto mt-[-3rem] ' src='IMG/python.png' alt="" />
                <h3 className='text-2xl font-bold text-center py-6 h-40'>Python</h3>
                <p className='text-center text-2xl font-bold '>6 months duration </p>
               <div className='text-center font-medium '> <p className='py-1 border-b mx-4'>Basic | Advanced</p> </div>
               <div className='flex mx-auto gap-10 mt-1 md:gap-2'>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Syllabus</button>
               <button className='bg-[#4d5ee8] w-[150px] rounded-lg mx-auto py-2 px-6 font-bold text-black  mt-6 md:w-[80px] md:px-1'>Details</button>
               </div>
            </div>

        </div>

    </div>
    </>
  )
}

export default Cources