import React, { useState } from "react";
import "../styles/zombies.css";

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
  const tabs = ["Server Info", "Live Map", "TBD", "TBD", "TBD", "TBD", "TBD"];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-content-container">
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
            {tab === "Server Info" && (
              <div className="border" id="box">
                <h2>Serverid</h2>
                <p>This is the content for Progressi nimekiri tab.</p>
              </div>
            )}
            {tab === "Live Map" && (
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
          </TabContent>
        ))}
      </div>
    </div>
  );
}

export default Servers;
