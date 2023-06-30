import React, { useEffect } from 'react'
import { AiFillStar, AiOutlineComment, AiFillFire } from "react-icons/ai"

const GameByGenres = ({ gameList,gameName }) => {

    useEffect(() => {

    }, [])
    return (
        <div>

            <h2 className='font-bold text-[30px] dark:text-white mt-5'>{gameName} Game</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 '>
                {gameList.map((item) => (
                    <div className='bg-[#76a8f75e] p-3 pb-8 rounded-lg  hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
                        <img src={item.background_image} className='w-full h-[80%] rounded-xl object-cover' />
                        <div className='flex flex-row gap-2 justify-start items-center'>
                            <h2 className='text-[18px] dark:text-white font-bold'>{item.name}</h2>
                            <div className='w-5 h-5 flex justify-center items-center rounded-sm text-[10px] bg-green-100 text-green-700 font-medium'>
                                <span>{item.metacritic}</span>
                            </div>
                        </div>

                        <div className='flex flex-row gap-1 text-[14px] dark:text-gray-300 text-gray-500'>
                            <div className='flex flex-row justify-center items-center gap-1'>
                                <AiFillStar className='fill-yellow-500' /> {item.rating}
                            </div>
                            <div className='flex flex-row justify-center items-center gap-1'>
                                <AiOutlineComment className='fill-gray-400' /> {item.reviews_count}
                            </div>
                            <div className='flex flex-row justify-center items-center gap-1'>
                                <AiFillFire className='fill-red-500' /> {item.suggestions_count}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameByGenres