import "../styles/globals.css";
import UserAuthContextProvider from "@components/contexts/UserAuthContext";
import Layout from "@components/layout/Layout";

function GoBlog({ Component, pageProps }) {
  return (
    <UserAuthContextProvider>
      
    <Layout>

      <Component {...pageProps} />
    </Layout>
      
    </UserAuthContextProvider>
  );
}

export default GoBlog;
