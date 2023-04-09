import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {

  return(
    <div className='wrapper'>
        <div className="section">
            <div className="top_navbar">
                <div className="hamburger">
                    <button href="#">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
            </div>
        
        </div>
        <div className="sidebar">
            <div className="flex justify-center items-center py-6">
                <button className="create-post-button bg-cyan-500 text-white rounded-full p-3 hover:bg-cyan-600 transition-colors flex items-center"
                    style={{ fontSize: '1.3rem'}}>
                    <FaPlus className="mr-2" /> Create Post
                </button>
            </div>
            <hr className="separator" style={{ borderWidth: "5px", borderColor: "darkgray" }}></hr>
            <ul>
                <li>
                    <a href="#" className="active flex items-center px-2 py-5">
                        <FaFileAlt className="mr-2" style={{ fontSize: '1.3rem'}}/>
                        <button className="item" style={{ fontSize: '1.3rem'}}>Posts</button>
                    </a>
                </li>
                <li>
                    <a href="#" className="active flex items-center px-2 py-5">
                        <FaBell className="mr-2" style={{ fontSize: '1.3rem'}}/>
                        <button className="item" style={{ fontSize: '1.3rem'}}>Notifications</button>
                    </a>
                </li>
            </ul>
            
        </div>
    </div>)
}

export default Sidebar;