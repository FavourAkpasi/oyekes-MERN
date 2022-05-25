import * as React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./style.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
