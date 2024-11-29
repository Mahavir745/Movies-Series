import React, { useContext, useRef } from 'react'
import { MovieListContent } from '../store/movies-store-list'

const Header = () => {

  const {headerTitle,filterData} = useContext(MovieListContent)
  const selectedtab = headerTitle.selectedtab

  const Handleinputfilter = (e)=>{
    filterData(e.target.value)
    console.log(e.target.value)
  }
  
  return (
    <header className="p-3 bg-black heading" style={{position:'fixed',top:"0px",width:"100%",zIndex:"100"}} >
    <div className="container bg-black ">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/"  className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><h3 className='text-danger'>{selectedtab}</h3></li>
        </ul>


        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" onChange={Handleinputfilter} className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search" />
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header