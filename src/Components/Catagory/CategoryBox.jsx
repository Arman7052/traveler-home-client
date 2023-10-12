import qs from 'query-string'
import { useNavigate, useSearchParams } from 'react-router-dom'

const CategoryBox = ({ label, icon: Icon, selected }) => {

  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  // Handle the category selection 

  const handleCategoryClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = {
      ...currentQuery,
      category: label,
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    )

    navigate(url)
  }


  return (
    <div
      onClick={handleCategoryClick}
      className={` flex  flex-col  items-center  justify-center  gap-2 p-3 border-b-2 hover:text-teal-500 transition cursor-pointer
          ${selected ? 'border-b-neutral-800 text-blue-300' : 'border-transparent text-blue-300'} `}>

      <Icon size={26} ></Icon>


      <div className='text-sm font-medium'>{label}</div>
      
    </div>
  )
};

export default CategoryBox;