import React, { useEffect, useState } from "react";
import Comment from "./Comment";

function CommentList(){
  const [id, setId] = useState(1); //newcomment id
  const [comment,setComment] = useState(); 
  const [commentArr,setCommentArr] = useState([]);
  
  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id:id,
      content: comment,
    };
    console.log(newComment);
    setCommentArr([...commentArr, newComment])
  }
  
  const listComments = commentArr.map((comment)=>{
    return <li key={comment.id}>{comment.content}</li>
  })

  useEffect(()=>{
    fetch('/data/commentData.json')
    .then((res) => res.json())
    .then((data) => setCommentArr(data.comments))
  })

  return(
  <div className="feedComment">
  <div className="paddingLeft feedCommentLike">name님 외 10명이 좋아합니다</div>
   <Comment listComments={listComments}/>
     
  <div className="commentTime">42분전</div>

<div className="feedCommentWrite newComment">
  <input type="text" 
  className="inputNewComment" 
  placeholder="댓글 달기 ... " 
  onChange={(e)=>{
    setComment(e.target.value)
  }}
  />
  <button className="newCommentBtn feedCommentBtn" onClick={addComment}>게시</button>
</div>
</div>
  )
}
export default CommentList;