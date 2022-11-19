import React, { useEffect, useState } from "react";
import FeedBox from "./FeedBox";
import "./Feed.style.css";
import Post from "../Post/Post.component";
import axios from "axios";


function Feed(props) {
  const [listposts, setListPosts] = useState([]);
  const data =JSON.parse(localStorage.getItem("users"));
  console.log(data);
    

  useEffect(() => {
    async function handlePosts() {
      try {
        const posturl = `http://localhost:8000/api/posts/`;
        const postdata = await axios.get(posturl).then(response => {
          setListPosts(response.data);
        })
      }
      catch (e) {
        console.log(e);
      }
    }
    try {
      handlePosts();
    }
    catch (e) {
      console.log(e);
    }

  },[])

  return (
    <div className="feed">
<<<<<<< HEAD
      <FeedBox/>
      {listposts ?
      <div>
      { 
      listposts.map((post) => (
=======
      <FeedBox  userid={data.id}  username={data.username} email={data.email}/>
      {listposts.map((post) => (
>>>>>>> c78474f3f2a48d2113b9eb382d76a3da442e4b7d
        <div key = {post.id}>
        <Post
          key={post.id}
          userid={post.userid}
          postid={post.id}
          username={post.username}
          feed = {post.feed}

        />
        </div>
<<<<<<< HEAD

      ))}
      </div>
      :
      <div>
      <h1>Create a Post</h1>
      </div>}
=======
      ))}
>>>>>>> c78474f3f2a48d2113b9eb382d76a3da442e4b7d
    </div>
  );
}

export default Feed;
