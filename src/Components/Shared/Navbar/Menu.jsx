import { AiOutlineMenu } from 'react-icons/ai'
import avater from '../../../../public/placeholder.jpg'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../providers/AuthProvider';
import toast from 'react-hot-toast';
import { becomeHost } from '../../../apis/Authentication/auth';
import HostModal from '../../Modal/HostRequestModal';
import Swal from 'sweetalert2';


const Menu = () => {
  const navigate =useNavigate()
  const { user, logOut, role, setRole } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false)
 

  const [modal, setModal] = useState(false)
  console.log(role)
  const modalHandler = email => {
    becomeHost(email).then(data => {
      console.log(data)
      toast.success('You are host now, Post Rooms!')
      setRole('host')
      closeModal()
    })
  };
  const closeModal = () => {
    setModal(false)
  };
  return (
    <div>
      <div className='relative'>
        <div className='flex flex-row items-center gap-3 '>
          <div className='hidden md:block text-sm font-semibold py-2 px-4 hover:text-teal-600 transition cursor-pointer'>
            {!role && (
              <button
                className='cursor-pointer rounded-lg hover:bg-neutral-100 py-2 px-4 '
                onClick={() => {
                  if (!user) {
                    Swal.fire({
                      title: 'Please log in to add your home!',
                      width: 600,
                      padding: '3em',
                      color: '#716add',
                      background: '#fff',
                      backdrop: ` rgba(0,0,123,0.4) left top no-repeat `,
                      
                    },
                    navigate('/login')
                    );
                    
                  } else {
                    setModal(true);
                  }
                }}
              // disabled={!user}
              >
                Add Your Home
              </button>
            )}
          </div>
          <div onClick={() => setIsOpen(!isOpen)} className='p-4  md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-md cursor-pointer hover:shadow-md transition'   >

            <AiOutlineMenu className='text-teal-600 ' ></AiOutlineMenu>

            <img src={user && user.photoURL ? user.photoURL : avater} alt=" avater" height={20} width={20} className='rounded-full' />

          </div>
        </div>

        {isOpen && (
          <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
            <div className='flex flex-col cursor-pointer'>
              <Link
                to='/'
                className='block md:hidden px-2 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Home
              </Link>

              {user ? (
                <>
                  <Link
                    to='/dashboard'
                    className='px-2 py-3 hover:bg-neutral-100 transition font-semibold'
                  >
                    Dashboard
                  </Link>

                  <div
                    onClick={() => {
                      setRole(null);
                      logOut();
                    }}
                    className='px-2 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                  >
                    Logout
                  </div>
                </>
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
      <HostModal
        email={user?.email}
        modalHandler={modalHandler}
        isOpen={modal}
        closeModal={closeModal}
      ></HostModal>
    </div>
  );
};

export default Menu;