import React from 'react'
import Header from '../component/Header'
import "bootstrap/dist/css/bootstrap.css"
import "../route/App.css"
import Footer from '../component/Footer'
import Sidebar from '../component/Sidebar'
import MoviesStoreProvider from '../store/movies-store-list'
import MoviesLIst from '../component/MoviesLIst'
import { Outlet } from 'react-router-dom'


const App = () => {
  return (

    <MoviesStoreProvider>

      <div className="main-container">
        <div>
          <Sidebar />
        </div>
        <div className='container-child'>
          <Header/>
          <Outlet/>
          <Footer />
        </div>
      </div>
    </MoviesStoreProvider>

  )
}

export default App