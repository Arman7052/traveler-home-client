import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import SignUp from '../Pages/SignUp/SignUp'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashBoardLayOuts from '../layouts/DashBoard/DashBoardLayOuts'
import AddRoom from '../Pages/DashBoardPage/AddRoom'


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
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
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
  },
  {
    path:'/dashboard',
    element: <DashBoardLayOuts></DashBoardLayOuts>,
    children: [
      {
        path: '/dashboard/add-room',
        element: <AddRoom></AddRoom>
      }
    ]
  }
  
])
