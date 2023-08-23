import React from "react";
import "../styles/global.css";

function Trulla() {
  return (
    <div className="tabbed-content-container">
      <div className="tab">
        <div className="border" id="box">
          <h1>Trulla üldinfo</h1>
          <p>
            Vältida isikliku info lisamist kuniks autentimis süsteem valmis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Trulla;
