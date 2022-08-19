import { useEffect, useState } from "react";

function Effect(){
  const [width, setWidth] =useState(window.innerWidth);
  //초기값 : 현 브라우저의 크기

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      setWidth(window.innerWidth);
    })
  })
  return(
    <div>
      {width}
    </div>
  )
}
export default Effect;