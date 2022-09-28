import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./@Prepaid/Pages/Home/Home";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
