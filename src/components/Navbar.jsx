import React,{useState} from 'react';
import { GiBookStorm} from "react-icons/gi";
import {RiBarChartHorizontalFill} from "react-icons/ri";
import{AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
  const[nav,setNav] =useState(false)

  const handleNav=() => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between h-24 text-white bg-no-repeat bg-transparent w-full items-center'>
      <h1 className='text-4xl justify-start flex m-5 font-bold font-Berserker'><GiBookStorm/>BOOKIO</h1>
      <nav>
        <ul className='hidden md:flex font-Raleway'>
            <li  className='p-4 text-xl font-semibold text-[#ff1a1a]  hover:font-bold hover:text-[#660000]'><a href="#Home">HOME</a></li>
            <li  className='p-4 text-xl font-semibold text-[#ff1a1a] hover:font-bold  hover:text-[#660000]'><a href="/stories">STORIES</a></li>
            <li  className='p-4 text-xl font-semibold text-[#ff1a1a] hover:font-bold hover:text-[#660000]'><a href="/book">BOOK</a></li>
            <li  className='p-4 text-xl font-semibold text-[#ff1a1a] hover:font-bold  hover:text-[#660000]'><a href="/study">STUDY</a></li>
            <li  className='p-4 text-xl font-semibold text-[#ff1a1a] hover:font-bold  hover:text-[#660000]'><a href="/novels">NOVELS</a></li>
        
        </ul>
        </nav>
        <div className='flex'>
          
          <a href="/mycart" className='border-2 px-3 py-2 rounded bg-violet-500 border-violet-500 mr-5 md:shrink-0 hover:bg-violet-800 hover:border-violet-800 font-bold hidden md:block'>MY CART</a>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {!nav ?<RiBarChartHorizontalFill size={25}/> :  <AiOutlineClose size={25}/>}
          
        </div>
        <div className={nav ?'fixed h-full left-0 top-0 w-[60%] border-r border-r-black bg-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-4xl justify-start flex m-5 font-bold'><a href="/home">BOOKIO</a></h1>
          <ul className=' uppercase p-4 text-xl'>
          <li className='p-4 border-l-4 border-red-800  '><a href="">MY ORDERS</a></li>
            <li  className='p-4 border-l-4'><a href="">MY CARTS</a></li>
            <li  className='p-4 border-l-4 border-red-800'><a href="">OFFERS</a></li>
            <li  className='p-4 border-l-4'><a href="">SHOP BY CATEGORY</a></li>
          </ul>
        </div>
       
    </div>
  )
}

export default Navbar
