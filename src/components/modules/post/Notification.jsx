import React from 'react';
import styles from '../../../styles/Notification.module.css';
import { RiUser3Line } from 'react-icons/ri';

const notifications = [
  {
    id: 1,
    author: 'John Smith',
    action: 'likes your blog',
    content: '',
    time: '1w ago',
  },
  {
    id: 2,
    author: 'Jane Doe',
    action: 'has commented:',
    content: '"Pretty Cool"',
    time: '2d ago',
  },
  {
    id: 2,
    author: 'Jane Doe',
    action: 'has commented:',
    content: '"Pretty Cool"',
    time: '2d ago',
  },
  {
    id: 2,
    author: 'Jane Doe',
    action: 'has commented:',
    content: '"Pretty Cool"',
    time: '2d ago',
  },
  {
    id: 2,
    author: 'Jane Doe',
    action: 'has commented:',
    content: '"Pretty Cool"',
    time: '2d ago',
  },
  // More notifications
];

function NotificationCard({ author, action, content, time }) {
  return (
    <div className={styles.card}>
      <RiUser3Line className={styles.icon} />
      <div className={styles.info}>
        <p>
          <strong>{author}</strong> {action} {content}
        </p>
        <span className={styles.time}>{time}</span>
      </div>
    </div>
  );
}

function Notification() {
  return (
    <div className={styles.container}>
      <div className={styles.notifications}>
        {notifications.map((notification) => (
          <NotificationCard key={notification.id} {...notification} />
        ))}
      </div>
    </div>
  );
}

export default Notification;