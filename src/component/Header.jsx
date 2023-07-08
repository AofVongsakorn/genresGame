import React, { useContext, useEffect, useState } from 'react'
import { FaGamepad} from "react-icons/fa" 
import { BiSearchAlt2 } from "react-icons/bi"
import { BsSunFill } from "react-icons/bs"
import { AiOutlineMenu } from "react-icons/ai"
import { BsFillMoonFill } from "react-icons/bs"
import { ThemeContext } from './ThemeContext'

const Header = () => {
    
    const { theme, setTheme, setStatusbar } = useContext(ThemeContext)

    useEffect(() => {
        // console.log(theme);
    }, [])
  
    
    return (
        <div className='flex flex-row items-center pt-3 px-2'>
            <FaGamepad className='hidden md:block w-[70px] h-[70px] fill-black dark:fill-white ' />
            <AiOutlineMenu  onClick={() => {setStatusbar(prev => !prev)}} className='md:hidden w-[50px] h-[50px] fill-black dark:fill-white ' />

            <div className='flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full '>
                <BiSearchAlt2 />
                <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
            </div>
            <div className='text-[25px] bg-slate-200 rounded-full p-1 text-black cursor-pointer'>
                {theme == 'light' ?
                    <BsFillMoonFill onClick={() => {setTheme('dark'); localStorage.setItem("Theme" , 'dark')}} />
                    : <BsSunFill onClick={() => {setTheme('light'); localStorage.setItem("Theme", 'light')}} />}

            </div>
        </div>
    )
}

export default Header