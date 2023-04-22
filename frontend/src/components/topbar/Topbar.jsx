import React from "react"
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import Timeline from '@mui/icons-material/Timeline';
import {Link} from 'react-router-dom';

function Topbar() {
  return (
    <div className="topbarContainer">

      <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}><span className="logo">Social Site</span></Link>

      </div>
      <div className="topbarCenter">
      <div className="searchbar">
      <SearchIcon className="searchIcon"/>
      <input placeholder="Search for friend, post or video" className="SearchInput" />
      </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLink">
          <HomeIcon className="hm"/>
          <Timeline className="tl"/>
        </div>
        <div className="burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
         </div>
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
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
        </div>

      </div>
    </div>




  )
}

export default Topbar;