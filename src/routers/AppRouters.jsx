import React from "react";
import Home from "../pages/Home";
import { Route, Routes } from "react-router-dom";
import CardDetail from "../pages/CardDetail";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/card/:id" element={<CardDetail />} />
    </Routes>
  );
};

export default AppRouters;
