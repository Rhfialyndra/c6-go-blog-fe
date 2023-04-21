import styles from '@styles/Comment.module.css';

const ReplyTile = ({comment}) => {
    return(
        <div className='mb-10'>
        <div className={styles['comment-header']}>
            <img className={styles['profile-img']} src={comment.profileImg} alt="Author Profile" />
            <h1 style={{ fontWeight: 'bold' }}>{comment.author}</h1>
            <p className={styles['comment-time']}>{comment.time}</p>
          </div>
          <div className={styles['comment-content'] + " text-justify"}>
            {comment.content}
          </div>
        </div>
    )
}

export default ReplyTile;