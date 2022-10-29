import React, {useState} from 'react';
import PostForm from "./PostForm";
import MyInput from "./UI/Input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
            <MyInput
                placeholder="Поиск..."
                value={filter.query}
                type="text"
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                value={filter.sort}
                onChange={selecterSort => setFilter({...filter, sort: selecterSort})}
                defaultValue="Сортировка"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    )
        ;
};

export default PostFilter;