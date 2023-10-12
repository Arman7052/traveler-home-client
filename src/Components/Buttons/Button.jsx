import React from 'react';

const Button = ({ label, onClick, disabled, outline, small, icon: Icon }) => {
    return (
        <div>
            <button
                disabled={disabled}
                onClick={onClick}
                className={`
          relative
          disabled:opacity-70
          disabled:cursor-not-allowed
          rounded-lg
          hover:opacity-80
          transition
          w-full
          ${outline ? 'bg-white' : 'bg-teal-500'}
          ${outline ? 'border-black' : 'border-black'}
          ${outline ? 'text-black' : 'text-white'}
          ${small ? 'text-sm' : 'text-md'}
          ${small ? 'py-1' : 'py-3'}
          ${small ? 'font-light' : 'font-semibold'}
          ${small ? 'border-[1px]' : 'border-2'}
        `}
            >
                {Icon && (
                    <Icon size={24} className='absoluteleft-4top-3' ></Icon>

                )}
                {label}
            </button>
        </div>
    );
};

export default Button;