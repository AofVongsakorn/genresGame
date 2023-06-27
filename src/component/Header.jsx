import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/logoGame.png'
import { BiSearchAlt2 } from "react-icons/bi"
import { BsSunFill } from "react-icons/bs"
import { BsFillMoonFill } from "react-icons/bs"
import { ThemeContext } from './ThemeContext'

const Header = () => {
    
    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        // console.log(theme);
    }, [])

    return (
        <div className='flex flex-row items-center pt-3 px-2'>
            <img src={logo} width={60} height={60} className='bg-white' />
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