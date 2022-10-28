import React, {useState} from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";


function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body:'Description'},
        {id:2, title: 'Javascript 2', body:'Description'},
        {id:3, title: 'Javascript 3', body:'Description'},
        {id:4, title: 'Javascript 4', body:'Description'}
    ])

    const [posts2, setPosts2] = useState([
        {id:1, title: 'Python', body:'Description'},
        {id:2, title: 'Python 2', body:'Description'},
        {id:3, title: 'Python 3', body:'Description'},
        {id:4, title: 'Python 4', body:'Description'}
    ])

    return (
    <div className="App">
        {/*<h1 className={"title"}>Список постов</h1>*/}
        <PostList posts={posts} title={"Javascript"}/>
        <PostList posts={posts2} title={"Python"}/>

    </div>
  );
}

export default App;
