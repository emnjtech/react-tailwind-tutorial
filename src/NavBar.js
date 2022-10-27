import React from 'react'
import logo from './assets/curly.png'
import { Icon } from '@iconify/react';

import { useState } from 'react';

export default function NavBar() {
    const [Nav,setNav] = useState(false)

    function hideMenu(){
        setNav(!Nav)
    }
  return (
    <div className='w-full h-[80px] '> 
        <div className='px-4 flex justify-between items-center h-full w-full bg-blue-700'>
            <div className='items-center flex'>
                <img src={logo} className=' w-8' alt="my logo"/>
                <h1 className='text-white font-bold'>Curly Brackets</h1>
            </div>

            <div className='pr-4 flex '>
                <ul className=' hidden md:flex justify-between font-bold text-sm mr-10 text-white '>
                    <li >Home</li>
                    <li >Courses</li>
                    <li >Tutors</li>
                    <li >About Us</li>
                    <li className=' text-blue-300'>Sign In</li>
                </ul>

                <div className='md:hidden'>
               {!Nav? <Icon icon="dashicons:menu-alt3" className='text-white w-12'  onClick={hideMenu}/> :
                <Icon icon="akar-icons:circle-x-fill" className='text-white w-12' onClick={hideMenu}/>}
                </div>

            </div>

        </div>
        {Nav? <div className='md:hidden '>
            <ul className=' md:hidden  font-bold text-sm mr-10 text-white bg-black w-full p-4 absolute'>
                    <li>Home</li>
                    <li>Courses</li>
                    <li>Tutors</li>
                    <li>About Us</li><hr/>
                    <li className=' text-blue-300 p-2'>Sign In</li>
                </ul>

            </div> : ""}
    </div>
  )
}
