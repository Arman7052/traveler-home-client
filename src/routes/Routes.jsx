import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import LogIn from '../Pages/LogIn/LogIn'
import SignUp from '../Pages/SignUp/SignUp'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import DashBoardLayOuts from '../layouts/DashBoard/DashBoardLayOuts'
import AddRoom from '../Pages/DashBoardPage/AddRoom'
import { getRoom } from '../apis/rooms'
import MyBookings from '../Pages/DashBoardPage/MyBookings'
import MyListings from '../Pages/DashBoardPage/MyListings'


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
        loader: ({params})=> getRoom(params.id)
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
    element: <PrivateRoute><DashBoardLayOuts></DashBoardLayOuts></PrivateRoute>,
    children: [
      {
        path: '/dashboard/add-room',
        element: <AddRoom></AddRoom>
      },
      {
        path: '/dashboard/', 
        element: <MyBookings></MyBookings>
      },
      {
        path: '/dashboard/my-bookings', 
        element: <MyBookings></MyBookings> 
      },
      {
        path: '/dashboard/my-listings', 
        element: <MyListings></MyListings> 
      },
    ]
  }
  
])
