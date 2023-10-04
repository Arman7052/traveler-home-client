import { Link, useLocation, useNavigate } from 'react-router-dom'
import logInLottie from '../../assets/Lottie/animation_lna57pgn.json';
import { FcGoogle } from 'react-icons/fc'
import Lottie from 'lottie-react'
import { Fade, Zoom } from 'react-awesome-reveal'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { ImSpinner9 } from 'react-icons/im';
import { Helmet } from 'react-helmet-async';



const SignUp = () => {

    const { loading, setLoading, signInWithGoogle, createUser, updateUserProfile, } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    // Handle user registration
    const handleSubmit = event => {
        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        // Image Upload
        const image = event.target.image.files[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const imageUrl = imageData.data.display_url

                createUser(email, password)
                    .then(result => {
                        updateUserProfile(name, imageUrl)
                            .then(() => {
                                toast.success('Signup successful')
                                navigate(from, { replace: true })
                            })
                            .catch(err => {
                                setLoading(false)
                                console.log(err.message)
                                toast.error(err.message)
                            })
                    })
                    .catch(err => {
                        setLoading(false)
                        console.log(err.message)
                        toast.error(err.message)
                    })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })

        return
    }


    // Handle google signIn

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result.user)
                navigate(from, { replace: true })
            })
            .catch(err => {
                setLoading(false)
                console.log(err.message)
                toast.error(err.message)
            })
    }



    return (
        <div className='flex flex-col justify-center items-center text-center md:flex-row md:justify-evenly'>\
            <Helmet>
                <title>Traveller Home | SignIn</title>

            </Helmet>
            <div className=''>
                <Zoom duration={1000} >
                    <h1 className='my-3 text-4xl font-bold text-center md:pt-20'>Sign Up</h1>
                </Zoom>
                <Lottie
                    animationData={logInLottie}
                    loop={true}
                    autoplay={true}
                    style={{ width: 'auto', height: 'auto' }}
                />
            </div>
            <Fade direction='down' duration={800}>
                <div className='flex justify-center items-center min-h-screen'>
                    <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
                        <div className='mb-8 text-center'>

                            <p className='text-sm text-gray-400'>Welcome to Traveller Home</p>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            noValidate=''
                            action=''
                            className='space-y-6 ng-untouched ng-pristine ng-valid'
                        >
                            <div className='space-y-4'>
                                <div>
                                    {/* <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label> */}
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        placeholder='Enter Your Name Here'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div className=' flex flex-row justify-between'>
                                    <div><label htmlFor='image' className='block mb-2 text-base '>
                                        Image :
                                    </label></div>
                                    <div>
                                        <input
                                            required
                                            type='file'
                                            id='image'
                                            name='image'
                                            accept='image/*'
                                        />
                                    </div>
                                </div>
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
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900'
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
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-teal-500 bg-gray-200 text-gray-900'
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='bg-blue-500 hover:bg-teal-500 w-full rounded-md py-3 text-white'
                                >
                                    {
                                        loading ? <ImSpinner9 className='m-auto animate-spin'></ImSpinner9> : 'Continue'
                                    }
                                </button>
                            </div>
                        </form>
                        <div className='flex items-center pt-4 space-x-1'>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                            <p className='px-3 text-sm dark:text-gray-400'>
                                Signup with social accounts
                            </p>
                            <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
                        </div>
                        <div onClick={handleGoogleSignIn} className='flex justify-center items-center rounded-md space-x-2 border  p-2 bg-blue-500 hover:bg-teal-500  border-teal-300 border-rounded cursor-pointer'>
                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 text-sm text-center text-gray-400'>
                            Already have an account?{' '}
                            <Link
                                to='/login'
                                className='hover:underline hover:text-teal-500 text-gray-600'
                            >
                                Login
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </Fade>

        </div>
    )
}

export default SignUp
