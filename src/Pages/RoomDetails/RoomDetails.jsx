import { Helmet } from "react-helmet-async";
import Header from "../../Components/Rooms/Header";
import RoomInfo from "../../Components/Rooms/RoomInfo";
import RoomReservation from "../../Components/Rooms/RoomReservation";
import { useLoaderData } from "react-router-dom";


const RoomDetails = () => {
    const roomData = useLoaderData();
    console.log(roomData);
    return (
        <div>
             <Helmet>
                <title>Traveller Home | Room Details</title>

            </Helmet>
            <div className='p-2 md:max-w-screen-lg md:mx-auto '>
                <div className='flex flex-col  gap-6'>
                    <Header roomData={roomData}  ></Header>
                    <div className='flex flex-col-reverse justify-center md:flex-row md:justify-between gap-10 '>
                        <RoomInfo roomData={roomData} ></RoomInfo>
                        <div className='mb-10 md:col-span-7 order-first md:order-last'>
                            <RoomReservation roomData={roomData}></RoomReservation>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomDetails;
