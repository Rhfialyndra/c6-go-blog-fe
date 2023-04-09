import React, { useState } from 'react';
import { RiHeartLine, RiChat1Line } from 'react-icons/ri';
import styles from '../../../styles/Post.module.css';

const posts = [
  {
    author: 'John Smith',
    profileImg: '/assets/example.jpg',
    postImg: '/assets/example.jpg',
    title: 'Beautiful sunset',
    date: 'April 9, 2023',
    likes: 10,
    comments: 5,
  },
  {
    author: 'John Smith',
    profileImg: '/assets/example.jpg',
    postImg: '/assets/example.jpg',
    title: 'Beautiful sunset',
    date: 'April 9, 2023',
    likes: 10,
    comments: 5,
  },
  // More posts
];

function Post({ author, profileImg, postImg, title, date, likes, comments }) {
  const [numLikes, setNumLikes] = useState(likes); // add state for numLikes
  const [liked, setLiked] = useState(false); // add state for liked status

  const toggleLike = () => {
    if (liked) {
      setNumLikes(numLikes - 1); // decrement numLikes
      setLiked(false); // set liked status to false
    } else {
      setNumLikes(numLikes + 1); // increment numLikes
      setLiked(true); // set liked status to true
    }
  };

  return (
    
    <div className='p-8'>
      <div className={styles['post-header']}>
        <img className={styles['profile-img']} src={profileImg} alt="Author Profile" />
        <div className={styles['post-author']}>
          <h2 className={styles['post-author-name']}>{author}</h2>
          <p className={styles['post-date']}>{date}</p>
        </div>
      </div>
      <div className={styles.post}>
        <img className={styles['post-img']} src={postImg} alt="Post Image" />
        <div className={styles['post-footer']}>
          <h3 className={styles['post-title']}>{title}</h3>
          <div className={styles['post-actions']}>
            <button className={`${styles[liked ? 'like-btn' : 'unlike-btn']}`} onClick={toggleLike}>
              <RiHeartLine className={styles['like-icon']} /> {numLikes}
            </button>
            <button className={styles['comment-btn']}>
              <RiChat1Line /> {comments}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostList() {
  return (
    <div className={styles.container} >
      <div className={styles.row}>
        <div className={styles.col}>
          {posts.slice(0, Math.ceil(posts.length / 2)).map(post => (
            <Post key={post.title} {...post} />
          ))}
        </div>
        <div className={styles.col}>
          {posts.slice(Math.ceil(posts.length / 2)).map(post => (
            <Post key={post.title} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostList;