import React from 'react'

const Show = ({show}) => {

  return (
    <div className="card" style={{ width: "80%", margin: "10px" }}>
      <div className="card-body d-flex justify-content-evenly">
        <div className="movie_info">
        <img src={`${show.poster_path}`} alt="" style={{width: "400px",height: "400px",objectFit:"fill"}}/>
        </div>
        <div className='movie_info w-50'>        
        <h1 className="card-text">{show.title}</h1>
        <p className="timezone bg-success-subtle" style={{padding:"10px 10px"}}>
        <span className="card-text">Realesed: {show.first_aired.split("-").reverse().join("-")}</span>
        <p className="card-text">Type: {show.contentType} </p>
        </p>
        <p className="card-text">Genres: {show.genres.map((item)=> <button key={item} className='btn btn-danger m-1'>{item}</button>)}</p>
        <p className="card-text">{show.overview}</p>

        </div>
      </div>
    </div>
  )
}

export default Show