import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";

//feedData {}로 전체 받아오기
function Feed({ feedData }) {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    fetch("/data/commentData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data.commentData);
      });
  }, []);

  return (
    <div className="contentsWrap">
      <div>
        <div className="feedContainer">
          <div className="feedHeader borderBottom">
            <div className="v-center">
              <a className="v-center" href="#">
                <img
                  className="profileImg"
                  src="./images/profile.jpeg"
                  alt="이미지"
                />
                <span> {feedData.userName}</span>
              </a>
            </div>
            <div>...</div>
          </div>

          <div className="feedImgWrap borderBottom">
            <img
              className="feedImg"
              src={feedData.feedImages[0].imageUrl}
              alt="사진"
            />
          </div>

          <div className="feedMenu ">
            <p>
              <span>💜</span>
              <span>💬</span>
              <span>📤</span>
            </p>
            <p>담기</p>
          </div>
          <div className="userContent">{feedData.content}</div>
          <div>
            <CommentList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
