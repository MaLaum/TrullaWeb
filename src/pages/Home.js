import React, { useState, useEffect } from "react";
import "../styles/home.css";
import Checklist from "../components/Checklist";

function Home() {
  return (
    <div className="flexbox">
      {/* Add Twitch stream using iframe */}
      <iframe
        id="stream_embed"
        src="https://player.twitch.tv/?channel=wadu&parent=localhost"
        frameBorder="0"
        allowFullScreen="true"
        scrolling="no"
        height="720"
        width="1280"
        title="Twitch Stream"
      ></iframe>

      <Checklist />
    </div>
  );
}

export default Home;
