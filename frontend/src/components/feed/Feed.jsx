import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"
// import { Posts } from "../../dummyData";

export default function Feed() {
  const [posts,setPosts] = useState([]);
  // const [text,setText] = useState("");
  useEffect(()=>{
    const fetchPosts = async () => {

      const res = await axios.get("posts/timeline/63f88749e795721223406c6a");
      setPosts(res.data)
      // console.log(res)
    }
    fetchPosts();
  },[]);
  return (
    <div className="feed">

      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
