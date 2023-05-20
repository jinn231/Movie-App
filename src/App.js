import React from "react";
import Home from "./component/home/Home";
import ContextContainer from "./context/Container";
import { Route, Routes } from "react-router-dom";
import MovieDetail from "./component/home/MovieDetail";
import SearchResult from "./component/home/SearchResult";
import Blog from "./component/Blog/Blog";

const App = () => {
  return (
    <ContextContainer>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/movie" element={<MovieDetail />} />
        <Route path="/search_movie" element={<SearchResult />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </ContextContainer>
  );
}

export default App;