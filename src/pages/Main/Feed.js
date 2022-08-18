import React, { useState } from "react";


function Feed(){
  const [id, setId] = useState(1);
  const [comment,setComment] = useState(); //comment를 담는 state선언
  const [commentArr,setCommentArr] = useState([ 
    {
    id:0,
    content:"lalalala"
  }
  ]);    

  const addComment = () => {
    setId(id + 1);
    const newComment = {
      id:id,
      content: comment,
    };
    console.log(newComment);
    setCommentArr([...commentArr, newComment])
  }

  return(
<div className="contentsWrap">

<div>

<div className="feedContainer">

<div className="feedHeader borderBottom">
  <div className="v-center">
    <a className="v-center" href="#">
      <img className="profileImg" src="./images/profile.jpeg" alt="이미지"/>
      <span> mi_ogy</span>
    </a>
  </div>
  <div>...</div>
</div>

<div className="feedImgWrap borderBottom">
  <img className="feedImg" src="./images/me.jpeg" alt="사진"/>
</div>

<div className="feedMenu ">
  <ul>
    <li><a href="#"/>
    좋아요
    </li>
    <li><a href="#">
    댓글</a></li>
    <li><a href="#">
    공유</a></li>
  </ul>
  <p>담기</p>
</div>

<div className="feedComment">
  <div className="paddingLeft feedCommentLike">name님 외 10명이 좋아합니다</div>
  <div className="feedCommentList">
    {commentArr.map((comment)=>{
      return <li key={comment.id}>{comment.content}</li>
    })}
  </div>
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
</div>

</div>
</div>
  )
}

export default Feed;