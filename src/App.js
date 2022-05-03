import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card/Card";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
