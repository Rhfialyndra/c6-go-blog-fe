import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return(
    <div class={`wrapper ${isOpen ? 'open' : ''}`}>
        <div class="section">
            <div class="top_navbar">
                <div class="hamburger">
                    <button href="#">
                        <i class="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        
        </div>
        <div class="sidebar">
            <div className="flex justify-center items-center py-6">
                <button className="create-post-button bg-cyan-500 text-white rounded-full p-3 hover:bg-cyan-600 transition-colors flex items-center"
                    style={{ fontSize: '1.3rem'}}>
                    <FaPlus className="mr-2" /> Create Post
                </button>
            </div>
            <hr class="separator" style={{ borderWidth: "5px", borderColor: "darkgray" }}></hr>
            <ul>
                <li>
                    <a href="#" class="active flex items-center px-2 py-5">
                        <FaFileAlt className="mr-2" style={{ fontSize: '1.3rem'}}/>
                        <button class="item" style={{ fontSize: '1.3rem'}}>Posts</button>
                    </a>
                </li>
                <li>
                    <a href="#" class="active flex items-center px-2 py-5">
                        <FaBell className="mr-2" style={{ fontSize: '1.3rem'}}/>
                        <button class="item" style={{ fontSize: '1.3rem'}}>Notifications</button>
                    </a>
                </li>
            </ul>
            
        </div>
        <button className="toggle-sidebar-button" onClick={toggleSidebar}>
            {isOpen ? 'Close' : 'Open'}
        </button>
    </div>)
}

export default Sidebar;