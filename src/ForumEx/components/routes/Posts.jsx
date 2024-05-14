import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const Post = ({ title, body, userId, id, users}) => {
  return (
    <div className='col mb-5'>
      <div className='card'>
        <div className='card-body'>
          <div className="text-secondary">{"Post "+id}</div>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{body}</p>
          <Link className='link' to={'/users?id='+userId}>Author: {users[userId-1].name} </Link>
        </div>
      </div>
    </div>
  );
};

const PostsMap = ({ dataArray, users }) => {
  return (
    <div className="row row-cols-3 mt-4 gx-4">
      {dataArray.map((item, index) => (
        <Post
          key={index}
          title={item.title}
          body={item.body}
          userId={item.userId}
          id={item.id}
          users={users}
        />
      ))}
    </div>
  );
};



const Posts = () => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network error: ' + response.status + ' - ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network error: ' + response.status + ' - ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div className="container">
        <PostsMap dataArray={data} users={users} />
    </div>
  );
};

export default Posts;