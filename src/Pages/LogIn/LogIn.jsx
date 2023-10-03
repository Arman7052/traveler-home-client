import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import logInLottie from '../../assets/Lottie/animation_lna57pgn.json';
import Lottie from 'lottie-react';
import { Fade, Zoom } from 'react-awesome-reveal';
import toast from 'react-hot-toast';
const LogIn = () => {
    const { loading, setLoading, signIn, signInWithGoogle, resetPassword, } = useContext(AuthContext);
    const navigate = useNavigate();
    // Handle google sign in 
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            console.log(result.user);
            navigate('/')
        }).catch(err => {
            console.log(err.message);
            toast.error(err.message)
        })
    }
    return (


        <div className='flex flex-col justify-center items-center text-center md:flex-row md:justify-evenly'>
            <div>
                <Zoom duration={1000} >
                    <h1 className='my-3 text-4xl font-bold text-center md:pt-20'>Log In</h1>
                </Zoom>
                <Lottie
                    animationData={logInLottie}
                    loop={true}
                    autoplay={true}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
            <div>
                <Fade direction='down' duration={800}>
                    <div className='flex justify-center items-center min-h-screen'>
                        <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-violet-950'>
                            <div className='mb-8 text-center'>

                                <p className='text-sm text-gray-400'>
                                    Sign in to access your account
                                </p>
                            </div>
                            <form
                                noValidate=''
                                action=''
                                className='space-y-6 ng-untouched ng-pristine ng-valid'
                            >
                                <div className='space-y-4'>
                                    <div>
                                        <label htmlFor='email' className='block mb-2 text-sm'>
                                            Email address
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            id='email'
                                            required
                                            placeholder='Enter Your Email Here'
                                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                            data-temp-mail-org='0'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex justify-between'>
                                            <label htmlFor='password' className='text-sm mb-2'>
                                                Password
                                            </label>
                                        </div>
                                        <input
                                            type='password'
                                            name='password'
                                            id='password'
                                            required
                                            placeholder='*******'
                                            className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-blue-500 bg-gray-200 text-gray-900'
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type='submit'
                                        className='bg-blue-500 hover:bg-teal-500 w-full rounded-md py-3 text-white'
                                    >
                                        Continue
                                    </button>
                                </div>
                            </form>
                            <div className='space-y-1'>
                                <button className='text-xs hover:underline hover:text-teal-500 text-gray-400'>
                                    Forgot password?
                                </button>
                            </div>
                            <div className='flex items-center pt-4 space-x-1'>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                                <p className='px-3 text-sm dark:text-gray-400'>
                                    Login with social accounts
                                </p>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            </div>
                            <div onClick={handleGoogleSignIn} className='flex justify-evenly items-center space-x-2 border m-3 p-2 bg-blue-500 hover:bg-teal-500 rounded-full border-gray-300 border-rounded cursor-pointer'>
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                Don't have an account yet?{' '}
                                <Link
                                    to='/signup'
                                    className='hover:underline hover:text-teal-500 text-gray-600'
                                >
                                    Sign up
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default LogIn;