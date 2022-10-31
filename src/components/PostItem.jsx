import React from 'react';
import MyButton from "./UI/button/MyButton";
// import {useHistory} from "react-router-dom";

const PostItem = (props) => {

    const removePost = () => {
        props.remove(props.post)
    }

    // const router = useHistory()

    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className="post__btns">
                <MyButton onClick={removePost}>
                    Открыть
                </MyButton>
                <MyButton onClick={removePost}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;