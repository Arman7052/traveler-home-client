import { Outlet } from "react-router-dom"
import Navbar from "../Components/Shared/Navbar/Navbar"
import Footer from "../Components/Shared/Footer/Footer"
import Container from "../Components/Shared/Container/Container"

const Main = () => {
  return (
    <div>
     <Container>
     <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
     </Container>
    </div>
  )
}

export default Main ;
