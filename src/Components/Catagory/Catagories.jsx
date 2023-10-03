import CategoryBox from "./CategoryBox";
import { categories } from "./catagoryData";
import { Fade } from "react-awesome-reveal";
const Catagories = () => {
    return (
        <div className="text-center py-5">
          
          <Fade direction="down" duration={2000}>
          <h1 className=" text-base md:text-xl font-serif text-violet-950">Pick Where You Want To Go</h1>
          </Fade>
          
            <div className="pt-4 flex flex-row items-center justify-center overflow-x-auto">

                {
                    categories.map(item => (
                        <CategoryBox label={item.label} icon={item.icon} key={item.label}></CategoryBox>
                    ))
                }

            </div>
        </div>
    );
};

export default Catagories;