import React from "react";
import "./Sidebar.css";
import { FaTachometerAlt, FaUpload, FaChartBar, FaUser, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Excel Analytics</h2>
      <ul className="sidebar-menu">
        <li><FaTachometerAlt /> Dashboard</li>
        <li><FaUpload /> Upload</li>
        <li><FaChartBar /> Charts</li>
        <li><FaUser /> Profile</li>
        <li><FaSignOutAlt /> Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;