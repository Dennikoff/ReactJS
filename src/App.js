import React from "react";
import './styles/App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import NotFound from "./pages/NotFound";

function App() {
    return (
        // <div>
        //     <About/>
        // </div>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="*" element={<NotFound/>}/>

            </Routes>
        </BrowserRouter>

    )
}

export default App;


