import styles from '@styles/Comment.module.css';
import { useState, useRef, useEffect } from 'react';

/* fetch comments
async function fetchCommentsById(postId) {
    const comments = await fetch(`/get_all_comment_by_postid?=${postId}`)
    if (!comments.ok) {
        throw new Error("Failed to fetch comments")
    }
    return comments
}
*/

export default function Comment() {
  const [comments, setComments] = useState([
    {
      author: 'Admin Go-Blog',
      time: '9 April 08:00 AM',
      profileImg: '/assets/title logo.jpg',
      content: 'Brisik ngab'
    },
    {
      author: 'tbatba',
      time: '9 April 07:45 AM',
      profileImg: '/assets/Capture.png',
      content: 'Nam posuere turpis at erat pellentesque, ac lobortis leo consectetur. Cras vel ligula porttitor, egestas sapien at, sollicitudin augue. Donec sed ultrices neque. Praesent condimentum turpis eget felis molestie ornare. Donec ante justo, vulputate in tortor vel, interdum cursus odio. Nunc porta quis massa a faucibus. Vestibulum gravida sem aliquet nulla mattis facilisis. Etiam convallis ipsum a nisi accumsan rhoncus. Proin ornare nisl id lacus porttitor, rhoncus laoreet libero pharetra. Pellentesque faucibus euismod neque, et pellentesque leo euismod non. Aliquam tristique ante mi.'
    },
    {
      author: 'tbatba',
      time: '9 April 07:42 AM',
      profileImg: '/assets/Capture.png',
      content: 'Vivamus iaculis, tortor in commodo venenatis, augue purus vehicula nisl, vulputate pharetra felis diam ac arcu. Nam nec nisl eget nisl ultrices fermentum. Proin facilisis nibh orci, vitae porta purus varius sed. Aliquam varius tempor sollicitudin. Fusce commodo blandit ex, sit amet suscipit ligula sodales eget. Fusce id lectus ut orci porta facilisis. Cras in ex ac ante vehicula suscipit eu nec ex. In ultrices dolor ligula, quis pulvinar odio tempus non. Donec molestie leo id finibus pharetra. Vivamus facilisis non turpis vel feugiat. Donec quam turpis, dictum id elementum placerat, tincidunt non justo.'
    },
    {
      author: 'NextJS',
      time: '9 April 02:30 AM',
      profileImg: '/assets/nextjs.png',
      content: 'Ngetes bang'
    },
  ]);
  const [newComment, setNewComment] = useState('');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, [newComment]);

  function DiplayComments() {
    return (
      comments.map(comment => (
        <div>
          <div className={styles['comment-header']}>
            <img className={styles['profile-img']} src={comment.profileImg} alt="Author Profile" />
            <h1 style={{ fontWeight: 'bold' }}>{comment.author}</h1>
            <p className={styles['comment-time']}>{comment.time}</p>
          </div>
          <div className={styles['comment-content']}>
            {comment.content}
          </div>
        </div>
      ))
    )
  }

  function handleAddComment(event) {
    event.preventDefault();
    if (newComment) {

      // Current time
      const currentTime = new Date();
      let hours = currentTime.getHours();
      let minutes = currentTime.getMinutes();
      let ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? '0' + minutes : minutes;

      // Added Comment
      const addedComment = {
        author: 'Me',
        time: hours + ':' + minutes + ' ' + ampm,
        profileImg: '/assets/example.jpg',
        content: newComment
      }

      setComments([addedComment, ...comments]);
      setNewComment('');
    }
  }

  function handleChange(event) {
    setNewComment(event.target.value);
  }

  function CommentForm() {
    return (
      <form onSubmit={handleAddComment}>
        <input type="text" value={newComment} onChange={handleChange} placeholder='Your comment' ref={inputRef} className={styles['comment-form']} />
        <button type="submit" className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add</button>
      </form>
    )
  }

  return (
    <div>
      <div style={{ height: '480px', overflow: 'auto' }}>
        <DiplayComments />
      </div>
      <CommentForm />
    </div>
  )
}
