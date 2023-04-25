import "./post.css";
import MoreVert from '@mui/icons-material/MoreVert';
// import { Users } from "../../dummyData";
import { useState, useEffect } from "react";
import axios from "axios"
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';


export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false)
  const [user, setUser] = useState({});
  // const [posts,setPosts] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  useEffect(() => {
    const fetchUser = async () => {

      // const res = await axios.get({'users/': post.userId});
      const res = await axios
        .get(`users/${post.userId}`)
        .then(data => {return data})
        .catch(error => console.log(error));
      setUser(res.data);


    }
    fetchUser();
    // alert(user.email)
  }, [post.userId]);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }
  // console.log(user)

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={user.profilePicture || PF + "person/noAvatar.png"}
                alt=""
              />
            </Link>
            <span className="postUsername">
              {user.username}

              {/* {"jay"} */}
            </span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={PF + 'like.png'} onClick={likeHandler} alt="" />
            <img className="likeIcon" src={PF + 'heart.png'} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
