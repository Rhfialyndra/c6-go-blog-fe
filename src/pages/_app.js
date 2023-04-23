import "../styles/globals.css";
import UserAuthContextProvider from "@components/contexts/UserAuthContext";
import Layout from "@components/layout/Layout";
import { Toaster } from "react-hot-toast";
import EditProfile from "../components/elements/EditProfile";
import Profile from "./userProfile/Profile";

function GoBlog({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      {/*<Layout>*/}
      {/*  <Component {...pageProps} />*/}
      {/*  <Toaster position="bottom-center" />*/}
      {/*</Layout>*/}
      <EditProfile />
    </UserAuthContextProvider>
  );
}

export default GoBlog;
