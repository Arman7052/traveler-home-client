import { Link } from 'react-router-dom';
import logo from '../../../assets/images/Traveller-logo-removebg-preview.png'

const Logo = () => {
    return (
        <div>
            <Link to={'/'}><img src={logo} alt="logo" height={100} width={100} className='h-10 w-10 md:block' /></Link>
        </div>
    );
};

export default Logo;