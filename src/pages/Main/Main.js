import React from "react";
import './Main.scss'
import { FaHeart,FaRegComment } from "react-icons/fa";
import { BiExport } from "react-icons/bi";

function Main(){
  return(
    <div>
 
  <header className="headerWrap">

    <div>
      <img className="logoImg" src="./images/instagram.png"/>
      <span className="header-text">Justgram</span>
    </div>

    <div className="v-center">
      <input className="headerSearch paddingLeft" type="search" placeholder="검색"/>
    </div>

    <div className="icon-img v-center">
      <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"/>
      <img className="custom-marginL" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"/>
      <img className="custom-marginL" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"/>
    </div>
  </header>

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
        <FaHeart/>
        </li>
        <li><a href="#">
        <FaRegComment/></a></li>
        <li><a href="#">
        <BiExport/></a></li>
      </ul>
      <p>담기</p>
    </div>
    
    <div className="feedComment">
      <div className="paddingLeft feedCommentLike">name님 외 10명이 좋아합니다</div>
      <div className="feedCommentList">
        
      </div>
      <div className="commentTime">42분전</div>

    <div className="feedCommentWrite newComment">
      <input type="text" class="inputNewComment" placeholder="댓글 달기 ... " />
      <button class="newCommentBtn feedCommentBtn">게시</button>
    </div>
    </div>
    </div>

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
        <img className="feedImg" src="./images/me1.jpeg" alt="사진"/>
      </div>
      
      <div className="feedMenu ">
        <ul>
          <li><a href="#"/>
          <FaHeart/></li>
          <li><a href="#">
          <FaRegComment/></a></li>
          <li><a href="#"><BiExport/></a></li>
        </ul>
        <p>담기</p>
      </div>
      
      <div className="feedComment">
        <div className="paddingLeft feedCommentLike">name님 외 10명이 좋아합니다</div>
        <div className="feedCommentList">
          
        </div>
        <div className="commentTime">42분전</div>
  
      <div className="feedCommentWrite newComment">
        <input type="text" className="inputNewComment" placeholder="댓글 달기 ... " />
        <button className="newCommentBtn feedCommentBtn">게시</button>
      </div>
  
      </div>
    </div>
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
        <img className="feedImg" src="./images/me2.jpeg" alt="사진"/>
      </div>
      
      <div className="feedMenu ">
        <ul>
          <li><a className="likeHeart" href="#">
          <FaHeart /></a></li>
          <li><a href="#">
          <FaRegComment/></a></li>
          <li><a href="#"><BiExport/></a></li>
        </ul>
        <p>담기</p>
      </div>
      
      <div className="feedComment">
        <div className="feedCommentLike">name님 외 10명이 좋아합니다</div>

        <div className="feedCommentList">

        </div>
        <div className="commentTime">42분전</div>
  
      <div className="feedCommentWrite newComment">
        <input type="text" class="inputNewComment" placeholder="댓글 달기 ... " />
        <button class="newCommentBtn feedCommentBtn">게시</button>
      </div>
  
      </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Main;