import React from 'react'
import {NavLink , Link} from "react-router-dom"

function Nav() {
  return (
    <header >
        <div className='container mx-auto'>
        <div className='flex justify-between mx-20'>
            <div className='w=1/4'>
            <h1 className='text-4xl font-sans font-extrabold text-white p-4'>Logo</h1>
            </div>
            <div className='w=1/2 flex justify-center text-2xl items-center gap-20 font-bold font-sans text-white'>
                <NavLink
                to='/'
                 className={({isActive}) =>
                  `text-white
                  ${isActive ? 'text-blue-400' : 'text-white' }`
                }
                >
                  Home
                </NavLink>
                
            </div>
            <div className='w=1/4 flex justify-center items-center '>
                <button className='text-white bg-blue-400 rounded-xl p-2 text-lg font-medium'>Login/SignUp</button>
            </div>
        </div>
        </div>
    </header>
  )
}

export default Nav