import React, { useState } from 'react'
// import {Person} from "@material-ui/icons"
import  Topbar  from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import Footer from '../../components/footer/Footer';

function Home() {
  const [friendSidebaropen, setFriendSidebarOpen] = useState(false);
  const [otherSidebaropen, setOtherSidebaropen] = useState(false);

  const toggleOnlineFriends = () => {
    setOtherSidebaropen(true)
    setFriendSidebarOpen(!friendSidebaropen);
    console.log("Friend status", friendSidebaropen);
  };
  const toggleOtheroption = () => {
    setFriendSidebarOpen(false)
    setOtherSidebaropen(!otherSidebaropen);
    console.log("other status", otherSidebaropen);
  };
  return( <>
  <Topbar toggleOnlineFriends={toggleOnlineFriends} toggleOtheroption={toggleOtheroption}/>
  <div className="homeContainer">
    <Sidebar otherSidebaropen={otherSidebaropen}/>
    <Feed />
    <Rightbar friendSidebaropen={friendSidebaropen}/>
  </div>
  <Footer />
</>
  );
}

export default Home;