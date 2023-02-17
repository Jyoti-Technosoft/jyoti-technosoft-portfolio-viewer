import { Outlet } from "react-router-dom";

import HeaderBar from "./HeaderComponent/HeaderLayout"
import FooterBar from "./FooterComponent/FooterLayout";
import Sidebar from "./SideBarComponent/SideBar";
import Cards from "./MainContentComponents/Cards";
import GridLayout from "./MainContentComponents/GridLayout"
import * as React from 'react';
import CombineSideBar from  "./SideBarComponent/CombineSideBar"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Carousel from "./MainContentComponents/Carousel";

const AppLayout = () => {
    const [toogleState, setToogleState] = React.useState(null);

    const gettoogleSideBar = (toogleState) => {
        setToogleState(toogleState);
    }

    return (
        <BrowserRouter>
            <CombineSideBar />
        </BrowserRouter>
    );
};

export default AppLayout;