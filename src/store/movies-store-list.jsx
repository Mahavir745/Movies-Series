import { createContext, useEffect, useReducer, useState } from "react"

export const MovieListContent = createContext(
  {
    movieslist: [],
    showslist: [],
    headerTitle:{},
    addMovies: () => { },
    addShows: ()=> {}
  }
)

const HandleMoviesReducer = (currentMovielist, action) => {
  let newMovieList = currentMovielist;
  if (action.type === "ADD_MOVIES") {
    newMovieList = action.payload.movies
  }
  return newMovieList;
}

const HandleShowsReducer = (currentShowslist, action) => {
  let newShowslist = currentShowslist;
  if(action.type === "ADD_SHOWS"){
    newShowslist = action.payload
  }
  return newShowslist;
}
const MoviesStoreProvider = ({ children }) => {

  const [movieslist, dispatchedmovie] = useReducer(HandleMoviesReducer, [])
  const [showslist, dispatchedshows] = useReducer(HandleShowsReducer, [])


  const addMovies = (movies) => {
    dispatchedmovie({
      type: "ADD_MOVIES",
      payload: {
        movies
      }
    })
  }

  //! for movies -->
  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;

    const url = 'https://moviesverse1.p.rapidapi.com/new-horror';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a1c3504043mshb437baae126e479p159a82jsn012bad912a12',
        'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
      }
    };

    fetch(url, options, { signal })
      .then(res => res.json())
      .then((data) => {
        addMovies(data.list)
      })

    return (
      () => {
        controller.abort()
      }
    )
  }, [])

  const addShows = (shows) =>{
    dispatchedshows({
      type: "ADD_SHOWS",
      payload: shows
    })
  }
  //! for shows -->
  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;

    const url = 'https://movies-api14.p.rapidapi.com/shows';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a1c3504043mshb437baae126e479p159a82jsn012bad912a12',
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
      }
    };

    fetch(url, options,{signal})
      .then(res => res.json())
      .then((data) => {
        // console.log(data.movies)
        addShows(data.movies)
      })

      return (
        ()=>{
          controller.abort()
        }
      )
  },[])

  //! for headline
  const [selectedtab,setSelectedTab] = useState("Horror Movies")
  const headerTitle = {
    selectedtab,
    setSelectedTab
  }

  return (
    <MovieListContent.Provider value={
      {
        headerTitle,
        movieslist,
        showslist,
        addMovies,
        addShows,
      }
    }>
      {children}
    </MovieListContent.Provider>
  )
}

const defaultData = [
  {
    title: "Don't move",
    timeline: "1hr 30m",
    image: "url",
    starsList: ["mohan", "rohan",],
    releasePeriod: "2024",
    imdbRating: "5.8 (27k)",
    description: "a new movie is added",
    directors: ["mahavir", "sonna"]
  },
  {
    title: "Don't move",
    timeline: "1hr 30m",
    image: "url",
    starsList: ["mohan", "rohan",],
    releasePeriod: "2024",
    imdbRating: "5.8 (27k)",
    description: "a new movie is added",
    directors: ["mahavir", "sonna"]
  }
]

export default MoviesStoreProvider;