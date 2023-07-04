import React from 'react';
import {GiBookStorm} from 'react-icons/gi';

const Footer = () => {
  return (
    <div className=' rounded-sm bg-gradient-to-b from-black to-gray-900 font-Raleway '>
      <h1 className='text-3xl pt-10 pb-5 ml-16 text-white justify-start flex  font-bold'><GiBookStorm/>BOOKIO</h1>
      <section className='  text-white grid grid-cols-1 gap-20 sm:grid-cols-2 md: md:grid-cols-4 md:gap-8  ml-10'>
        <div className='max-w-[28vw] ml-[10px]'>
        
        <p className='font-bold p-2 text-md text-[#00df9a]'>Some books leave us free and some books make us free.</p>
        <br />
        <br />
        <h1 className='font-bold '>Copyright &#169; 2023</h1>
        <br />
        </div>

        <div className='grid text-lg md:ml-8'>
          <h1 className='text-xl font-bold'>Themes</h1>
          
          <a className=' text-slate-500 hover:text-slate-100 ' href="">Contact Us</a>
          <a className='  text-slate-500  hover:text-slate-100 ' href="">Services</a>
          <a className='  text-slate-500  hover:text-slate-100 ' href="">Pricings</a>
          <a className='  text-slate-500  hover:text-slate-100 ' href="">Help Desk</a>
        </div>

        <div className='grid '>
          <h1 className='text-xl font-bold'>Resources</h1>
        
          <a className='  text-slate-500  hover:text-slate-100 ' href="">Magazines</a>
          <a className='  text-slate-500  hover:text-slate-100 ' href="">Novels</a>
          <a  className='  text-slate-500  hover:text-slate-100' href="">Study Materials</a>
          <a  className='  text-slate-500  hover:text-slate-100' href="">Biography</a>
          <a  className='  text-slate-500  hover:text-slate-100' href="">Documentary</a>
        </div>

        <div className='grid mb-10 '>
          <h1 className='text-xl font-bold'>Follow Us On</h1>
          <br />
         <img className='h-[2.2rem] w-[2.5rem] mb-2 ' src="/src/img/insta.png" alt="" />
         <img className='h-[2.2rem] w-[2.5rem] mb-2' src="/src/img/github.png" alt="" />
         <img className='h-[2.2rem] w-[2.5rem] mb-2' src="/src/img/linkdin.png" alt="" />
        </div>
        
      </section>
    </div>
  )
}

export default Footer
 