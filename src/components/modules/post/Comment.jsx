import styles from '@styles/Home.module.css';

/*
async function fetchCommentById(postId) {
    const comments = await fetch(`/get_all_comment_by_postid?=${postId}`)
    if (!comments.ok) {
        throw new Error("Failed to fetch comments")
    }
    return comments
}
*/

export default function displayComments() {

    // Dummy comments
    const comments = [
        {
            name: 'John Smith',
            profileImg: '/assets/example.jpg',
            content: 'Lorem ipsum dolor sit amet'
        },
        {
            name: 'John Smith',
            profileImg: '/assets/example.jpg',
            content: 'Lorem ipsum dolor sit amet'
        }
    ]

  return (
    comments.forEach(comment => {
        <div>
            <p>{comment.name}</p>
            <img src={comment.profileImg} alt="Profile picture" />
            <p>{comment.content}</p>
        </div>
    })
  )
}
