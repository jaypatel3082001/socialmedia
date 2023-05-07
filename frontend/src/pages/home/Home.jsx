import React, { useState } from 'react'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Footer from "../../components/footer/Footer"
import "./home.css"

export default function Home() {
  const [friendSidebaropen, setFriendSidebarOpen] = useState(false);
  const [otherSidebaropen, setOtherSidebaropen] = useState(false);

  const toggleOtheroption = () => {
    setFriendSidebarOpen(false)
    setOtherSidebaropen(!otherSidebaropen)


  };
  const toggleOnlineFriends = () => {
    setOtherSidebaropen(false)
    setFriendSidebarOpen(!friendSidebaropen)

  };

  const toggleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };
  return (
    <>
      <Topbar toggleOnlineFriends={toggleOnlineFriends} toggleOtheroption={toggleOtheroption} toggleLogout={toggleLogout}/>
      <div className="homeContainer">
        <Sidebar otherSidebaropen={otherSidebaropen}/>
        <Feed/>
        <Rightbar friendSidebaropen={friendSidebaropen} />
        <Footer/>
      </div>
    </>
  );
}
