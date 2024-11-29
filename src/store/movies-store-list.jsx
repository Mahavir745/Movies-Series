import { act, createContext, useEffect, useReducer, useState } from "react"

export const MovieListContent = createContext(
  {
    movieslist: [],
    showslist: [],
    filterData: () => { },
    headerTitle: {},
    addMovies: () => { },
    addShows: () => { },
    isfetched: false,
  }
)

const HandleMoviesReducer = (currentMovielist, action) => {
  let newMovieList = currentMovielist;
  if (action.type === "ADD_MOVIES") {
    newMovieList = action.payload.movies
  }
  else if (action.type === "ADD_FILTER_MOVIES") {
    newMovieList = currentMovielist.filter((movie) => {
      let movieTitle = movie.title.toLowerCase()
      if (movieTitle.includes(action.payload.filterInput.toLowerCase())) {
        return movie
      }
    })
  }

  //!working on it 
  return newMovieList;
}


const HandleShowsReducer = (currentShowslist, action) => {
  let newShowslist = currentShowslist;
  if (action.type === "ADD_SHOWS") {
    newShowslist = action.payload
  }
  return newShowslist;
}
const MoviesStoreProvider = ({ children }) => {

  const [movieslist, dispatchedmovie] = useReducer(HandleMoviesReducer, [])
  const [showslist, dispatchedshows] = useReducer(HandleShowsReducer, [])

  const [isfetched, setIsFetched] = useState()

  const addMovies = (movies) => {
    dispatchedmovie({
      type: "ADD_MOVIES",
      payload: {
        movies
      }
    })
  }

  const filterData = (filterInput) => {
    dispatchedmovie({
      type: "ADD_FILTER_MOVIES",
      payload: {
        filterInput
      }
    })
  }

  //! for movies -->
  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;
    setIsFetched(false)

    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a1c3504043mshb437baae126e479p159a82jsn012bad912a12',
        'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
      }
    };

    fetch(url, options, { signal })
      .then(res => res.json())
      .then((data) => {
        addMovies(data)
        setIsFetched(true)
      })

    return (
      () => {
        controller.abort()
      }
    )
  }, [])


  const addShows = (shows) => {
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

    fetch(url, options, { signal })
      .then(res => res.json())
      .then((data) => {
        // console.log(data.movies)
        addShows(data.movies)
      })

    return (
      () => {
        controller.abort()
      }
    )
  }, [])



  //! for headline
  const [selectedtab, setSelectedTab] = useState("Movies")
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
        isfetched,
        addMovies,
        addShows,
        filterData,
      }
    }>
      {children}
    </MovieListContent.Provider>
  )
}


export default MoviesStoreProvider;