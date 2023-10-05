import { Helmet } from "react-helmet-async";
import Header from "../../Components/Rooms/Header";
import RoomInfo from "../../Components/Rooms/RoomInfo";
import RoomReservation from "../../Components/Rooms/RoomReservation";


const RoomDetails = () => {
    return (
        <div>
             <Helmet>
                <title>Traveller Home | Room Details</title>

            </Helmet>
            <div className='max-w-screen-lg mx-auto '>
                <div className='flex flex-col  gap-6'>
                    <Header ></Header>
                    <div className='flex flex-col-reverse justify-center md:flex-row md:justify-between gap-10 '>
                        <RoomInfo ></RoomInfo>
                        <div className='mb-10 md:col-span-7 order-first md:order-last'>
                            <RoomReservation></RoomReservation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
// grid grid-cols-1  md:grid-cols-5 md:gap-12 mt-6