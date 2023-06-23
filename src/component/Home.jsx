import React from 'react'
import Genres from './Genres'

const Home = () => {
  return (
    <div className='grid grid-cols-4 px-8 mt-4'>
        <div className='h-full  md:block'>
          <Genres/>
        </div>
        <div className='md:col-span-3 bg-blue-400'>Game list</div>
    </div>
  )
}

export default Home