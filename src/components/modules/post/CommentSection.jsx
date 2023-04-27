import styles from "@styles/Comment.module.css";
import ReplyTile from "../../elements/ReplyTile";
import { useState, useRef, useEffect } from "react";
import ReplyInput from "../../elements/ReplyInput";
import { commentRepository } from "../../../db/comment";

/* fetch comments
async function fetchCommentsById(postId) {
    const comments = await fetch(`/get_all_comment_by_postid?=${postId}`)
    if (!comments.ok) {
        throw new Error("Failed to fetch comments")
    }
    return comments
}
*/

export default function CommentSection() {
  const [comments, setComments] = useState(commentRepository);
  const [newComment, setNewComment] = useState("");
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, [newComment]);

  function DiplayComments() {
    return comments.map((comment) => <ReplyTile comment={comment} />);
  }

  // function handleAddComment(event) {
  //   event.preventDefault();
  //   if (newComment) {

  //     // Current time
  //     const currentTime = new Date();
  //     let hours = currentTime.getHours();
  //     let minutes = currentTime.getMinutes();
  //     let ampm = hours >= 12 ? 'PM' : 'AM';

  //     hours = hours % 12;
  //     hours = hours ? hours : 12;
  //     minutes = minutes < 10 ? '0' + minutes : minutes;

  //     // Added Comment
  //     const addedComment = {
  //       author: 'Me',
  //       time: hours + ':' + minutes + ' ' + ampm,
  //       profileImg: '/assets/example.jpg',
  //       content: newComment
  //     }

  //     setComments([addedComment, ...comments]);
  //     setNewComment('');
  //   }
  // }

  // function handleChange(event) {
  //   setNewComment(event.target.value);
  // }

  // function CommentForm() {
  //   return (
  //     <form onSubmit={handleAddComment}>
  //       <input type="text" value={newComment} onChange={handleChange} placeholder='Your comment' ref={inputRef} className={styles['comment-form']} />
  //       <button type="submit" className="bg-cyan-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add</button>
  //     </form>
  //   )
  // }

  return (
    <div>
      <div style={{ height: "480px", overflow: "auto" }}>
        <DiplayComments />
      </div>
      <div>
        <ReplyInput />
      </div>
    </div>
  );
}
