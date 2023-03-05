import React from 'react';

const Contact = () => {
  return (
    <div className='text-black  bg-slate-300 p-5 w-full h-[21rem] rounded-sm grid grid-cols-1 sm:grid-cols-2 lg:pl-24'>
        <div className='grid'>
        <h1 className='font-bold text-2xl pl-5 text-violet-800 font-Berserker'>Get in Touch</h1>
              <p className='font-semibold'>We'd Love to Hear from you</p>
        <img className='h-[15rem] w-[16rem] ' src="/src/img/981-consultation-lineal (1).gif" alt="" />

        
        </div>

        <div className="grid ">
        <h1 className=' max-w-[50rem] mt-5'>
             
              <form >
                <label className='font-bold '>Name</label>
                <br />
                <input className='mt-2 mb-4' type="text" />
                <br />
                <label className='font-bold  '>Email</label>
                <br />
                <input className='mt-2 mb-4' type="email" />
                <br />
                <label className='font-bold'>Queries</label>
                <br />
                <textarea  className='w-[14rem] mb-5 '></textarea>
                <br />
                <input className='border-2 bg-black text-white px-5 rounded-lg ' type="submit" />
              </form>
            </h1>
        </div>


    </div>
  )
}

export default Contact