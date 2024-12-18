import { act, createContext, useEffect, useReducer, useState } from "react"

export const MovieListContent = createContext(
  {
    movieslist: [],
    showslist: [],
    animelist: [],
    filterData: () => { },
    headerTitle: {},
    addMovies: () => { },
    addShows: () => { },
    addAnime: () =>{},
    allFechingStatus: { },
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

const HandleAnimeReducer = (currentAnimelist, action) => {
  let newAnimelist = currentAnimelist;
  if (action.type === "ADD_ANIME") {
    newAnimelist = action.payload
  }
  return newAnimelist;
}



const MoviesStoreProvider = ({ children }) => {

  const [movieslist, dispatchedmovie] = useReducer(HandleMoviesReducer, [])
  const [showslist, dispatchedshows] = useReducer(HandleShowsReducer, [])
  const [animelist, dispatchedAnime] = useReducer(HandleAnimeReducer, [])


  const [isfetched, setIsFetched] = useState()
  const [isshowfetched, setIsshowFetched] = useState()
  const [isanimefetched, setIsanimeFetched] = useState()


  //! for movies FETCHING-->
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

  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;
    setIsFetched(false)

    const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a1c3504043mshb437baae126e479p159a82jsn012bad912a12',
        'x-rapidapi-host': 'anime-db.p.rapidapi.com'
      }
    };

    fetch(url, options, { signal })
      .then(res => res.json())
      .then((data) => {
        addMovies(data.data)
        setIsFetched(true)
      })

    return (
      () => {
        controller.abort()
      }
    )
  }, [])

  //! for shows FETCHING-->
  const addShows = (shows) => {
    dispatchedshows({
      type: "ADD_SHOWS",
      payload: shows
    })
  }
  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;
    setIsshowFetched(false)
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
        setIsshowFetched(true)
      })

    return (
      () => {
        controller.abort()
      }
    )
  }, [])



  //! for anime FETCHING-->
  const addAnime = (anime) => {
    dispatchedAnime({
      type: "ADD_ANIME",
      payload: anime
    })
  }

  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;
    setIsanimeFetched(false)

    const url = 'https://tvshow.p.rapidapi.com/Movie/NowPlaying?Page=1&Language=en-US&Adult=true';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'a1c3504043mshb437baae126e479p159a82jsn012bad912a12',
        'x-rapidapi-host': 'tvshow.p.rapidapi.com'
      }
    };
    
    fetch(url, options, { signal })
      .then(res => res.json())
      .then((data) => {
        // console.log(data)
        setIsanimeFetched(true)
        addAnime(data)
      })

    return (
      () => {
        controller.abort()
      }
    )
  }, [])



  //! for headline
  const [selectedtab, setSelectedTab] = useState("Animation & Adventure")
  const headerTitle = {
    selectedtab,
    setSelectedTab
  }


  const allFechingStatus = {
    isfetched : false,
    isshowfetched : false,
    isanimefetched : false

  }

  return (
    <MovieListContent.Provider value={
      {
        headerTitle,
        movieslist,
        showslist,
        allFechingStatus,
        animelist,
        addMovies,
        addShows,
        addAnime,
        filterData,
      }
    }>
      {children}
    </MovieListContent.Provider>
  )
}


export default MoviesStoreProvider;