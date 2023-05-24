import Loader from "../components/elements/Loader";
import { searchPost } from "../queries/post/searchPost";
import { useUser } from "../components/hooks/useUser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/Post.module.css";
import Sidebar from "@components/layout/Sidebar";
import Post from "@components/modules/post/Post";
import { errorToast, expiredTokenToast } from "../utils/toast";
import NotFound from "../components/elements/NotFound";
import { postRepository } from "../db/post";

const Search = () => {
  const { user, removeUser } = useUser();
  const { query, replace } = useRouter();
  const [posts, setPosts] = useState(null);

  useEffect(() => {

    const fetchPost = async () => {
      const res = await searchPost(query.query);

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
    };

    fetchPost();
  }, [query]);

  if (user == null) {
    replace("/auth/login");
    return;
  }

  if (posts == null) return <Loader fullscreen={true} />;
  return (
    <main className=" bg-gray-100 items-center justify-center">
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
          {posts.length == 0 ? (
            <NotFound />
          ) : (
            <div className="bg-white border-x border-b-1 min-w-[512px]">
              <div className={styles.container + " border-b"}>
                <div className={styles.col}>
                  {posts.map((post) => (
                    
                    <Post key={post.postId} 
                    creator={post.creator.username}
                    creatorId={post.creator.id}
                    title={post.title}
                    content={post.content}
                    timeCreation={post.timeCreation}
                    likes={post.likes}/>

                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Search;