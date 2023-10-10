
import Heading from '../Shared/Heading/Heading';

const Header = ({roomData}) => {
    return (
        <div className='mt-24 md:mt-48'>
            <div className='p-5'>
            <Heading 
                title={roomData.title}
                subtitle={roomData.category}
            ></Heading>
            </div>
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
                    src={roomData.image}
                    alt='header image'
                />
            </div>
        </div>
    );
};

export default Header;