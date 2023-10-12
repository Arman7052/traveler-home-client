import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const StarButton = () => {
  return (
    <div>
      <div className='relative hover:opacity-80  transition  cursor-pointer'>
        <AiOutlineStar  size={28} className='  fill-white  absolute  -top-[2px]  -right-[2px]'></AiOutlineStar>
        <AiFillStar size={24} className='fill-neutral-500/70 hover:fill-blue-500'></AiFillStar>
      </div>
    </div>
  );
};

export default StarButton;