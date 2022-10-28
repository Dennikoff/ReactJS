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
    const [body, setBody] = useState('')

    function addNewPost(event) {
        event.preventDefault();
        const newPost = {
            id: Date.now(),
            title,
            body
        };
        setPosts([...posts, newPost]);
        setTitle('');
        setBody('');
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
                value={body}
                type="text"
                onChange={(e)=>setBody(e.target.value)}
                placeholder={"Описание поста"}
            />
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