import React, { useEffect } from 'react'

const TrendingGames = ({ gameList }) => {

    useEffect(() => {

    }, [])
    return (

        <div className='mt-5 hidden md:block'>
            <h2 className='font-bold text-[30px] dark:text-white'>Trending Game</h2>

            <div className='md:grid md:grid-cols-3 hidden lg:grid-cols-4 gap-3'>
                {gameList.map((item, index) => index < 4 && (
                    <div className='bg-[#76a8f75e] rounded-lg group mt-4
                    hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
                        <img src={item.background_image} 
                        className='h-[270px] rounded-t-lg object-cover' />
                        <h2 className='text-[20px] p-2 dark:text-white font-bold' >{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TrendingGames