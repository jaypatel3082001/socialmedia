import React, { useContext, useState } from "react";
import "./topbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationIcon from "@mui/icons-material/Notifications";
import HomeIcon from "@mui/icons-material/Home";
import Timeline from "@mui/icons-material/Timeline";
import { Link } from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext"

function Topbar({toggleOnlineFriends,toggleOtheroption}) {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => {
    setOpen(!open);
    console.log("Sidebar status", open);
  };
  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const toggleOtheroption = () => {
  //   setOpen(!open);
  //   console.log("Sidebar status", open);
  // };
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social Site</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="SearchInput"
          />
        </div>
      </div>

      <div className="topbarRight" >
        <div className="topbarLink">
          <HomeIcon className="hm" />
          <Timeline className="tl" />
        </div>
        <div className="burger" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {open && (
          <div className="menu-sidebar">
            <ul>
              <li onClick={toggleOtheroption}>left</li>
              <li onClick={toggleOnlineFriends}>Online friend</li>
            </ul>
          </div>
        )}
        <div className="topbarIcons">
          <div className="topbarIconIteam">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconIteam">
            <ChatIcon />
            <span className="topbarIconBadge">75</span>
          </div>
          <div className="topbarIconIteam">
            <NotificationIcon />
            <span className="topbarIconBadge">100</span>
          </div>
        </div>
        <div className="userpro">
        <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? PF + user.profilePicture : PF+"person/noAvatar.png"} alt="" className="topbarImg" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
