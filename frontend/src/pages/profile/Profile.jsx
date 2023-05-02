import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import { useParams  } from "react-router-dom/cjs/react-router-dom.min";

export default function Profile() {
  const PF1 = process.env.REACT_APP_PUBLIC_FOLDER;

  const [user, setUser] = useState({});
  const username = useParams().username;
  // console.log("object is",params)

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios
        .get(`/users?username=${username}`)
        .then(data => {return data})
        .catch(error => console.log(error));
      setUser(res.data);
    }
    fetchUser();
  }, [username]);
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.coverPicture ? PF1+user.coverPicture : PF1+"person/noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.profilePicture ? PF1+user.profilePicture : PF1+"person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
            <div className="profileRightBottom">
            <Feed username={username}/>
            <Rightbar profile={user}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
