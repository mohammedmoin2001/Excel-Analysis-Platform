import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import UploadSection from "../components/UploadSection";

const Home = () => {
  return (
    <div className="dashboard">
      <Sidebar />

     
      <div className="main-content" style={{ marginLeft: "220px", padding: "20px", marginTop: "80px" }}>
           <Header />
        <UploadSection />
        {/* You can add widgets, charts, tables here later */}
      </div>
     </div>
  );
};

export default Home;