import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";

const PublicRotes = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="*" element={<NotFound/>}/>)
        </Routes>
    );
};

export default PublicRotes;