import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { ImSpinner9 } from 'react-icons/im'
import { AuthContext } from '../../providers/AuthProvider';
import { useContext, useRef } from 'react';
import logInLottie from '../../assets/Lottie/animation_lna57pgn.json';
import Lottie from 'lottie-react';
import { Fade, Zoom } from 'react-awesome-reveal';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import Logo from '../../Components/Shared/Navbar/Logo';
import { saveUser } from '../../apis/Authentication/auth';
const LogIn = () => {
    const { loading, setLoading, signIn, signInWithGoogle, resetPassword, } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const emailRef = useRef()

    // Handle form submit 
    const handleSubmit = event => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }

    //   handle password reset option

    const handleReset = () => {
        const email = emailRef.current.value

        resetPassword(email)
            .then(() => {
                toast.success('Please check your email for reset link')
                setLoading(false)
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }

    // Handle google sign in 
    const handleGoogleSignIn = () => {
        signInWithGoogle().then(result => {
            console.log(result.user);
            saveUser(result.user);
            navigate(from, { replace: true });
        }).catch(err => {
            setLoading(false);
            console.log(err.message);
            toast.error(err.message)
        })
    }
    return (


        <div className='flex flex-col justify-center items-center text-center md:flex-row md:justify-evenly'>
            <Helmet>
                <title>Traveller Home | LogIn</title>

            </Helmet>

            <div className=' hidden md:block'>

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
                            <div className='mb-8 text-center flex justify-center items-center'>

                                <Link to={'/'}><Logo></Logo></Link>
                            </div>
                            <div className='mb-8 text-center'>

                                <p className='text-sm text-gray-400'>
                                    Sign in to access your account
                                </p>
                            </div>
                            <form
                                onSubmit={handleSubmit}
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
                                            ref={emailRef}
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
                                        className='bg-blue-500 hover:bg-teal-600 w-full rounded-md py-3 text-white'
                                    >
                                        {
                                            loading ? <ImSpinner9 className='m-auto animate-spin'></ImSpinner9> : 'Continue'
                                        }
                                    </button>
                                </div>
                            </form>
                            <div className='space-y-1'>
                                <button onClick={handleReset} className='text-xs hover:underline hover:text-teal-600 text-gray-400'>
                                    Forgot password ?
                                </button>
                            </div>
                            <div className='flex items-center pt-4 space-x-1'>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                                <p className='px-3 text-sm dark:text-gray-400'>
                                    Login with
                                </p>
                                <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            </div>
                            <div onClick={handleGoogleSignIn} className='flex justify-evenly items-center space-x-2 border m-3 p-2 bg-blue-500 hover:bg-teal-600 rounded-md border-gray-300 border-rounded cursor-pointer'>
                                <FcGoogle size={32} />

                                <p>Continue with Google</p>
                            </div>
                            <p className='px-6 text-sm text-center text-gray-400'>
                                New in Traveller Home?{' '}
                                <Link to='/signup' className='hover:underline hover:text-teal-500 text-gray-600'  >
                                    Sign up now
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