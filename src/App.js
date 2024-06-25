import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import HomePage from './pages/Home';
import ProductPage from './pages/Products';
import RootLayout from './pages/Root'
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement:<ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductPage /> },
    ]
  },

])

// const routeDefinitions=createRoutesFromElements(<Route > <Route path='/' element={<HomePage />} /></Route>)
// const router=createBrowserRouter(routeDefinitions)
function App() {
  return <RouterProvider router={router} />
}

export default App;
