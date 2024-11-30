import React from 'react'
import { CiStar } from "react-icons/ci";

const Movie = ({movieInfo}) => {

  movieInfo.directors = movieInfo.directors
    return (
    <div className="card" style={{ width: "80%", margin: "10px" }}>
      <div className="card-body d-flex justify-content-evenly">
        <div className="movie_info">
        <img src={movieInfo.image} alt="" style={{width: "400px",height: "400px",objectFit:"fill"}}/>
        </div>
        <div className='movie_info w-50'>        
        <h1 className="card-text">{movieInfo.title}</h1>
        <p className="timezone bg-success-subtle" style={{padding:"10px 10px"}}>
        <span className="card-text">Released: {movieInfo.year} <span className='bg-dark p-2 text-white m-1'>Anime Rating: <CiStar style={{fontSize: "24px",color: 'yellow'}}/>{movieInfo.ranking}</span></span>
        <p className="card-text">Type: {movieInfo.type}</p>
        </p>
        <p className="card-text">Description: {movieInfo.synopsis}</p>
        <p className="card-text">Genres: {movieInfo.genres.map((item)=> <button className='btn btn-outline-info m-2' key={item}>{item}</button>)}</p>
        <label htmlFor="imdb">For More Information: </label>
        <a className='link link-danger m-1' target='_blank' href={`${movieInfo.link}`}
        >Link</a>
        <p className="card-text">Alternataive Titles {movieInfo.alternativeTitles.map((item)=> <button className='btn btn-outline-info m-2' key={item}>{item}</button>)}</p>
        </div>
      </div>
    </div>
    )
  
}

export default Movie