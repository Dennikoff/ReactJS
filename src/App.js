import React, {useState, useMemo} from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/Input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: '1', body: 'g'},
        {id: 2, title: '5', body: 'c'},
        {id: 3, title: '2', body: 'a'},
        {id: 4, title: 'f', body: 'b'}
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const [modalVisible, setModalVisible] = useState(false)

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        } else {
            return posts;
        }
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModalVisible(false)
    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{marginTop: '15px'}}
                onClick={() => setModalVisible(true)}>
                Создать пост
            </MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost}/>
            </MyModal>

            <hr style={{margin: '10px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Javascript posts"}/>

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