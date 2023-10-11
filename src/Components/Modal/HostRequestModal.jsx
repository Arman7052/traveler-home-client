import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Fade, Zoom } from 'react-awesome-reveal';
const HostModal = ({ modalHandler, closeModal, isOpen, email }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Become A Host!
                </Dialog.Title>
                <div className='mt-2'>
                  
                  <Zoom duration={800}>
                  <p className='text-sm text-gray-500'>
                  Get ready to host ! Before welcoming guests, take a look at our terms and conditions. Think of it as your helpful guide to make your hosting journey smooth and fun! 
                  </p>
                  </Zoom>
                  
                </div>
                <hr className='mt-8 ' />
                <div className='flex mt-2 justify-around'>
                  <Fade direction='left' duration={1000}>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
                    onClick={() => modalHandler(email)}
                  >
                    Continue
                  </button>
                  </Fade>
                  <Fade direction='right' duration={1000}>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  </Fade>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default HostModal; 