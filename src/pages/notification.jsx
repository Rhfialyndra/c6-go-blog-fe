import Sidebar from "@components/layout/Sidebar";
import Notification from "@components/modules/post/Notification";
import { useRouter } from "next/router";
import {useUser} from "../components/hooks/useUser"

const Notifications = () => {
  const router = useRouter();
  const {user}  = useUser();

  if (!user) {
    router.push("/")
  }
  
  return (
    <main style={{backgroundColor: "slategray", height: "100vh", alignItems: "center", justifyContent: "center"}}>
      <div style={{ marginTop: "4rem" }}>
        <div className="sidebar" style={{ backgroundColor: "#eee", 
                                          position: "fixed", top: "4rem"}}>
          <Sidebar />
        </div>
        <div className="content flex-grow" style={{ padding: '50px', width: "calc(80vw)", marginLeft:"calc(20vw - 50px)"}}>
          <div className="bg-white">
            <Notification />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Notifications;

