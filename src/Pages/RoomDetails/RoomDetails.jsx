import Header from "../../Components/Rooms/Header";
import RoomInfo from "../../Components/Rooms/RoomInfo";
import RoomReservation from "../../Components/Rooms/RoomReservation";


const RoomDetails = () => {
    return (
        <div>
            <div className='max-w-screen-lg mx-auto '>
                <div className='flex flex-col gap-6'>
                    <Header ></Header>
                    <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
                        <RoomInfo ></RoomInfo>
                        <div className='mb-10 md:col-span-3 order-first md:order-last'>
                            <RoomReservation></RoomReservation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;