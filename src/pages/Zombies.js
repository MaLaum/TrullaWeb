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

function Home() {
  const tabs = [
    "Zombide info",
    "Progressi nimekiri",
    "Easter Eggide videod",
    "Easter Eggide õpetused",
    "Mapide Nimekiri",
    "Story Lore",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabbed-content-container">
      <div className="tab-buttons">
        {/* Tabs */}
        {tabs.map((tab) => (
          <TabButton
            key={tab}
            tab={tab}
            activeTab={activeTab}
            onClick={handleTabClick}
          />
        ))}
      </div>

      {/* Tabbed content */}
      <div className="tab">
        {tabs.map((tab) => (
          <TabContent key={tab} tab={tab} isActive={activeTab === tab}>
            {/* Tab Content */}
            {tab === "Zombide info" && (
              <div className="border" id="box">
                <h1>Zombide info</h1>
                <p>
                  ● Kui on soovi liituda või mõnda pela osta visake @ mulle
                  discordis, saab pela odavamalt ~40% - ~80% jagu.
                </p>
                <div>
                  <hr></hr>
                  <h3>Informatsiooni järjekord:</h3>
                  <div className="list">
                    <p>
                      Siin lehel on üld info, kellel mis mängud on ja mängude
                      hinnad.
                    </p>
                    <p>
                      Progressi nimekirjas võib leida, kes kui kaugel on kõigi
                      mappide ära tegemisega.
                    </p>
                    <p>
                      Easter eggide videote alt leiab iga mapi easter egg video
                      õpetuse.
                    </p>
                    <p>
                      Easter eggide õpetused alt leiab teksti ja pildi vormis
                      õpetused igale mapile (minu poolt koostatud), kuidas need
                      ära teha ning ka muud vajalikku näiteks zombie shield vms.
                    </p>
                    <p>
                      Mapide nimekirja alt leiab viited kõigi mappide wiki
                      lehtedele ning muud kasulikku informatsiooni.
                    </p>
                    <p>
                      Story Lore alt leiab viited, kõigi hetkel olemas olevate
                      story arcide selgitusteni.
                    </p>
                  </div>
                </div>
                <hr></hr>
                <div>
                  <h4>Praegune crew:</h4>
                  <table>
                    <col style={{ width: "40%" }} />
                    <col style={{ width: "40%" }} />
                    <tr>
                      <th>Nimi</th>
                      <th>Mängud</th>
                    </tr>
                    <tr>
                      <td>Martin</td>
                      <td>WAW/BO1/BO2/BO3/BO4/BOCW/GHOSTS/AW/IW/WWII</td>
                    </tr>
                    <tr>
                      <td>Mark</td>
                      <td>WAW/BO1/BO2/BO3</td>
                    </tr>
                    <tr>
                      <td>Trevor</td>
                      <td>WAW</td>
                    </tr>
                    <tr>
                      <td>Ats</td>
                      <td>WAW</td>
                    </tr>
                    <tr>
                      <td>Henri</td>
                      <td>WAW</td>
                    </tr>
                    <tr>
                      <td>Johannes</td>
                      <td>WAW</td>
                    </tr>
                  </table>
                  <hr></hr>
                  <table>
                    <colgroup>
                      <col style={{ width: "30%" }} />
                      <col style={{ width: "15%" }} />
                      <col style={{ width: "15%" }} />
                      <col style={{ width: "15%" }} />
                      <col style={{ width: "15%" }} />
                    </colgroup>
                    <tr>
                      <th>Mängud</th>
                      <th>Euro väärtus</th>
                      <th>Türgi Liira väärtus</th>
                      <th>Liira väärtus Euros</th>
                      <th>% sääst</th>
                    </tr>
                    <h4>Aether + Dark Aether Storyline:</h4>
                    <tr>
                      <td>Call of Duty: World at War (Full Game)</td>
                      <td>19.99€</td>
                      <td>49.00₺</td>
                      <td>1.10€</td>
                      <td>-94.49%</td>
                    </tr>
                    <tr>
                      <td>Call of Duty: Black Ops (+4 DLC)</td>
                      <td>95.95€</td>
                      <td>239.00₺</td>
                      <td>8.07€</td>
                      <td>-91.60%</td>
                    </tr>
                    <tr>
                      <td>Call of Duty: Black Ops II (Bundle)</td>
                      <td>99.99€</td>
                      <td>162.00₺</td>
                      <td>5.46€</td>
                      <td>-94.61%</td>
                    </tr>
                    <tr>
                      <td>Call of Duty: Black Ops III (Zombies Deluxe)</td>
                      <td>99.99€</td>
                      <td>349.00₺</td>
                      <td>11.77€</td>
                      <td>-88.23%</td>
                    </tr>
                    <tr>
                      <td>Call of Duty: Black Ops 4 (pole Steamis)</td>
                      <td>99.99€</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Call of Duty: Black Ops Cold War (Full Game)</td>
                      <td>59.99€</td>
                      <td>999.00₺</td>
                      <td>33.71€</td>
                      <td>-43.81%</td>
                    </tr>
                    <tr>
                      <td>Call of Duty: Black Ops Vanguard (Full Game)</td>
                      <td>59.99€</td>
                      <td>999.00₺</td>
                      <td>33.71€</td>
                      <td>-43.81%</td>
                    </tr>
                    <h4>Aliens + Different Zombie Stories</h4>
                    <tr>
                      <td>Call of Duty: Ghosts (complete bundle)</td>
                      <td>179.99€</td>
                      <td>389.00₺</td>
                      <td>13.12€</td>
                      <td>-92.49%</td>
                    </tr>
                    <tr>
                      <td>
                        Call of Duty: Advanced Warfare (Digital Pro Edition)
                      </td>
                      <td>99.99€</td>
                      <td>159.00₺</td>
                      <td>5.36€</td>
                      <td>-94.00%</td>
                    </tr>
                    <tr>
                      <td>
                        Call of Duty: Infinite Warfare (Digital Deluxe Edition)
                      </td>
                      <td>99.99€</td>
                      <td>309.00₺</td>
                      <td>10.42€</td>
                      <td>-89.60%</td>
                    </tr>
                    <tr>
                      <td>Call of Duty: WWII (Digital Deluxe)</td>
                      <td>99.99€</td>
                      <td>349.00₺</td>
                      <td>11.77€</td>
                      <td>-88.20%</td>
                    </tr>
                  </table>
                  <p>
                    Hinnas sisalduvad kõik vajalikud DLC-d. Hinnad aegaajalt
                    muutuvad, kõige ajakohasemad hinnad leiad:{" "}
                    <a href="https://steamdb.info/">Steamdb.info</a>
                  </p>
                </div>
              </div>
            )}
            {tab === "Progressi nimekiri" && (
              <div className="border" id="box">
                <h2>Progressi nimekiri</h2>
                <p>This is the content for Progressi nimekiri tab.</p>
              </div>
            )}
            {tab === "Easter Eggide videod" && (
              <div className="border" id="box">
                <h2>Progressi nimekiri</h2>
                <p>This is the content for Progressi nimekiri tab.</p>
              </div>
            )}
            {tab === "Easter Eggide õpetused" && (
              <div className="border" id="box">
                <h2>Progressi nimekiri</h2>
                <p>This is the content for Progressi nimekiri tab.</p>
              </div>
            )}
            {tab === "Mapide Nimekiri" && (
              <div className="border" id="box">
                <h1>Mapide Nimekiri</h1>
                <ul className="mapsul">
                  <ul>
                    <li>
                      <strong>World at War maps:</strong>
                      <ul>
                        <li>Nacht der Untoten</li>
                        <li>Verrückt</li>
                        <li>Shi No Numa</li>
                        <li>Der Riese</li>
                      </ul>
                    </li>
                    <br></br>
                    <li>
                      <strong>Black Ops 1 maps:</strong>
                      <ul>
                        <li>Kino der Toten</li>
                        <li>"Five"</li>
                        <li>Dead Ops Arcade</li>
                        <li>Ascension</li>
                        <li>Call of the Dead</li>
                        <li>Shangri-La</li>
                        <li>Moon</li>
                      </ul>
                      <strong>DLC remastered maps:</strong>
                      <ul>
                        <li>Nacht der Untoten</li>
                        <li>Verrückt</li>
                        <li>Shi No Numa</li>
                        <li>Der Riese</li>
                      </ul>
                    </li>
                    <br></br>
                    <li>
                      <strong>Black Ops 2 maps:</strong>
                      <ul>
                        <li>Tranzit</li>
                        <strong>Tranzit subsections:</strong>
                        <li>Bus Depot</li>
                        <li>Town</li>
                        <li>Farm</li>
                        <li>Nuketown</li>
                        <li>Die Rise</li>
                        <li>Mob of the Dead</li>
                        <li>Buried</li>
                        <li>Origins</li>
                      </ul>
                    </li>
                    <br></br>
                    <li>
                      <strong>Black Ops 3 maps:</strong>
                      <ul>
                        <li>Shadows of Evil</li>
                        <li>The Giant</li>
                        <li>Der Eisendrache</li>
                        <li>Zetsubou No Shima</li>
                        <li>Gorod Krovi</li>
                        <li>Revelations</li>
                        <strong>DLC remastered maps:</strong>
                        <li>Nacht der Untoten</li>
                        <li>Verrückt</li>
                        <li>Shi No Numa</li>
                        <li>Kino Der Toten</li>
                        <li>Ascension</li>
                        <li>Shangri-La</li>
                        <li>Moon</li>
                        <li>Origins</li>
                      </ul>
                    </li>
                    <br></br>
                    <li>
                      <strong>Black Ops 4 maps:</strong>
                      <ul>
                        <li>Blood of The Dead</li>
                        <li>Classified</li>
                        <li>Alpha omega</li>
                        <li>tag Der Toten</li>
                      </ul>
                    </li>
                    <br></br>
                    <li>
                      <strong>Black Ops Cold War maps:</strong>
                      <ul>
                        <li>Die Maschine</li>
                        <li>Firebase Z</li>
                        <li>Outbreak</li>
                        <li>Mauer der Toten</li>
                        <li>Forsaken</li>
                      </ul>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <strong>Ghosts maps:</strong>
                      <ul>
                        <li>Point of Contact</li>
                        <li>Nightfall</li>
                        <li>Mayday</li>
                        <li>Awakening</li>
                        <li>Exodus</li>
                      </ul>
                      <br></br>
                      <li>
                        <strong>Exo Zombies maps:</strong>
                        <ul>
                          <li>Outbreak</li>
                          <li>Infection</li>
                          <li>Carrier</li>
                          <li>Descent</li>
                        </ul>
                      </li>
                      <br></br>
                      <li>
                        <strong>Infinite Warfare maps:</strong>
                        <ul>
                          <li>Zombies in Spaceland</li>
                          <li>Rave in the Redwoods</li>
                          <li>Shaolin Shuffle</li>
                          <li>Attack of the Radioactive Thing</li>
                          <li>The Beast from Beyond</li>
                        </ul>
                      </li>
                      <br></br>
                      <li>
                        <strong>WWII maps:</strong>
                        <ul>
                          <li>Gröesten Haus / Prologue</li>
                          <li>The Final Reich</li>
                          <li>The Darkest Shore</li>
                          <li>The Shadowed Throne</li>
                          <li>The Tortured Path</li>
                          <strong>The Tortured Path chapters:</strong>
                          <li>Chapter 1: Into the Storm</li>
                          <li>Chapter 2: Across the Depth</li>
                          <li>Chapter 3: Beneath the Ice</li>
                          <li>The Frozen Dawn</li>
                        </ul>
                      </li>
                      <br></br>
                      <li>
                        <strong>Black ops 4 Chaos maps:</strong>
                        <ul>
                          <li>Voyage of Despair</li>
                          <li>IX</li>
                          <li>Dead of The Night</li>
                          <li>Ancient Evil</li>
                        </ul>
                      </li>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <strong>Dead Ops Arcade maps:</strong>
                      <li>
                        <strong>Black Ops 1:</strong>
                        <ul>
                          <li>Dead Ops Arcade</li>
                          <strong>Black Ops 3:</strong>
                          <li>Dead Ops Arcade 2: Cyber’s Avenging</li>
                          <strong>Black Ops Cold War:</strong>
                          <li>Dead Ops Arcade 3: Rise of the Mamaback</li>
                        </ul>
                      </li>
                      <br></br>
                      <br></br>
                      <br></br>
                      <li>
                        <strong>Shit... I mean Vanguard maps:</strong>
                        <ul>
                          <li>Der Anfang</li>
                          <li>Terra Maledicta</li>
                          <li>Shi No Numa</li>
                          <li>The Archon</li>
                        </ul>
                      </li>
                    </li>
                  </ul>
                </ul>
              </div>
            )}
            {tab === "Story Lore" && (
              <div className="border" id="box">
                <h1>Story Lore</h1>
                <p>Nimekiri koos viidetega kõigi storyde jaoks:</p>
                <table>
                  <col style={{ width: "40%" }} />
                  <col style={{ width: "40%" }} />
                  <tr>
                    <th>Story arc</th>
                    <th>Link</th>
                  </tr>
                  <tr>
                    <td>Aether (WaW-BO4)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=AhZM1BK18RU">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Dark Aether (Black Ops Cold War - Vanguard)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=PLpN76bBdhU">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Dead Ops Arcade (WaW-BO4)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=pJGpF2xQb4w">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Chaos (BO4)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=YQr519xrGSw">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Extinction (Ghosts)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=uyhIo-FCkTc">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Exo Zombies (Advanced Warfare)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=47t_N_RXPX8">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>IW Zombies (Infinite Warfare)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=FGFzkh5jp6k">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>WWII Zombies (WWII)</td>
                    <td>
                      <a href="https://www.youtube.com/watch?v=N0-06ISOzB8">
                        Full Story video
                      </a>
                    </td>
                  </tr>
                </table>
              </div>
            )}
          </TabContent>
        ))}
      </div>
    </div>
  );
}

export default Home;
