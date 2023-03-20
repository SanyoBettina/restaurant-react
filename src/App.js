import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import DrinkPage from "./pages/DrinkPage";
import FoodPage from "./pages/FoodPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/drink" element={<DrinkPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
