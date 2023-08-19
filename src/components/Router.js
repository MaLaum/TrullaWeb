// src/components/AppRouter.js
import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Zombies from "../pages/Zombies";
import AdminPanel from "../pages/AdminPanel";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/background.css"; // Include the background CSS file
import "../styles/footer.css"; // Include the footer CSS file

function AppRouter() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="stars-container">
          <div className="stars" id="stars"></div>
          <div className="stars" id="stars2"></div>
          <div className="stars" id="stars3"></div>
          <Routes>
            <Route path="/TrullaWeb" element={<Home />} />
            <Route path="/TrullaWeb/zombies" element={<Zombies />} />
            <Route path="/TrullaWeb/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
