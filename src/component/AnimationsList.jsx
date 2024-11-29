import React, { useContext } from 'react'
import Anime from './Anime'
import { MovieListContent } from '../store/movies-store-list'
import Loading from './Loading'
import WelcomeMessage from './WelcomeMessage'

const AnimationsList = () => {
  const {animelist,isfetched} = useContext(MovieListContent)

  return (
    <div className='movielist_container'>
    {!isfetched && animelist.length === 0 && <Loading/>}
    {isfetched && animelist.length === 0 && <WelcomeMessage/>}

     {animelist.map((anime,index)=>(
      <Anime Anime={anime} key={anime.id}></Anime>
     ))}
    </div>
  )
}

export default AnimationsList