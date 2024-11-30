import React, { useContext } from 'react'
import { MovieListContent } from '../store/movies-store-list'
import Show from './Show'
import Loading from './Loading'


const ShowList = () => {

  const {showslist,allFechingStatus} = useContext(MovieListContent)
  let isfetched = allFechingStatus.isfetched
  return (
    <div className='movielist_container'>
      {!isfetched && showslist.length === 0 && <Loading/> }
      {isfetched && showslist.length === 0 && <WelcomeMessage/>}
      {showslist.map(show => <Show key={show.titile} show={show}/>)}
    </div>
    
  )
}

export default ShowList