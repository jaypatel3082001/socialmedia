import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Footer from "../../components/footer/Footer";

export default function Profile() {
  const PF1 = process.env.REACT_APP_PUBLIC_FOLDER + 'post/3.jpeg';
  const PF2 = process.env.REACT_APP_PUBLIC_FOLDER + 'person/7.jpeg'
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
                src={PF1}
                alt=""
              />
              <img
                className="profileUserImg"
                src={PF2}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Jaykumar Patel</h4>
                <span className="profileInfoDesc">Hello my dear friends!</span>
            </div>
          </div>
            <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
