import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios"
// import { Posts } from "../../dummyData";

export default function Feed({userId}) {

  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    const fetchPosts = async () => {
      // alert(username)

      const res = await axios.get(`http://localhost:8801/api/posts/profile/john`)
      // const res = userId ? await axios.get(`posts/profile/${userId}`).then(data => {return data})
      // .catch(error => console.log(error)) : await axios.get("posts/timeline/63f88749e795721223406c6a").then(data => {return data})
      // .catch(error => console.log(error));
      console.log("resss --->>",res)


      // setPosts(res.data)
    //   fetch('http://localhost:8800/api/posts', {
    //  method: 'POST',
    //  mode: 'cors',
    //  headers: {
    //    'Accept': 'application/json',
    //    'Content-Type': 'application/json'
    //  },
    //  body: JSON.stringify(res.data)})


    }
    fetchPosts();
  },[userId]);
  return (
    <div className="feed">

      <div className="feedWrapper">
        <Share />
        {/* {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
