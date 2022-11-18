import { Avatar } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../../store/PostFeedSlice";
import "./FeedBox.style.css";

export default function FeedBox(props) {
   const postdetails = useSelector((state)=>state.post.postdata);
   console.log(props.userid);
   const dispatch = useDispatch();
   const randomNumberInRange=(min, max)=> {
    return Math.round(Math.random() * (max - min + 1)) + min;
  }

   async function handlePosts() {
    try {
        await dispatch(postActions.setPostId(randomNumberInRange(1,100)));
        await dispatch(postActions.setPostUsername(props.username));
        await dispatch(postActions.setPostUserId(props.userid));
      const posturl = `http://localhost:8000/api/posts/`;
      const postdata = await axios.post(posturl,postdetails).then(response => {

      })
      alert("successful")
      window.location.reload(true);
    }
    catch (e) {
      console.log(e);
    }
}


   
  return (
    <div className="feedBox">
      <div className="feedBox__info">
        <Avatar
          src={
               "https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          }
          className="feedBox__infoAvatar"
        />
        <h3 style={{fontFamily:"inherit"}}>{props.username ? props.username : props.email}</h3>
      </div>
      <div className="feedBox__quora">
        < textarea value ={postdetails.feed} placeholder={"post something you feel,think .........."} onChange={(e)=>{
            dispatch(postActions.setFeed(e.target.value))
        }}></textarea>
        <button onClick={handlePosts}>Post</button>
        
      </div>
    </div>
  );
}
