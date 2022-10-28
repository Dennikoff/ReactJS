import React, {useState} from 'react';
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/button/MyButton";


const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    function addNewPost(event) {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now()
        };
        create(newPost);
        setPost({title: '', body: ''});
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <MyInput
                value={post.title}
                type="text"
                onChange={(e)=>setPost({...post, title: e.target.value})}
                placeholder={"Название поста"}
            />
            {/*Неуправляемый компонент*/}
            <MyInput
                value={post.body}
                type="text"
                onChange={(e)=>setPost({...post, body: e.target.value})}
                placeholder={"Описание поста"}
            />
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;