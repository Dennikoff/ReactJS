import React from 'react';
import {Route, Routes, useRoutes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import {privateRoutes} from "../rotes";
// import publicRotes from "./PublicRotes";

const PrivateRotes = () => {
    const routes = useRoutes(privateRoutes)
    return (
        <div>
            {routes}
        </div>
        // <Routes>
        //     <Route path="/about" element={<About/>}/>
        //     <Route path="/posts" element={<Posts/>}/>
        //     <Route path="*" element={<NotFound/>}/>)
        // </Routes>
    );
};

export default PrivateRotes;