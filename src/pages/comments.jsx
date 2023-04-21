import Sidebar from "@components/layout/Sidebar";
import { useRouter } from "next/router";
import { useUser } from "../components/hooks/useUser"
import styles from '../styles/Post.module.css';
import CommentSection from "@components/modules/post/CommentSection";
import Post from "@components/modules/post/Post";

const post = {
  author: 'John Smith',
  username: '@johnsmith',
  profileImg: '/assets/example.jpg',
  postImg: '/assets/example.jpg',
  title: 'Beautiful sunset',
  date: 'April 9, 2023',
  likes: 10,
  comments: 5,
  mins_read: 5,
}


function PostComments() {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className={styles.col}>
          <Post key={post.title} {...post} />
        </div>
        <div className="w-1/2 px-5">
          <CommentSection />
        </div>
      </div>
      </>
  );
}

export default function Comments() {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    router.push("/")
  }

  return (
    <main className=" bg-slate-500 items-center justify-center">
      <div style={{ marginTop: "4rem" }}>
        <div className="sidebar" style={{ backgroundColor: "#eee", 
                                          position: "fixed", top: "4rem"}}>
          <Sidebar />
        </div>
        <div className="content flex-grow" style={{ padding: '50px', width: "calc(80vw)", marginLeft:"calc(20vw - 50px)"}}>
          <div className="bg-white">
            <PostComments />
          </div>
        </div>
      </div>
    </main>
  );
};