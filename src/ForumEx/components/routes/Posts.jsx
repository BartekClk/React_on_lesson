import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Post = ({ title, content, authorId}) => {
  return (
    <div className='col mb-5'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{content}</p>
          <Link className='link' to={'/users?id='+authorId}>Author: {authors[authorId][0].name}</Link>
        </div>
      </div>
    </div>
  );
};

const PostsMap = ({ dataArray }) => {
  return (
    <div className="row row-cols-3 mt-4 gx-4">
      {dataArray.map((item, index) => (
        <Post
          key={index}
          title={item.title}
          content={item.content}
          authorId={item.authorId}
        />
      ))}
    </div>
  );
};

const initData = {
  "posts": [
  {
    "id": 1,
    "title": "First Post",
    "content": "This is the content of the first post.",
    "authorId": 1
  },
  {
    "id": 2,
    "title": "Second Post",
    "content": "This is the content of the second post.",
    "authorId": 2
  },
  {
    "id": 3,
    "title": "Third Post",
    "content": "This is the content of the third post.",
    "authorId": 1
  },
  {
    "id": 4,
    "title": "Fourth Post",
    "content": "This is the content of the Fourth post.",
    "authorId": 2
  },
  {
    "id": 5,
    "title": "Fifth Post",
    "content": "This is the content of the fifth post.",
    "authorId": 2
  }]
}

const authors = {
  1: [{
      "username": "user1",
      "name": "John Doe",
      "email": "john@example.com"
}],
  2: [{
      "username": "user2",
      "name": "Jane Smith",
      "email": "jane@example.com"
}]
}

const Posts = () => {
  const [data, setData] = useState(initData);

  return (
    <div className="container">
        <PostsMap dataArray={data.posts} />
    </div>
  );
};

export default Posts;