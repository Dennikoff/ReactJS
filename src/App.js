import React, {useState, useRef} from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/Input/MyInput";


function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body:'Description'},
        {id:2, title: 'Javascript 2', body:'Description'},
        {id:3, title: 'Javascript 3', body:'Description'},
        {id:4, title: 'Javascript 4', body:'Description'}
    ])

    const [title, setTitle] = useState('')
    const bodyInputRef = useRef()

    function addNewPost(event) {
        event.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
    <div className="App">
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={title}
                type="text"
                onChange={(e)=>setTitle(e.target.value)}
                placeholder={"Название поста"}
            />
            {/*Неуправляемый компонент*/}
            <MyInput
                ref={bodyInputRef}
                type="text"
                placeholder={"Описание поста"}/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={posts} title={"Javascript"}/>
    </div>
  );
}

export default App;

// <PostList posts={posts2} title={"Python"}/>
// const [posts2, setPosts2] = useState([
//     {id:1, title: 'Python', body:'Description'},
//     {id:2, title: 'Python 2', body:'Description'},
//     {id:3, title: 'Python 3', body:'Description'},
//     {id:4, title: 'Python 4', body:'Description'}
// ])