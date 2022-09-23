import React from "react";

function Comment(props){
  
  return(
    <div>
      <div></div>
      <div className="feedCommentList" key={props.listComments}>{props.listComments}
      </div>
    </div>
  )
}
export default Comment;