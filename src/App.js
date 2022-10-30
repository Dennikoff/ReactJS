import React, {useState, useEffect} from "react";
// import Counter from "./components/Counter";
// import ClassCounter from "./components/ClassCounter";
import './styles/App.css'
// import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/Input/MyInput";
import PostForm from "./components/PostForm";
// import MySelect from "./components/UI/select/MySelect";
// import MyInput from "./components/UI/Input/MyInput";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
// import {queries} from "@testing-library/react";
// import axios from "axios";
import PostService from "./API/PostService";
// import {wait} from "@testing-library/user-event/dist/utils";
import Loader from './components/UI/Loader/Loader'
import {useFetching} from "./hooks/useFetching";
import {getPageCount, getPagesArray} from "./utils/pages";


function App() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)



    let pagesArray = getPagesArray(totalPages);


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data)
        const totalCount  = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    //one time
    useEffect(() => {
        fetchPosts();
    }, [page])

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
            <PostFilter
                filter={filter}
                setFilter={setFilter}/>
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '50px'}}>
                    <Loader/>
                  </div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"Javascript posts"}/>
            }
            <div className="page__wrapper">
                {pagesArray.map(p=>
                   <span
                       onClick={() => setPage(p)}
                       key={p}
                       className={page === p ? 'page page__current': 'page'}
                   >{p}</span>
                )}
            </div>



        </div>
    );
}

export default App;
