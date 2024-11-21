import React, { useContext } from 'react'
import { MovieListContent } from '../store/movies-store-list'
import Show from './Show'
import Loading from './Loading'


const ShowList = () => {

  const {showslist} = useContext(MovieListContent)
  console.log(showslist)
  

  return (
    <div className='movielist_container'>
      {showslist.length === 0 && <Loading/> }
      {showslist.map(show => <Show key={show.id} show={show}/>)}
    </div>
    
  )
}

export default ShowList