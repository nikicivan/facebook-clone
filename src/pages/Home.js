import React from "react";
import Feed from "../components/feed/Feed";
import Sidebar from "../components/sidebar/Sidebar";
import Widgets from "../components/widgets/Widgets";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default Home;
