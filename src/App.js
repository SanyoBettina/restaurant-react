import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import DrinkPage from "./pages/DrinkPage";
import FoodPage from "./pages/FoodPage";
import HomePage from "./pages/HomePage";
import RestaurantTablesPage from "./pages/RestaurantTablesPage";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/drink" element={<DrinkPage />} />
          <Route path="/tables" element={<RestaurantTablesPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
