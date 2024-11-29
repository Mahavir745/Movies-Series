import React from 'react'
import { CiStar } from "react-icons/ci";

const Anime = ({Anime}) => {
  return (
    <div className="card" style={{ width: "80%", margin: "10px" }}>
    <div className="card-body d-flex justify-content-evenly">
      <div className="movie_info">
      <img src={Anime.image} alt="" style={{width: "400px",height: "400px",objectFit:"fill"}}/>
      </div>
      <div className='movie_info w-50'>        
      <h1 className="card-text">{Anime.title}</h1>
      <p className="timezone bg-success-subtle" style={{padding:"10px 10px"}}>
      <span className="card-text">Released: {Anime.releaseDate} <span className='bg-dark p-2 text-white m-1'>IMDB Rating: <CiStar style={{fontSize: "24px",color: 'yellow'}}/>{Anime.voteAverage}</span></span>
      <p className="card-text">Orginal Language: {Anime.originalLanguage}</p>
      </p>
      <p className="card-text">Description: {Anime.overview}</p>
      <p className="card-text">Directors: {Anime.genres.map((item)=> <button className='btn btn-outline-info m-2' key={item}>{item}</button>)}</p>
      </div>
    </div>
  </div>
  )
}

export default Anime