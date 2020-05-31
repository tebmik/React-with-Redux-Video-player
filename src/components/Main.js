import React from "react";
import Navbar from "./navbar/Navbar";
import SideDrawer from "./navbar/sideDrawer/SideDrawer";  
import FeaturedContent from "./homeHero/featured/FeaturedContent";


const Main = () => {
    return (
        <div>
            <SideDrawer />
            <Navbar />
            <FeaturedContent />
        </div>
    );
};

export default Main;