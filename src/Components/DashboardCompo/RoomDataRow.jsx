import { format } from 'date-fns'
import { useState } from 'react'
import toast from 'react-hot-toast'
import DeleteModal from '../Modal/DeleteModal'
import { deleteRoom } from '../../apis/rooms'
import { MdOutlineDeleteForever } from 'react-icons/md'


const RoomDataRow = ({ room, fetchRooms }) => {
  let [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }
  const modalHandler = id => {
    console.log(id)
    deleteRoom(id)
      .then(data => {
        console.log(data)
        fetchRooms()
        toast.success('Room deleted')
      })
      .catch(err => console.log(err))
    closeModal()
  }
  return (
    <tr>

      {/* Room Image */}

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={room?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{room?.title}</p>
          </div>
        </div>
      </td>

      {/* Location */}

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{room?.location}</p>
      </td>

      {/* Price */}

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${room?.price}</p>
      </td>

      {/* Date From */}

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(room?.from), 'P')}
        </p>
      </td>

      {/* Date To */}

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {format(new Date(room?.to), 'P')}
        </p>
      </td>


      {/* Open Modal */}

      <td className='p-3 border-b border-gray-200  bg-white text-lg  hover:text-2xl text-center'>

        <span onClick={openModal} className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight' >
          <span aria-hidden='true' className='absolute inset-0    opacity-50 '></span>
          <span className='relative text-red-500  '><MdOutlineDeleteForever></MdOutlineDeleteForever></span>

        </span>

      {/* Delete Modal */}

        <DeleteModal
          isOpen={isOpen}
          closeModal={closeModal}
          modalHandler={modalHandler}
          id={room._id}
        ></DeleteModal>
      </td>


      {/* Update Modal */}

      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>

          <span  aria-hidden='true'  className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
          <span className='relative'>Update</span>

        </span>
      </td>

    </tr>
  )
}

export default RoomDataRow;