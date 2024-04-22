import React, { useState, useEffect } from "react"

const Post = ({ title, content, author}) => {
  return (
    <div className='col'>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{content}</p>
          <p className='card-text'>Author: {author}</p>
        </div>
      </div>
    </div>
  );
};

const PostsMap = ({ dataArray }) => {
  return (
    <div className="row row-cols-3 mt-4 gx-4">
      {/* {dataArray.map((item, index) => (
        <Fisz
          key={index}
          front={item.front}
          back={item.back}
          active={index === flippedIndex}
          onFlip={() => handleFlip(index)}
        />
      ))} */}
    </div>
  );
};

const Posts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('..../posts.json');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []);

  console.log(data);

  return (
    <div id="">
        Posts
    </div>
  );
};

export default Posts;