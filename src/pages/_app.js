import "../styles/globals.css";
import UserAuthContextProvider from "@components/contexts/UserAuthContext";
import Layout from "@components/layout/Layout";
import EditProfile from "./userProfile/EditProfile";
import Profile from "./userProfile/Profile";
import { Toaster } from "react-hot-toast";

function GoBlog({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      <Layout>
        <Component {...pageProps} />
        <Toaster position="bottom-center" />
      </Layout>
      {/*<Profile />*/}
    </UserAuthContextProvider>
  );
}

export default GoBlog;
