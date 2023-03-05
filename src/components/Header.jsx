import React from 'react';
import Typed from 'react-typed';
import {GiBrainStem} from 'react-icons/gi';
import dropdown from '../img/390-scroll-down-2-auto-lineal.gif';


const Header = () => {
  return (
   <section className=' text-[#f7f7f5] '  id="Home">

    
    <div className='  max-w-[800px] mt-[56px] w-full h-[90vh] mx-auto text-center flex flex-col '>
      <p className='font-bold p-2 text-xl text-[#00df9a] font-Montserrat '>"Today a reader, tomorrow a leader.." </p>
      <br />
      <h1 className='md:text-7xl sm:text-6xl text-4xl bg-clip-text font-extrabold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 '>ONLINE BOOK STORE</h1>
      <br />
      
      <div>
        <p className='md:text-4xl sm:text-3xl text-xl font-Berserker'>
          Get <span className='text-yellow-200 font-bold '>20% Discount </span> for purchasing a 
        </p>
        <br />
        <Typed className='md:text-3xl sm:text-2xl text-2xl font-bold text-violet-800 font-Berserker' strings={['BOOK...','NOVELS...','MANGA...']} typeSpeed={120} backSpeed={140} loop />
      </div>
      <br />
      <div>
      <center><a href="#Hero1"><img className='h-[5rem] w-[5rem] mt-56 animate-bounce ' src={dropdown} alt="" /></a></center>
    </div>
    </div>

    
  
    
   </section>
  )
}

export default Header
