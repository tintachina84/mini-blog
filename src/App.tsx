import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MainPage} from "./components/page/MainPage";
import {PostWritePage} from "./components/page/PostWritePage";
import {PostViewPage} from "./components/page/PostViewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
