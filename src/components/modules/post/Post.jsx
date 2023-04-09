import React from 'react';
import { RiHeartLine, RiChat1Line } from 'react-icons/ri';
import './styles.css'; // Import the CSS file

const posts = [
  {
    author: 'John Smith',
    profileImg: 'author-profile.jpg',
    postImg: 'post-image.jpg',
    title: 'Beautiful sunset',
    date: 'April 9, 2023',
    likes: 10,
    comments: 5,
  },
  // More posts
];

function Post({ author, profileImg, postImg, title, date, likes, comments }) {
  return (
    <div className="post">
      <div className="post-header">
        <img className="profile-img" src={profileImg} alt="Author Profile" />
        <div className="post-author">
          <h2 className="post-author-name">{author}</h2>
          <p className="post-date">{date}</p>
        </div>
      </div>
      <img className="post-img" src={postImg} alt="Post Image" />
      <div className="post-footer">
        <h3 className="post-title">{title}</h3>
        <div className="post-actions">
          <button className="like-btn">
            <RiHeartLine /> {likes}
          </button>
          <button className="comment-btn">
            <RiChat1Line /> {comments}
          </button>
        </div>
      </div>
    </div>
  );
}

function PostList() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          {posts.slice(0, Math.ceil(posts.length / 2)).map(post => (
            <Post key={post.title} {...post} />
          ))}
        </div>
        <div className="col">
          {posts.slice(Math.ceil(posts.length / 2)).map(post => (
            <Post key={post.title} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;