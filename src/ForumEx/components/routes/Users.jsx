import React, { useState, useEffect } from "react"
import { Link, Navigate, redirect, useSearchParams } from "react-router-dom";

const User = ({ title, name, content, authorId, posts}) => {
  var postsN = 0;
  posts.map((item, index) => {
    if (item.userId == authorId) {
      postsN++;
    }
  });

  return (
    <div className='col mb-5'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{name}</p>
          <p className='card-text'>{content}</p>
          <Link className='link' to={'/?id='+authorId}>Posts: {postsN}</Link>
        </div>
      </div>
    </div>
  );
};

const UsersMap = ({ dataArray, posts, searchedUser }) => {
  if(searchedUser != '-1'){
    return (
      <div className="row row-cols-3 mt-4 gx-4">
        {dataArray.map((item, index) => (
          <User
            key={index}
            title={item.username}
            name = {item.name}
            content={item.email}
            authorId={item.id}
            posts={posts}
          />
        ))}
      </div>
    );
  }else{
    return (
      <div className="row row-cols-3 mt-4 gx-4">
        <User
          key={index}
          title={item.username}
          name = {item.name}
          content={item.email}
          authorId={item.id}
          posts={posts}
        />
      </div>
    );
  }
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
        console.log(data);
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
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const [userName, setUserName] = useState('');
  const [userId, setUserId] = useState('');

  const search = () => {
    try{
      if(userId!=''){
        var user = users.find(x => x.id == userId);
        if(user != undefined){
          window.location.href = '/users?id='+userId;
        }
      }
      else if(userName!=''){
        var user = users.find(x => x.username == userName);
        if(user == undefined){
          throw 'User not found';
        }else{
          window.location.href = '/users?id='+user.id;
        }
      }
    }catch(e){
      alert('User not found');
    }
  };

  const [searchParams] = useSearchParams();

  const [searchedUser, setSearchedUser] = useState('');

  useEffect(() => {
    // Check if 'variable' is in the URL
    if (searchParams.has('id')) {
      const id = searchParams.get('id');
      setSearchedUser(id);
    } else {
      setSearchedUser('-1');
    }
  }, [searchParams]);

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
      <UsersMap dataArray={users} posts={data} searchedUser={searchedUser} />
    </div>
  );
};

export default Users;