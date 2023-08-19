import React from "react";

function Home() {
  return (
    <div>
      <a href="https://www.w3schools.com">Visit W3Schools</a>
      {/* Add Twitch stream using iframe */}
      <iframe
        id="stream_embed"
        src="https://player.twitch.tv/?channel=wadu&parent=localhost"
        frameBorder="0"
        allowFullScreen="true"
        scrolling="no"
        height="360"
        width="640"
        title="Twitch Stream"
      ></iframe>
      <iframe
        id="chat_embed"
        src="https://www.twitch.tv/embed/wadu/chat?parent=localhost"
        height="378"
        width="450"
      ></iframe>
    </div>
  );
}

export default Home;
