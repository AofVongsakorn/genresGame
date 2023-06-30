import React, { useEffect } from 'react'

const Banner = ({ gameBanner }) => {

    useEffect(() => {
   
    }, [])
    return (
        <div className='relative w-full '>
            <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full'>
                <h2 className='text-[24px] text-white font-bold'>{gameBanner.name}</h2>
                <button className='text-white bg-blue-700 px-1 p-1 rounded-lg'>Get now</button>
            </div>
            <img src={gameBanner.background_image} className='md:h-[400px] w-full object-cover rounded-xl'/>
        </div>
    )
}

export default Banner