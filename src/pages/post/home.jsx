import Navbar from "@components/layout/Navbar";
import Sidebar from "@components/layout/Sidebar";
import Post from "@components/modules/post/Post";

const Home = () => {
  return (
    // <main className="max-w-screen min-h-screen w-screen bg-white flex items-center justify-center">
    // <main className="flex-1 max-w-screen maax-w-screen bg-white flex items-center justify-center">
    <div className="w-screen bg-slate-500 items-center justify-center">
      <Navbar />
      <div className="sidebar" style={{backgroundColor: "#eee", width: "200px", height: "calc(100vh - 50px)", float: "left"}}>
        <Sidebar />
      </div>
      <div class="content" style={{ margin: '50px'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
          <div style={{ flex: 2 }}>
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
