import Navbar from "./Navbar";
import Drawer from "./Drawer";
const Layout = ({ children }) => {
  return (
    <Drawer>
      <Navbar />
      <main>{children}</main>
    </Drawer>
  );
};

export default Layout;
