import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieListContent } from '../store/movies-store-list'
import Loading from './Loading'
import WelcomeMessage from './WelcomeMessage'

const MoviesLIst = () => {
  const {movieslist,allFechingStatus} = useContext(MovieListContent)
  
  let isfetched = allFechingStatus.isfetched
  return (
    <div className='movielist_container'>
    {!isfetched && movieslist.length === 0 && <Loading/>}
    {isfetched && movieslist.length === 0 && <WelcomeMessage/>}
     {movieslist.map((movie,index)=>(
      <Movie movieInfo={movie} key={movie["_id"]}></Movie>
     ))}
    </div>
  )
}

export default MoviesLIst

