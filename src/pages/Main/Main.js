import React, { useState } from "react";
import './Main.scss';
import Feed from "./Feed";

function Main(){
  const [comment,setComment]=useState();
  return(
    <div>
  <Feed />
</div>
  )
}

export default Main;