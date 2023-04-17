import styles from '@styles/Comment.module.css';

/* fetch comments
async function fetchCommentsById(postId) {
    const comments = await fetch(`/get_all_comment_by_postid?=${postId}`)
    if (!comments.ok) {
        throw new Error("Failed to fetch comments")
    }
    return comments
}
*/

const comments = [
  {
    author: 'Admin Go-Blog',
    time: '08:00 am',
    profileImg: '/assets/title logo.jpg',
    content: 'Brisik ngab'
  },
  {
    author: 'tbatba',
    time: '07:45 am',
    profileImg: '/assets/Capture.png',
    content: 'Nam posuere turpis at erat pellentesque, ac lobortis leo consectetur. Cras vel ligula porttitor, egestas sapien at, sollicitudin augue. Donec sed ultrices neque. Praesent condimentum turpis eget felis molestie ornare. Donec ante justo, vulputate in tortor vel, interdum cursus odio. Nunc porta quis massa a faucibus. Vestibulum gravida sem aliquet nulla mattis facilisis. Etiam convallis ipsum a nisi accumsan rhoncus. Proin ornare nisl id lacus porttitor, rhoncus laoreet libero pharetra. Pellentesque faucibus euismod neque, et pellentesque leo euismod non. Aliquam tristique ante mi.'
  },
  {
    author: 'tbatba',
    time: '07:42 am',
    profileImg: '/assets/Capture.png',
    content: 'Vivamus iaculis, tortor in commodo venenatis, augue purus vehicula nisl, vulputate pharetra felis diam ac arcu. Nam nec nisl eget nisl ultrices fermentum. Proin facilisis nibh orci, vitae porta purus varius sed. Aliquam varius tempor sollicitudin. Fusce commodo blandit ex, sit amet suscipit ligula sodales eget. Fusce id lectus ut orci porta facilisis. Cras in ex ac ante vehicula suscipit eu nec ex. In ultrices dolor ligula, quis pulvinar odio tempus non. Donec molestie leo id finibus pharetra. Vivamus facilisis non turpis vel feugiat. Donec quam turpis, dictum id elementum placerat, tincidunt non justo.'
  },
  {
    author: 'NextJS',
    time: '02:30 am',
    profileImg: '/assets/nextjs.png',
    content: 'Ngetes bang'
  },
]

export default function Comment() {
  return (
    comments.map(comment => (
      <div>
        <div className={styles['comment-header']}>
          <img className={styles['profile-img']} src={comment.profileImg} alt="Author Profile" />
          <h1 style={{ fontWeight: 'bold' }}>{comment.author}</h1>
          <p style={{ opacity: '50%', marginLeft: '2%' }}>{comment.time}</p>
        </div>
        <div className={styles['comment-content']}>
          {comment.content}
        </div>
      </div>
    ))
  )
}
