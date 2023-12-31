import { DateRange } from 'react-date-range'
import { ImSpinner9 } from 'react-icons/im'
import { categories } from '../Catagory/catagoryData';

const AddRoomForm = ({ handleSubmit, dates, handleDates, loading = false, handleImageChange, uploadButtonText }) => {
  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit}>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='space-y-6'>

            {/* Location Input */}

            <div className='space-y-1 text-sm'>
              <label htmlFor='location' className='block text-gray-600'>
                Location
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-teal-500 rounded-md '
                name='location'
                id='location'
                type='text'
                placeholder='Location'
                required
              ></input>
            </div>

            {/* Category Input */}

            <div className='space-y-1 text-sm'>
              <label htmlFor='category' className='block text-gray-600'>
                Category
              </label>
              <select
                required
                className='w-full px-4 py-3 border-teal-200 focus:outline-teal-500 rounded-md'
                name='category'
              >
                {categories.map(category => (
                  <option value={category.label} key={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Select Date Range */}

            <div className='space-y-1'>
              <label htmlFor='location' className='block text-gray-600'>
                Select Availability Range
              </label>
              <DateRange
                onChange={handleDates}
                ranges={[dates]}
                rangeColors={['#00CED1']} />
            </div>
          </div>

          {/* Location Title */}

          <div className='space-y-6'>
            <div className='space-y-1 text-sm'>
              <label htmlFor='title' className='block text-gray-600'>
                Title
              </label>
              <input
                className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-teal-500 rounded-md '
                name='title'
                id='title'
                type='text'
                placeholder='Title'
                required
              />
            </div>

            {/* Image Input */}

            <div className=' p-4 bg-white w-full  m-auto rounded-lg'>
              <div className='file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg'>
                <div className='flex flex-col w-max mx-auto text-center'>
                  <label>
                    <input
                      onChange={event => { handleImageChange(event.target.files[0]) }}
                      className='text-sm cursor-pointer w-36 hidden'
                      type='file'
                      name='image'
                      id='image'
                      accept='image/*'
                      hidden
                    />
                    <div className='bg-teal-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 :bg-teal-500'>
                      {uploadButtonText}
                    </div>
                  </label>
                </div>
              </div>
            </div>


            {/* Price Input */}

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='price' className='block text-gray-600'>
                  Price
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-teal-500 rounded-md '
                  name='price'
                  id='price'
                  type='number'
                  placeholder='Price'
                  required
                />
              </div>

              {/* Guests Allowed number */}

              <div className='space-y-1 text-sm'>
                <label htmlFor='guest' className='block text-gray-600'>
                  Total guest
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-teal-500 rounded-md '
                  name='total_guest'
                  id='guest'
                  type='number'
                  placeholder='Total guest'
                  required
                />
              </div>
            </div>

            {/* Bedroom number */}

            <div className='flex justify-between gap-2'>
              <div className='space-y-1 text-sm'>
                <label htmlFor='bedrooms' className='block text-gray-600'>
                  Bedrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-teal-500 rounded-md '
                  name='bedrooms'
                  id='bedrooms'
                  type='number'
                  placeholder='Bedrooms'
                  required
                />
              </div>

              {/* Bathroom number */}

              <div className='space-y-1 text-sm'>
                <label htmlFor='bathrooms' className='block text-gray-600'>
                  Bathrooms
                </label>
                <input
                  className='w-full px-4 py-3 text-gray-800 border border-teal-200 focus:outline-teal-500 rounded-md '
                  name='bathrooms'
                  id='bathrooms'
                  type='number'
                  placeholder='Bathrooms'
                  required
                />
              </div>
            </div>

            {/* Location Description */}

            <div className='space-y-1 text-sm'>
              <label htmlFor='description' className='block text-gray-600'>
                Description
              </label>

              <textarea
                id='description'
                className='block rounded-md focus:teal-200 w-full h-32 px-4 py-3 text-gray-800  border border-teal-200 focus:outline-teal-500 '
                name='description'
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit Button */}

        <button type='submit' className='w-full p-3 pb-2 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-teal-500' >
          {loading ? (
            <ImSpinner9 className='m-auto animate-spin' size={24} />
          ) : (
            'Save & Continue'
          )}
        </button>
      </form>
    </div>
  )
}

export default AddRoomForm;
