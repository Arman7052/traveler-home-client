import React from 'react';

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
    return (
        <div>
            <button
                disabled={disabled}
                onClick={onClick}
                className={` relative disabled:opacity-70  disabled:cursor-not-allowed  rounded-lg  hover:opacity-80  transition  w-full
                          ${outline ? 'bg-white' : 'bg-teal-500'}                         
                          ${outline ? 'text-black' : 'text-white'}
                          ${outline ? 'border-black' : 'border-black'}
                          ${small ? 'py-1' : 'py-3'}
                          ${small ? 'text-sm' : 'text-md'}
                          ${small ? 'border-[1px]' : 'border-2'}
                          ${small ? 'font-light' : 'font-semibold'}
                          
                         `}
            >
                {Icon && (
                    <Icon size={24} className='absolute left-4 top-3' ></Icon>

                )}
                {label}
            </button>
        </div>
    );
};

export default Button;