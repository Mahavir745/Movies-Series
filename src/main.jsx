import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './route/App'
import MoviesLIst from './component/MoviesLIst'
import ShowList from './component/ShowList'
import AnimationsList from './component/AnimationsList'

const route = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {path: '/', element: <AnimationsList/>},
      {path: "/shows", element: <ShowList/>},
      {path: "/movies", element: <MoviesLIst/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}/>
  </StrictMode>,
)
