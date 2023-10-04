import { Helmet } from "react-helmet-async";
import Catagories from "../../Components/Catagory/Catagories";
import Hero from "../../Components/Hero/Hero";
import Container from "../../Components/Shared/Container/Container";


const Home = () => {
    return (
        <Container>
            <Helmet>
                <title>Traveller Home | Home</title>

            </Helmet>
            <div>
                <Hero></Hero>
                <Catagories></Catagories>
            </div>
        </Container>
    );
};

export default Home;