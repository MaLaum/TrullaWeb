import React, { useState } from "react";
import "../styles/zombies.css";
import "../styles/server.css";

function TabButton({ tab, activeTab, onClick }) {
  return (
    <button
      className={`tab-button ${activeTab === tab ? "active" : ""}`}
      onClick={() => onClick(tab)}
    >
      {tab}
    </button>
  );
}

function TabContent({ tab, isActive, children }) {
  return isActive ? <div className="tab-content">{children}</div> : null;
}

function Servers() {
  const tabs = ["Servers' Info", "Vanilla MC Live Map", "Modded MC Live Map"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-content-container">
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      ></meta>
      <div className="tab-buttons">
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            tab={tab}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        ))}
      </div>
      <div className="tab">
        {tabs.map((tab) => (
          <TabContent key={tab} tab={tab} isActive={activeTab === tab}>
            {/* Content for each tab */}
            {tab === "Servers' Info" && (
              <div className="border" id="box">
                <h2>Serverid</h2>
                <div className="serverlist">
                  <div className="border" id="boxmc">
                    <h3>VANILLA MINECRAFT</h3>
                    <p>Version 1.20.1</p>
                    <p>WHITELISTED</p>
                    <p>(Küsi whitelisti Discordis)</p>
                    <p>IP: 85.253.233.158:25565</p>
                  </div>
                  <div className="border" id="boxmmc">
                    <h3>MODDED MINECRAFT</h3>
                    <p>MC Version 1.19 | Direwolf20 Version 1.7.0</p>
                    <p>WHITELISTED</p>
                    <p>(Küsi whitelisti Discordis)</p>
                    <p>85.253.233.158:25566</p>
                  </div>
                  <div className="border" id="boxval">
                    <h3>VALHEIM</h3>
                    <p>Pikemaks ajaks maas või kuniks huvi tekib</p>
                    <p>Huvi korral kirjuta Discordi</p>
                  </div>
                  <div className="border" id="box">
                    <h3>TBD</h3>
                    <p>TBD</p>
                  </div>
                  <div className="border" id="box">
                    <h3>TBD</h3>
                    <p>TBD</p>
                  </div>
                  <div className="border" id="box">
                    <h3>TBD</h3>
                    <p>TBD</p>
                  </div>
                  <div className="border" id="box">
                    <h3>TBD</h3>
                    <p>TBD</p>
                  </div>
                  <div className="border" id="box">
                    <h3>TBD</h3>
                    <p>TBD</p>
                  </div>
                  <div className="border" id="box">
                    <h3>TBD</h3>
                    <p>TBD</p>
                  </div>
                  <div className="border" id="box">
                    <h3>TBD</h3>
                    <p>TBD</p>
                  </div>
                </div>
              </div>
            )}
            {tab === "Vanilla MC Live Map" && (
              <div className="border" id="box">
                <iframe
                  id="Vanilla map"
                  title="Vanilla map"
                  src="http://85.253.233.158:8123/"
                  width="100%"
                  height="900"
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div>
            )}
            {tab === "Modded MC Live Map" && (
              <div className="border" id="box">
                <iframe
                  id="Modded map"
                  title="Modded map"
                  src="http://85.253.233.158:8124/"
                  width="100%"
                  height="900"
                >
                  <p>Your browser does not support iframes.</p>
                </iframe>
              </div>
            )}
          </TabContent>
        ))}
      </div>
    </div>
  );
}

export default Servers;
