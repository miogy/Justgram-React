//필요한 라이브러리 import
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";

//필요한 파일 import
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";

function Router(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default Router;