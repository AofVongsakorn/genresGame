import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

const Genres = () => {

    const [genresList, setGenresList] = useState([])
    const [activeIndex, setActiveIndex] = useState()

    useEffect(() => {
        getGenreList();
    },[])

    const getGenreList= () =>{
        GlobalApi.getGenreList.then((res) => {
            setGenresList(res.data.results);
           
        })
    }
  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white '>Genres</h2>
        {genresList.map((item, index) => {
            return(
            <div 
            key={index}
            onClick={()=> setActiveIndex(index)}
            className={`flex flex-row gap-2 items-center mb-2 cursor-pointer
            hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${activeIndex==index?'bg-gray-300 dark:bg-gray-600' : null}`} >
                <img src={item.image_background} 
                className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300 ${activeIndex==index? "scale-105" : null}`}  />
                <h3 className={`dark:text-white text-[20px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex==index? "font-bold" : null}`}>{item.name}</h3>
            </div>
            )
        })}

    </div>
  )
}

export default Genres