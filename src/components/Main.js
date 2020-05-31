import React from "react";
import Navbar from "./navbar/Navbar";
import SideDrawer from "./navbar/sideDrawer/SideDrawer";  

const Main = () => {
    return (
        <div>
            <SideDrawer />
            <Navbar />
        </div>
    );
};

export default Main;