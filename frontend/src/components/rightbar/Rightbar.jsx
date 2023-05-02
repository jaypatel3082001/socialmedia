import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from "@mui/icons-material";

export default function Rightbar({ user, friendSidebaropen }) {
  const [friends, setFriends] = useState([])
  const {user: currentUser, dispatch} = useContext(AuthContext)
  const [followed,setFollowed] = useState(currentUser.followings.includes(user?.id))
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  // useEffect(()=>{
  //   setFollowed(currentUser.followings.includes(user?.id))
  // },[currentUser, user.id]);

  useEffect(()=>{
    const getFriends = async () => {
      try{
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data)
      }catch(err){
        console.log(err)
      }
    };
    getFriends();
  },[user]);

  const handleClick = async () =>{
    try{
      if(followed){
        await axios.put(`/users/${user._id}/unfollow`,{
          userId:currentUser._id,
        });
        dispatch({type:"UNFOLLOW",payload:user._id});
      }else{
        await axios.put(`/users/${user._id}/follow`,{
          userId:currentUser._id,
        });
        dispatch({type:"FOLLOW",payload:user._id});

      }
      setFollowed(!followed);


    }catch(err){
      // console.log(err)
    }
    // setFollowed(!followed)

  };

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

    return (
      <>

        {user.username !== currentUser.username && (
          <button className="RightbarFollowButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove /> : <Add />}
          {/* Follow<Add /> */}
          </button>

        )}
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
        {friends.map((friend)=>(
          <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
          <div className="rightbarFollowing">
           <img

            src={friend.profilePicture ? PF+friend.profilePicture : PF+"person/noAvatar.png"}
            alt=""
            className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">{friend.username}</span>
          </div>
          </Link>

        ))}


        </div>
      </>
    );
  };
  return (
    <div className="rightbar" style={{display: friendSidebaropen && "block" }}>
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
