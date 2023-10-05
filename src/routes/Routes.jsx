import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import SignUp from '../Pages/SignUp/SignUp'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/room/:id',
        element: <RoomDetails></RoomDetails>,
      },
      
    ]
  },
  {
    path: '/login',
    element: <LogIn></LogIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
])
