import React from "react";
import "../styles/home.css";
import "../styles/global.css";

import Checklist from "../components/Checklist";

function Home() {
  return (
    <div className="flexbox">
      <div className="border" id="streamsbox">
        <div className="border" id="boxstream">
          <iframe
            id="stream_marv"
            src="https://player.twitch.tv/?channel=marvinthefunny&parent=malaum.github.io"
            allowFullScreen="true"
            height="480"
            width="640"
            title="marv_stream"
          ></iframe>
          <iframe
            id="chat_marv"
            title="marv_chat"
            src="https://www.twitch.tv/embed/marvinthefunny/chat?parent=malaum.github.io"
            height="480"
            width="400"
          ></iframe>
        </div>
        <div className="border" id="boxstream">
          <iframe
            id="stream_ats"
            src="https://player.twitch.tv/?channel=mctrulla&parent=malaum.github.io"
            allowFullScreen="true"
            height="480"
            width="640"
            title="ats_stream"
          ></iframe>
          <iframe
            id="chat_ats"
            title="ats_chat"
            src="https://www.twitch.tv/embed/mctrulla/chat?parent=malaum.github.io"
            height="480"
            width="400"
          ></iframe>
        </div>
      </div>
      <div className="border" id="box">
        <Checklist />
      </div>
    </div>
  );
}

export default Home;
