import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Footer from "../../components/footer/Footer"

export default function Profile(userdata) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;
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

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  const curruntuser = localStorage.getItem("email")
  return (
    <>
      <Topbar toggleOnlineFriends={toggleOnlineFriends} toggleOtheroption={toggleOtheroption} toggleLogout={toggleLogout}/>
      <div className="profile">
        <Sidebar otherSidebaropen={otherSidebaropen}/>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={
                  user.coverPicture
                    ? PF + user.coverPicture
                    : PF + "person/noCover.png"
                }
                alt=""
              />
              <img
                className="profileUserImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            {username == userdata?.user?.username && <Feed username={username} />}
            <Rightbar user={user} friendSidebaropen={friendSidebaropen}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
