import React, { useEffect, useState } from "react";

import Commentlist from "./CommentList";

function Feed(){
  
  const [commentList,setCommentList] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/data/commentData.json',{
      method : 'GET'
    })
    .then(res=>res.json())
    .then(data=>{
      setCommentList(data.commentData);
    })
  },[])

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
  <p>
  <span>💜</span>
  <span>💬</span>
  <span>📤</span>
  </p>
  <p>담기</p>
</div>
<Commentlist />
</div>

</div>
</div>
  )
}

export default Feed;