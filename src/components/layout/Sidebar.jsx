import { FaPlus } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {
  return(
    <div class="wrapper">
        <div class="section">
            <div class="top_navbar">
                <div class="hamburger">
                    <a href="#">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
        
        </div>
        <div class="sidebar">
            {/* create new post */}
            <button className="create-post-button bg-cyan-500 text-white rounded px-4 py-2 hover:bg-cyan-600 transition-colors">
                <FaPlus /> Create Post
            </button>
            <hr class="separator" style={{ borderWidth: "5px", borderColor: "darkgray" }}></hr>
            <ul>
                <li>
                    <a href="#" class="active">
                        <span class="icon"><i class="fas fa-home"></i></span>
                        <span class="item"><FaFileAlt />Posts</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span class="icon"><i class="fas fa-desktop"></i></span>
                        <span class="item"><FaBell />Notifications</span>
                    </a>
                </li>
            </ul>
            
        </div>

    </div>)
}

export default Sidebar;