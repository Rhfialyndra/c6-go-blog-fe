import Sidebar from "@components/layout/Sidebar";
import Post from "@components/modules/post/Post";
import { useRouter } from "next/router";
import {useUser} from "../components/hooks/useUser"
const Home = () => {
  const router = useRouter();
  const {user}  = useUser();

  if (!user) {
    router.push("/")
  }
  
  return (
    <main className="w-screen bg-slate-500 items-center justify-center">
      <div style={{ display: 'flex'}}>
        <div className="sidebar" style={{ backgroundColor: "#eee", width: "calc(20vw - 50px)", height: "calc(100vh)" }}>
          <Sidebar />
        </div>
        <div className="content" style={{ padding: '50px', width: "calc(80vw)"}}>
          <div className="bg-white">
            <Post />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Home;
