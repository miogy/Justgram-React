import React, { useEffect, useState } from "react";
import './Main.scss';
import Feed from "./Feed";

function Main(){
  
  const [feeds,setFeeds]=useState([]);

  //feeds.json , setFeeds(feedData로 객체를 배열로 가져옴)
  useEffect(()=>{
    fetch("/data/feeds.json")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      setFeeds(data.feedData)
    },[])
  })
  
  return(
    <div className="feedContainetWrap">
  {feeds.map((feed)=>{
    return <Feed key={feed.feeId} feedData={feed}/> //feedData라는 이름으로 feed를 넘겨줌
  }
  )}
</div>
  )
}

export default Main;