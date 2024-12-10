import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Blogs from './components/Blogs/Blogs.jsx'
import BlogsDetails from './components/BlogsDetails/BlogsDetails.jsx'
import PlacesRoute from './components/PlacesRoute/PlacesRoute.jsx'
import NoPage from './components/NoPage/NoPage.jsx'

const router = createBrowserRouter([
  {path: '/',
    element: <Layout/>,
    children: [
      {path:"",
        element: <Home/>
      },
      {path: "/about",
        element: <About/>
      },
      {path: "/blogs",
        element: <Blogs/>
      },
      {path: "/blogs/:id",
        element: <BlogsDetails/>
      },
      {path: "/places",
        element: <PlacesRoute/>
      },
      {path: "*",
        element: <NoPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
