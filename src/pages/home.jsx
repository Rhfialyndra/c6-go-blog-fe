import Sidebar from "@components/layout/Sidebar";
import Post from "@components/modules/post/Post";
import Router,{ useRouter } from "next/router";
import { postRepository } from "../db/post";
import styles from "../styles/Post.module.css";
import { useUser } from "../components/hooks/useUser";

const Home = () => {
  const { user } = useUser();

  if (user == null) {
    Router.push("/auth/login")
    return; 
}
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
          <div className="bg-white">
            <div className={styles.container}>
              <div className={styles.col}>
                {postRepository.map((post) => (
                  <Post key={post.title} {...post} />
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
