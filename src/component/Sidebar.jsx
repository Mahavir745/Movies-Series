import React, { useContext, useState } from 'react'
import { MovieListContent } from '../store/movies-store-list'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const { headerTitle } = useContext(MovieListContent)

  let selectedtab = headerTitle.selectedtab;
  let setSelectedTab = headerTitle.setSelectedTab

  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: 280, height: "100vh", position: "fixed", left: 0, top: 70 }}
    >
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <svg className="bi pe-none me-2" width={40} height={32}>
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-4">All List</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" onClick={() => setSelectedTab("Animation & Adventure")}>
          <Link to="/" className={`nav-link text-white ${selectedtab === "Animation & Adventure" && "bg-danger"}`} current="page">
            <svg className="bi pe-none me-2" width={16} height={16}>
              <use xlinkHref="#Animation" />
            </svg>
            Animation & Adventure
          </Link>
        </li>
        <li className="nav-item" onClick={() => setSelectedTab("Movies")}>
          <Link to="/movies" className={`nav-link text-white ${selectedtab === "Movies" && "bg-danger"}`} current="page">
            <svg className="bi pe-none me-2" width={16} height={16}>
              <use xlinkHref="#Movies" />
            </svg>
            Movies
          </Link>
        </li>
        <li className="nav-item" onClick={() => setSelectedTab("Shows")}>
          <Link to="/shows" className={`nav-link text-white ${selectedtab === "Shows" && "bg-danger"}`} current="page">
            <svg className="bi pe-none me-2" width={16} height={16}>
              <use xlinkHref="#shows" />
            </svg>
            Shows
          </Link>
        </li>
      </ul>
      <hr />
    </div>

  )
}

export default Sidebar