import React from "react";
import "../styles/global.css";
import "../styles/liira.css";

function Liira() {
  return (
    <div className="tabbed-content-container">
      <div className="tab">
        <div className="border" id="box">
          <h1>Steam Region Hop</h1>
          <div className="flex-vert">
            <div className="border" id="box">
              <h3>Lühi tutvustus</h3>
              <p className="text-width">
                Steami regiooni vahetuse abil saad osta steamist pelasid 20-80%
                odavamalt kui eurodes
              </p>
              <p className="text-width">
                Tegemist on halli alaga ehk see pole otseselt lubatud, aga samas
                pole ka keelatud
              </p>
              <p className="text-width">
                Peamised muutused, mis Steami kontoga toimuvad: Steami hinnad on
                türgi liiras, kõik muu jääb üldiselt samaks, ainus piirang mis
                tekib on see et pelasid saad giftida ainult inimestele, kes on
                ka Türgi regioonis!
              </p>
              <p className="text-width">
                Kaardi kombot saan osta ainult 2 tükki korraga aka saan ainult 2
                inimest minimaalselt teha!
              </p>
            </div>
            <div className="border" id="box">
              <h3>Steami Raha lisamise tutorial</h3>
              <p>Tulekul</p>
            </div>
            <div className="border" id="box">
              <h3>Korduma kippuvad küsimused:</h3>
              <p className="text-width">
                <strong>Kas VPN on vajalik peale region hoppi?</strong>
                <br></br>Otseselt mitte, aga rangelt soovituslik!
              </p>
              <p className="text-width">
                <strong>
                  Kuidas teada kui palju säästan pela pealt võrreldes euroga?
                </strong>
                <br></br>
                <a href="https://steamdb.info/">Steamdb.info</a> kaudu saad
                otsida pela ja saad kõige täpsema hinna vahe teada liira ja euro
                vahel.
              </p>
              <p className="text-width">
                <strong>Kas virtu kaarti saab ka mujal kasutada?</strong>
                <br></br>Jah ja ei, näiteks Discord nitro jaoks saab seda
                kasutada kõik muu oleneb, proovida võib!
              </p>
              <p className="text-width">
                <strong>Kui mu küsimust siin nimekirjas pole?</strong>
                <br></br>Viska sõnum{" "}
                <a href="https://discord.com/invite/b6F8wHXc">mulle</a> ja kui
                see on kasulik info, mida võiks laiema grupiga jagada siis see
                lisandub siia!
              </p>
            </div>
            <div className="border" id="box">
              <h3>Võimalikud probleemid, mis võivad tekkida:</h3>
              <p className="text-width">
                <strong>FUPS konto logout ja enam sisse ei pääse</strong>
                <br></br>Vaja teha uus konto, sorry, sellele kontole juurde enam
                ei pääse!
              </p>
              <p className="text-width">
                <strong>Kus raha ülejääki hoiustada</strong>
                <br></br>Ära hoia vaba raha FUPSis (va kui mingi korduv makse nt
                subscription vms), HOIA raha BINANCE PEAL! või lae täpne kogus!
              </p>
              <p className="text-width">
                <strong>
                  Steami kasutaja saab regioon reverti tagasi eurodesse
                </strong>
                <br></br>Pole väga miskit teha, ostude tegemine alguses suht
                gambling (isegi peale 2a+) ja kui kuidagi satud red flagi peale
                siis Steamiga pole mõtet vaielda (support ei saa reverti tagasi
                võtta!). Pead ootama 3 kuud enne kui saab uuesti region hoppida!
              </p>
              <p className="text-width">
                <strong>Steami konto blokeeritud/kinni</strong>
                <br></br>VÄGA VÄGA HARULDANE Palju paanikat, aga Steam support
                on kõikidel teada olevatel kordadel blocki/bani/vms maha võtnud
                kui ühendust võtta!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liira;
