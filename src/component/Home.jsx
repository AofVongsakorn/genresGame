import React, { useEffect, useState } from 'react'
import Genres from './Genres'
import GlobalApi from '../Services/GlobalApi'
import Banner from './Banner'
import TrendingGames from './TrendingGames'

const Home = () => {

  const [allGameList, setallGameList] = useState() 

  useEffect(() => {
      getAllGamesList();
  },[])

  const getAllGamesList = () => {
    GlobalApi.getAllGamesList.then((res) => {
      setallGameList(res.data.results)
    })
  }
  return (
    <div className='grid grid-cols-4 px-8 mt-4'>
        <div className='h-full  md:block'>
          <Genres/>
        </div>
        <div className='md:col-span-3'>
          { allGameList?.length>0?
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList}/>
          </div>
          : null }
        </div>
    </div>
  )
}

export default Home