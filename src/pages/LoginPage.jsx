import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/Input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const LoginPage = () => {
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
            <MyButton onClick={() => setIsAuth(true)}>Войти</MyButton>
        </form>
    );
};

export default LoginPage;