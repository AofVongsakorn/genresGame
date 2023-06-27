import React, { useEffect } from 'react'

const TrendingGames = (gameList) => {

    useEffect(() => {
        console.log(gameList.gameList);
    }, [])
    return (
        <div>
           {gameList.gameList.map((item, index) => index<4 && (
            <div>
                <img src={item.background_image} />
            </div>
           ))}
        </div>
    )
}

export default TrendingGames