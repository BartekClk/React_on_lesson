import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

const posts = {
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
  authors:[{
      "id": 1,
      "username": "user1",
      "name": "John Doe",
      "email": "john@example.com"
},
{
      "id": 2,
      "username": "user2",
      "name": "Jane Smith",
      "email": "jane@example.com"
}]
}
const authors1 = {
  authors:[{
      "id": 1,
      "username": "user1",
      "name": "John Doe",
      "email": "john@example.com"
}]
}

const User = ({ title, content, authorId}) => {
  var postsN = 0;
  posts.posts.map((item, index) => {
    if (item.authorId == authorId) {
      postsN++;
    }
  });

  return (
    <div className='col mb-5'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{content}</p>
          <Link className='link' to={'/?id='+authorId}>Posts: {postsN}</Link>
        </div>
      </div>
    </div>
  );
};

const UsersMap = ({ dataArray }) => {
  return (
    <div className="row row-cols-3 mt-4 gx-4">
      {dataArray.map((item, index) => (
        <User
          key={index}
          title={item.username}
          content={item.email}
          authorId={item.id}
        />
      ))}
    </div>
  );
};

const Users = () => {
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

  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  const search = () => {
    // try{
    //   if(userName!='')
    // }catch(e){
    //   alert('User not found');
    // }
  };

  return (
    <div className="container">
      <div className="container mt-5 search" >
        <div className="input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1" onClick={search}>Search</button>
          <input type="text" className="form-control" placeholder="User name" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>{setUserName(e.target.value)}}/>
          <span className="input-group-text" id="basic-addon1"> or </span>
          <input type="number" min={1} max={2} className="form-control" placeholder="ID" aria-label="Username" aria-describedby="basic-addon1" onChange={(e)=>{setUserId(e.target.value)}}/>
        </div>
      </div>
      {/* <UsersMap dataArray={users} /> */}
    </div>
  );
};

export default Users;