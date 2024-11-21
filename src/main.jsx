import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './route/App'
import MoviesLIst from './component/MoviesLIst'
import ShowList from './component/ShowList'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: '/horror-movies', element: <MoviesLIst/>},
      {path: "/shows", element: <ShowList/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
