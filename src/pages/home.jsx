import Sidebar from "@components/layout/Sidebar";
import Post from "@components/modules/post/Post";
import { useRouter } from "next/router";
import { useUser } from "../components/hooks/useUser";
import { postRepository } from "../db/post";
import styles from '../styles/Post.module.css';

const Home = () => {
  const router = useRouter();
  const { user } = useUser();

  if (!user) {
    router.push("/");
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
                  {postRepository
                    .map((post) => (
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
