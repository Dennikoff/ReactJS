import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";
import PrivateRotes from "./privateRotes";
import PublicRotes from "./PublicRotes";
import {AuthContext} from "../context";


const AppRouter = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    console.log(isAuth)
    return (
        <div>
            {isAuth
            ?
                <PrivateRotes/>
            :
                <PublicRotes/>
            }
        </div>
    );
};

export default AppRouter;