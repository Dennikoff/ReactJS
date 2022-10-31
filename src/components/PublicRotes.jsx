import React from 'react';
import {Route, Routes, useRoutes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import {publicRoutes} from "../rotes";

const PublicRotes = () => {
    const routes = useRoutes(publicRoutes)
    return (
        <div>
            {routes}
        </div>
    );
};

export default PublicRotes;