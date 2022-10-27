import React from 'react'
import dev from './assets/dev.png'

export default function Hero() {
  return (
    <div className='w-full h-auto md:h-[300px] bg-slate-300'>
        <div className='md:grid block  md:grid-cols-2 justify-between md:gap-9 px-8'>
            <div>
                <h1 className=' font-bold text-2xl py-8'>
                    The best React Instructors on the Web.
                    </h1> 
                    <p className='pb-5'>Start your journey as a developer with us today</p>
                    <button>Get Started</button>
            </div>

            <div className='md:ml-auto'>
                <img src={dev} alt="developer" className='h-[300px]' />
            </div>





        </div>


    </div>
  )
}
