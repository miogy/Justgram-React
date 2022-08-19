import React from "react";

function Comment(props){
  
  return(
      <div className="feedCommentList" key={props.id}>
       {props.listComments}
      </div>
  )
}
export default Comment;