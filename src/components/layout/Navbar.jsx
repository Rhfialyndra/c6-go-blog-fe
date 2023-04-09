import { FaSearch } from 'react-icons/fa';
import styles from '../../styles/Post.module.css';

const Navbar = () => {
   return(
    <div>
      <div className="navbar bg-white flex justify-between items-center">
        <a href="../post/home">
            <img src="/assets/logo.jpg" alt="Logo Go-Blog"/>
        </a>
        <div className="search-group rounded-lg border border-black border-solid overflow-hidden">
            <div className="form-control bg-white border-none flex items-center">
                <input type="text" placeholder="Search" className="input input-bordered bg-white border-none flex-grow h-8" />
            </div>
            <button className="bg-cyan-500 p-2 hover:bg-cyan-600">
                <FaSearch className="text-white text-base h-full" />
            </button>
        </div>
        <div className="right-content">
            {/* <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border border-black border-solid">
                    <div className="w-10 rounded-full">
                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                    <li>
                    <a className="justify-between">
                        Profile
                    </a>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
            </div> */}
            <div className="flex justify-between gap-4">
                <button className="bg-cyan-500 text-white rounded px-4 py-2 hover:bg-cyan-600 transition-colors">Login</button>
                <button className="bg-cyan-500 text-white rounded px-4 py-2 hover:bg-cyan-600 transition-colors">Sign up</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;