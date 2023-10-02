import { TypeAnimation } from 'react-type-animation';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Lottie from 'lottie-react';
import animation1 from '../../assets/lottie/animation1.json';
import animation2 from '../../assets/lottie/animation2.json';
import animation3 from '../../assets/lottie/animation3.json';
import animation1o1 from '../../assets/lottie/animation1o1.json';
import Container from '../Shared/Container/Container';
import { Fade, Zoom } from "react-awesome-reveal";
const Hero = () => {
  return (
    <Container>
      <div className='pt-32 text-black' >
        <Carousel className="pb-2 text-center px-2" infiniteLoop={true}>
          <div className="carousel-sle text-black flex flex-col-reverse justify-center  items-center md:flex-row md:justify-between text-xm md:text-lg md:font-semibold md:pl-10">



            <Lottie
              animationData={animation1o1}
              loop={true}
              autoplay={true}
              style={{ width: '40%', height: 'auto' }}
            />


            <div>
              <Zoom duration={3000}>
                <p>
                  Welcome to Traveler Home - <br />
                  -where journeys are reimagined.
                </p>
              </Zoom>
            </div>

            <Lottie
              animationData={animation1}
              loop={true}
              autoplay={true}
              style={{ width: '40%', height: 'auto' }}
            />


          </div>
          <div className="carousel-sle text-black flex flex-col justify-center  items-center md:flex-row md:justify-evenly text-xm md:text-lg md:font-semibold md:pl-6">

            <Lottie
              animationData={animation2}
              loop={true}
              autoplay={true}
              style={{ width: '40%', height: '40%' }}
            />



            <Fade direction='right' duration={2000}>
              <div className='text-lg md:text-xl lg:text-3xl'>
                <p>Ready for a peaceful retreat to restore your energy?</p>
              </div>
            </Fade>

          </div>
          <div className="carousel-sle text-black flex flex-col justify-center  items-center md:flex-row md:justify-between text-xm md:text-lg md:font-semibold md:pl-6">

            <TypeAnimation
              sequence={[
                'You are not alone because ',
                1000,
                'were here for you!',
                1000,

              ]}
              wrapper="span"
              speed={60}
              style={{ fontSize: '2em', textAlign: 'right' }}
              repeat={Infinity}
            />


            <Lottie
              animationData={animation3}
              loop={true}
              autoplay={true}
              style={{ width: '50%', height: '80%' }}
            />


          </div>
        </Carousel>
      </div>
    </Container>
  );
};

export default Hero;