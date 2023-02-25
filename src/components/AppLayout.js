import * as React from 'react';
import CombineSideBar from  "./SideBarComponent/CombineSideBar"
import { BrowserRouter} from 'react-router-dom';

const AppLayout = () => {

    return (
        <BrowserRouter>
            <CombineSideBar />
        </BrowserRouter>
    );
};

export default AppLayout;