import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
const App = () => {
  const [sidedar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="/" element={<Home sidedar={sidedar} />} />
        <Route path="/video/:categoryID/:videoId" element={<Video />} />
      </Routes>
    </div>
  );
};

export default App;
