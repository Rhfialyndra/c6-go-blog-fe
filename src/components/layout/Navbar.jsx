import SearchBar from "@components/elements/SearchBar";
import LinkedButton from "../elements/LinkedButton";
import { useUser } from "../hooks/useUser";

const Navbar = () => {
  const { user } = useUser();
  return (
    // <div className="w-full navbar bg-white  drop-shadow-lg justify-between">
    <div className="w-full navbar flex justify-between items-center gap-3" style={{ position: "fixed", top: 0, left: 0, width: "100%", backgroundColor: "#fff", boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)", zIndex: 1000 }}>
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <SidebarSVG/>
        </label>
      </div>

      <a href="../post/home">
        <img src="/assets/logo.jpg" alt="Logo Go-Blog" />
      </a>

      <div className="md:w-1/2 lg:w-1/3">
        <SearchBar />
      </div>

      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal text-black gap-x-3 justify-end">
          {user ? (
            <div className="dropdown dropdown-hover dropdown-end">
              <label tabIndex={0} className="btn m-1">
                Hover
              </label>
              <ul
                tabIndex={0}
                className="bg-white dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-2"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          ) : (
            <>
              <LinkedButton link={"/auth/login"} title={"login"} />
              <LinkedButton link={"/auth/register"} title={"register"} />
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

const SidebarSVG = () => {
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-6 h-6 stroke-current"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    ></path>
  </svg>
}

export default Navbar;
