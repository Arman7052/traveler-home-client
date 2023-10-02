import React from 'react';
import Container from '../Container/Container';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className=' fixed w-full bg-white z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className=' flex items-center justify-between gap-3 md:gap-0'>
                        <div><Logo></Logo></div>
                        <div>search</div>
                        <div>menu</div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;