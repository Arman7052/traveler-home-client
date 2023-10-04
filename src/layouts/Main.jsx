import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Home from "../Pages/Home/Home"
import Footer from "../Components/Shared/Footer/Footer"

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
