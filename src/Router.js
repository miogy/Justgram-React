//필요한 라이브러리 import
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav/Nav";

//필요한 파일 import
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Profile from "./pages/Main/Profile";

function Router(){
  return(
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/main" element={<Main/>}/>
      <Route path="/profile" element={<Profile />} />
    </Routes>
    </BrowserRouter>
  );
}

export default Router;