import React, { useEffect, useState } from 'react'
import Genres from './Genres'
import GlobalApi from '../Services/GlobalApi'
import Banner from './Banner'
import TrendingGames from './TrendingGames'
import GameByGenres from './GameByGenres'

const Home = () => {

  const [allGameList, setallGameList] = useState()
  const [gameListByGenres, setGamelistByGenres] = useState([])
  const[selectGenresName, setSelectGenresName] = useState('Action')

  useEffect(() => {
    getAllGamesList();
    getGameListByGenreID(4);
  }, [])

  const getAllGamesList = () => {
    GlobalApi.getAllGamesList.then((res) => {
      setallGameList(res.data.results)
    })
  }

  const getGameListByGenreID = (id) => {
    GlobalApi.getGameListByGenreID(id).then((res) => {
      setGamelistByGenres(res.data.results)
    })
  }
  return (
    <div className='grid grid-cols-4 px-8 mt-4'>
      <div className='h-full  md:block'>
        <Genres 
        setGenresId={(setGenresId) => {getGameListByGenreID(setGenresId)}}
        selectGenresName={(name) => {setSelectGenresName(name)}}/>
      </div>
      <div className='md:col-span-3 col-span-4'>
        {allGameList?.length > 0 && gameListByGenres.length>0?
          <div>
            <Banner gameBanner={allGameList[0]} />
            <TrendingGames gameList={allGameList} />
            <GameByGenres gameList={gameListByGenres} gameName={selectGenresName}/>
          </div>
          : null}
      </div>
    </div>
  )
}

export default Home