import styles from "@styles/Comment.module.css";
import ReplyTile from "../../elements/ReplyTile";
import { useState, useRef, useEffect } from "react";
import ReplyInput from "../../elements/ReplyInput";
import { commentRepository } from "../../../db/comment";
import NoComment from "../../elements/NoComment";

/* fetch comments
async function fetchCommentsById(postId) {
    const comments = await fetch(`/get_all_comment_by_postid?=${postId}`)
    if (!comments.ok) {
        throw new Error("Failed to fetch comments")
    }
    return comments
}
*/

export default function CommentSection({postId, comments, commentsSetter}) {
  // const inputRef = useRef(null);
  // useEffect(() => {
  //   inputRef.current.focus();
  // }, [newComment]);


  return (
    <div>
      <div style={{ height: "480px"}} className="overflow-y-auto">
        { comments.length == 0 ? <NoComment/> :
        comments.map((comment, index) => {
          return(
            <ReplyTile key={index} comment={comment} index={index} comments={comments} commentsSetter={commentsSetter}/>
          )
        })
        
        }
        
        
      </div>
      <div>
        <ReplyInput postId={postId} allComment={comments} allCommentSetter={commentsSetter} />
      </div>
    </div>
  );
}
