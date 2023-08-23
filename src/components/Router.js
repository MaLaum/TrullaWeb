import React from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Zombies from "../pages/Zombies";
import Servers from "../pages/Servers";
import Games from "../pages/Games";
import Liira from "../pages/Liira";
import Specs from "../pages/Specs";
import Trulla from "../pages/Trulla";
import Auth from "../pages/Auth";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/background.css";
import "../styles/footer.css";

function AppRouter() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/TrullaWeb" element={<Home />} />
          <Route path="/TrullaWeb/zombies" element={<Zombies />} />
          <Route path="/TrullaWeb/servers" element={<Servers />} />
          <Route path="/TrullaWeb/games" element={<Games />} />
          <Route path="/TrullaWeb/liira" element={<Liira />} />
          <Route path="/TrullaWeb/specs" element={<Specs />} />
          <Route path="/TrullaWeb/trulla" element={<Trulla />} />
          <Route path="/TrullaWeb/auth" element={<Auth />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
