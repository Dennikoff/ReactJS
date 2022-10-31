import Posts from "../pages/Posts";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import LoginPage from "../pages/LoginPage";


export const privateRoutes = [
    {path: '/posts', element: <Posts/>},
    {path: '/about', element: <About/>},
    {path: '/*', element: <NotFound/>}
]

export const publicRoutes = [
    {path: '/login', element: <LoginPage/>}
]