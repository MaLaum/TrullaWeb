import React from "react";
import "../styles/footer.css";

function Footer() {
  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 128; i++) {
      const size = 2 + Math.random() * 4 + "rem";
      const distance = 6 + Math.random() * 4 + "rem";
      const position = -5 + Math.random() * 110 + "%";
      const time = 2 + Math.random() * 2 + "s";
      const delay = -1 * (2 + Math.random() * 2) + "s";
      const bubbleStyle = {
        "--size": size,
        "--distance": distance,
        "--position": position,
        "--time": time,
        "--delay": delay,
      };
      bubbles.push(<div key={i} className="bubble" style={bubbleStyle}></div>);
    }
    return bubbles;
  };

  return (
    <div className="root">
      <div className="main">
        <div className="footer">
          <div className="bubbles">{createBubbles()}</div>
          <div className="content">
            <div>
              <p>©2023 Martin Laumets</p>
            </div>
          </div>
        </div>
        <svg style={{ position: "fixed", top: "100vh" }}>
          <defs>
            <filter id="blob">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Footer;
