import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (

      <>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
      <>
        {/* <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Mehsana</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Ambliyasan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        {/* </div> */}
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
           <img

            src={PF+'person/1.jpeg'}
            alt=""
            className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Abhi patel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+'person/2.jpeg'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Pratik</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+'person/3.jpeg'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">lav Patel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+'person/4.jpeg'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Harsh Gajjar</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+'person/5.jpeg'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Abhishek Patel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+'person/6.jpeg'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Ashish Patel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+'person/6.jpeg'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Dax Patel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={PF+'person/6.jpeg'}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Virat Patel</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
