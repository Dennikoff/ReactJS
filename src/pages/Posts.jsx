import React, {useState, useEffect} from "react";
import {usePosts} from "../hooks/usePosts";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import Loader from "../components/UI/Loader/Loader";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import PostFilter from "../components/PostFilter";



function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalVisible, setModalVisible] = useState(false)
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)


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
            <Pagination setPage={setPage} page={page} totalPages={totalPages}/>


        </div>
    );
}

export default Posts;
