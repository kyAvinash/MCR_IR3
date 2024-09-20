import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import Products from './pages/Products.jsx'
import About from "./pages/About.jsx"
import ProductsDetails from "./pages/ProductsDetails.jsx"

import "bootstrap/dist/css/bootstrap.min.css"


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path:"/products",
    element: <Products/>
  },
  {
    path: "/about",
    element: <About/>
  },
  {
    path: "/products/:productId",
    element: <ProductsDetails/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
