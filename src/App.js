import React, {useState} from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id:1, title: 'Javascript', body:'Description'},
        {id:2, title: 'Javascript 2', body:'Description'},
        {id:3, title: 'Javascript 3', body:'Description'},
        {id:4, title: 'Javascript 4', body:'Description'}
    ])

    const [selectedSort, setSelectedSort] = useState('')

    function createPost(newPost) {
        setPosts([...posts, newPost])
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    function sortPosts (sort) {
        setSelectedSort(sort)
        console.log(sort)
        setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
    }

    return (
    <div className="App">
        <PostForm create={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
            <MySelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
        {
            posts.length > 0
            ? <PostList remove={removePost} posts={posts} title={"Javascript posts"}/>
            : <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
        }

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