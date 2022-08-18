import React from "react";

function Comment(props){
  
  return(
    
  <div className="feedCommentList">
    {props.listComments}
  </div>
   
  )
}
export default Comment;