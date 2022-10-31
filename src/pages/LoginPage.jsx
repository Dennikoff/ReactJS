import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate()

    const LogIn = () => {
        setIsAuth(true)
        navigate('/posts')
    }

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <form>
            <MyInput type="text"
                     value={login}
                     onChange={(e) => setLogin(e.target.value)}
                     placeholder={"Введите логин"}
            />
            <MyInput type="text"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     placeholder={"Введите пароль"}
            />
            <MyButton onClick={LogIn}>Войти</MyButton>
        </form>
    );
};

export default LoginPage;