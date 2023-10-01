import React from 'react';

const Container = ( {children}) => {
    return (
        <div className=' max-w-[2400px] mx-auto md:px-10 sm:px-1 px-4'>
            {children}
        </div>
    );
};

export default Container;