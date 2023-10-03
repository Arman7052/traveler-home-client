

const CategoryBox = ( { label, icon: Icon}) => {
    return (
        <div>
            
            <div className="flex flex-col items-center cursor-pointer justify-center gap-2 p-3 border-b-2 hover:text-teal-600 border-transparent text-blue-500">
            <Icon size={26}></Icon>
            <div className="text-sm font-medium ">
                {label}
            </div>
            
        </div>
        </div>
    );
};

export default CategoryBox;