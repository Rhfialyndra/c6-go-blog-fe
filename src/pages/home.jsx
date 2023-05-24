import Sidebar from "@components/layout/Sidebar";
import Post from "@components/modules/post/Post";
import Router from "next/router";
import { postRepository } from "../db/post";
import styles from "../styles/Post.module.css";
import { useUser } from "../components/hooks/useUser";
import { useEffect, useState } from "react";
import { getAllPost } from "../queries/post/getAllPost";
import { errorToast, expiredTokenToast } from "../utils/toast";

const Home = () => {
  const { user, removeUser } = useUser();
  const [posts, setPosts] = useState(null);

  if (user == null) {
    Router.push("/auth/login")
    return; 
  }

  useEffect(() => {

    const fetchAllPost = async () => {
      const res = getAllPost();
      if (res.status == 200) {
        setPosts(res.data);
      } else if (res.status == 401) {
        expiredTokenToast();

        setTimeout(() => {
          removeUser();
          replace("/auth/login");
        }, 2000);
      } else if (res.status >= 400) {
        errorToast(res.message);
      } else {
        errorToast("unknown error while processing your request.");
      }
    }

    fetchAllPost();


    console.log(posts)

  }, [])


  return (
    <main className=" bg-slate-500 items-center justify-center">
      <div style={{ marginTop: "4rem" }}>
        <div
          className="sidebar"
          style={{ backgroundColor: "#eee", position: "fixed", top: "4rem" }}
        >
          <Sidebar />
        </div>
        <div
          className="content flex flex-col items-center w-full"
          style={{
            padding: "50px",
            width: "calc(80vw)",
            marginLeft: "calc(20vw - 50px)",
          }}
        >
          <div className="bg-white min-w-[512px]">
            <div className={styles.container}>
              <div className={styles.col}>
                {posts.map((post) => (
                  <Post key={post.postId} 
                  creator={post.creator.username}
                  creatorId={post.creator.id}
                  title={post.title}
                  content={post.content}
                  timeCreation={post.timeCreation}
                  likes={likes} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
