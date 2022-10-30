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
import {usePosts} from "./hooks/usePosts";
import {queries} from "@testing-library/react";


function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

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
