import React, { useContext } from 'react'
import Movie from './Movie'
import { MovieListContent } from '../store/movies-store-list'
import Loading from './Loading'

const MoviesLIst = () => {
  const {movieslist} = useContext(MovieListContent)
  console.log(movieslist)
  
  return (
    <div className='movielist_container'>
    {movieslist.length === 0 && <Loading/>}
     {movieslist.map((movie,index)=>(
      <Movie movieInfo={movie} key={`${movie.title}${index}`}></Movie>
     ))}
    </div>
  )
}

export default MoviesLIst

