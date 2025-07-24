import React from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt, FaChartBar, FaSignOutAlt } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2> Menu</h2>
      <ul>
        <li>
          <Link to="/home">
            <FaTachometerAlt style={{ marginRight: "8px" }} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/charts">
            <FaChartBar style={{ marginRight: "8px" }} />
            Charts
          </Link>
        </li>
        <li>
          <Link to="/login">
            <FaSignOutAlt style={{ marginRight: "8px" }} />
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;