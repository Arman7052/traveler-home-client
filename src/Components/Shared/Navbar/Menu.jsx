import { AiOutlineMenu } from 'react-icons/ai'
import avater from '../../../../public/placeholder.jpg'
import { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider';


const Menu = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])
    return (
        <div>
            <div className='relative'>
                <div className='flex flex-row items-center gap-3 '>
                    <div className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:text-teal-600 hover:bg-neutral-100 transition cursor-pointer'>
                        Your home
                    </div>
                    <div
                        onClick={toggleOpen}
                        className='p-4  md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:shadow-md transition'
                    >
                        <AiOutlineMenu className='text-teal-600 ' />
                        <img src={user && user.PhotoURL ? user.PhotoURL : avater} alt="" height={20} width={20} className='rounded-full' />
                    </div>
                </div>
                {isOpen && (
                    <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                        <div className='flex flex-col cursor-pointer'>
                            <Link
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                            >
                                Home
                            </Link>
                            {user ? (
                                <div
                                    onClick={logOut}
                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                >
                                    Logout
                                </div>
                            ) : (
                                <>
                                    <Link
                                        to='/login'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        to='/signup'
                                        className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                    >
                                        Sign Up
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;