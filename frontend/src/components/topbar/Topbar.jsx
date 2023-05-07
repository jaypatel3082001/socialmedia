import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
import Timeline from "@mui/icons-material/Timeline";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
// import CancelIcon from '@mui/icons-material/Cancel';
import axios from "axios";
// import Button from 'react-bootstrap';

export default function Topbar({ toggleOnlineFriends, toggleOtheroption, toggleLogout }) {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const username = useRef();

  const [open, setOpen] = useState(false);
  const [searchUser, setSearchUser] = useState("")
  const [searchdata, setSearchdata] = useState()

  const toggleSidebar = () => {
    setOpen(!open);
    console.log("Sidebar status", open);
  };
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.href = '/';
  }
  const handleChange = (event) => {
    // 👇 Get input value from "event"
    // setMessage();
    setSearchdata(event.target.value)
    console.log("sdfjdj",searchdata)
  };
  const handleClick = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.get(`users/user/findOne/${searchdata}`).then((data) => { return (data?.data?.data) })
      setSearchUser(res)
      // console.log("respone",res)


    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Social Site</span>
        </Link>
      </div>
      <form onSubmit={handleClick}>
        <div className="topbarCenter" >
          <div className="searchbar">
            <button type="submit" className="btn"><Search className="searchIcon" /></button>
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
              onChange={handleChange}
            />
            {/* <button type="reset" className="btn"><CancelIcon/></button> */}
          </div>
        </div>
      </form>
      {searchUser && searchdata &&
        <div className="searchspace">
        <Link to={`/profile/${searchUser.username}`}>
        <img
          src={
            searchUser.profilePicture
              ? PF + searchUser.profilePicture
              : PF + "person/noAvatar.png"
          }
          alt=""
          className="searchuserProfile"
        />
       </Link>
          <span className="searchusername">{searchUser.username}</span></div>}
      <div className="topbarRight" style={{ flex: open === true ? "12 1" : "" }}>
        <div className="topbarLinks" style={{ position: open === true ? "absolute" : "" }}>
          <HomeIcon className="topbarLink Hm" />
          <Timeline className="topbarLink Tl" />
        </div>
        {/* <div className="burger" onClick={toggleSidebar}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div> */}
        {open === true ? <>
          <span className="burger " style={{ display: 'none' }} onClick={toggleSidebar} > <CancelRoundedIcon />   </span>
        </> : <>
          <div className="burger" onClick={toggleSidebar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>

        </>}
        {open && (
          <div className="menu-sidebar">
            <ul >
              <li onClick={toggleOtheroption} className="nav-item">Other Option</li>
              <li onClick={toggleOnlineFriends} className="nav-item">Online friend</li>
              <li onClick={toggleLogout} className="nav-item"><button className="jk">LOGOUT</button></li>
            </ul>
          </div>
        )}
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        <div>
          <Link to="/register" onClick={logout}><button className="lg">LOGOUT</button></Link>
        </div>
      </div>
    </div>
  );
}
