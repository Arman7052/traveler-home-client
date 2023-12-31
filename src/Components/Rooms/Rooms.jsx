import { useEffect, useState } from "react";
import Heading from "../Shared/Heading/Heading";
import Card from "./Card";
import Loader from "../Shared/Loader/Loader";
import { useSearchParams } from "react-router-dom";
import { getAllRooms } from "../../apis/rooms";
import Container from "../Shared/Container/Container";



const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    useEffect(() => {
        setLoading(true)
        getAllRooms()
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                } else {
                    setRooms(data)
                }

                setLoading(false)
            })
            .catch(err => console.log(err))
    }, [category])

    if (loading) {
        return <Loader></Loader>
    }
    return (
        <div>
            <Container>
                {rooms && rooms.length > 0 ? (
                    <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                        {rooms.map((room, index) => (
                            <Card key={index} room={room} ></Card>
                        ))}
                    </div>
                ) : (
                    <div className='pt-12'>
                        <Heading
                            title='No Rooms Available In This Category!'
                            subtitle='Please Select Other Categories.'
                            center={true}
                        ></Heading>
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Rooms;