import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {About,
  Login,
  Error,
  HomeLayout,
  Orders,
  Landing,
  Products,
  Cart,
  Checkout,
  Register,
  SingleProduct} from './pages'
import { ErrorElements } from './components'


// loaders
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct'
import {loader as productsLoader} from './pages/Products'
import {loader as checkoutLoader} from './pages/Checkout'
import {loader as ordersLoader} from './pages/Orders'

// actions
import {action as registerAction} from './pages/Register'
import {action as loginAction} from './pages/Login'
import {action as checkoutAction} from './components/CheckOutForm'
import { store } from './store';

const queryClient =new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:100 * 60 * 5
    }
  }
})


const router = createBrowserRouter([
  {
    path: '/',
    element:<HomeLayout />,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Landing />,
        errorElement:<ErrorElements />,
        loader: landingLoader(queryClient),
      },
      {
        path:'products',
        element:<Products />,
        errorElement:<ErrorElements />,
        loader: productsLoader(queryClient),
      },
      {
        path:'products/:id',
        element: <SingleProduct />,
        errorElement:<ErrorElements />,
        loader: singleProductLoader(queryClient),
      },
      {
        path:'cart',
        element:<Cart />,
      },
      {
        path:'checkout',
        element:<Checkout />,
        loader:checkoutLoader(store),
        action:checkoutAction(store,queryClient)
      },
      {
        path:'about',
        element:<About />,
      },
      {
        path:'orders',
        element:<Orders />,
        loader:ordersLoader(store,queryClient)
      },
    ]
      },
      {
        path: '/login',
        element:<Login />,
        errorElement:<Error/>,
        action : loginAction(store),
        
          },
          {
            path: '/register',
            element:<Register />,
            errorElement:<Error/>,
            action: registerAction,
              },
              
])


const App = () => {
  return <>
  <QueryClientProvider client={queryClient}>
   <RouterProvider router={router} />
   <ReactQueryDevtools initialIsOpen={false}/>
  </QueryClientProvider>
  </>
}

export default App