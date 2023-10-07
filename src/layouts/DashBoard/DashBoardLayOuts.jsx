import { Outlet } from 'react-router-dom';
import Sidebar from '../../Components/DashboardCompo/Sidebar';
import { Helmet } from 'react-helmet-async';


const DashBoardLayOuts = () => {
    return (
        <div>
            <Helmet>
                <title>Traveller Home | Dashboard</title>

            </Helmet>
            <div className='relative min-h-screen md:flex'>
                <Sidebar ></Sidebar>
                <div className='flex-1  md:ml-64'>
                    <div className='p-5'>
                        <Outlet ></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayOuts;