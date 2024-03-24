import React from "react";
import Container from "./container";
import Heading from "./heading";

import "./css/history.css"; // for custom-border (img float fix)
import "../index.css"; // for custom-txt, custom-txt-sm
export default function Histr() {
  return (
    <Container
      childs={[
        <Heading text="La Storia della Scuola" />,
        <div
          className="mt-4 bg-light w-100 rounded-2"
          style={{ height: "1px" }}
        ></div>,
        <div className="mt-4">
          <div className="mb-4">
            <img
              src="https://www.itisvallauri.net/meteo/img/scuola1.jpg"
              className="border rounded-5 float-start custom-border"
              style={{ width: "40%" }}
            ></img>
            <p className="custom-txt text-light">
              La scuola viene istituita nell' A. S. 1960 /61 come succursale
              dell'I.T.I.S. "E. Fermi" di Roma all'epoca esistevano solo tre
              sezioni: la sezione A di 37 alunni la sezione B di 37 alunni la
              sezione C di 39 alunni le quali erano seguite dal Prof. Diana
              Umberto. il quale è stato il coordinatore con la partecipazione
              dell' I.T.I.S. E. Fermi di Roma per l' avvio e la gestione
              iniziale della scuola. Tutti i comuni a sud di Roma come ad
              esempio i Castelli , Colleferro ecc. insieme ad alcuni comuni
              della provincia di Latina, fino a giungere a Terracina,
              rappresentano il bacino d 'utenza dell' attuale I.T.I.S.
              "Giancarlo Vallauri" di Velletri.
            </p>
            <img
              src="https://www.itisvallauri.net/meteo/img/scuola2.jpg"
              className="border rounded-5 float-end custom-border"
              style={{ width: "40%" }}
            ></img>
            <p className="custom-txt text-light">
              Inizialmente l'Istituto si appoggiò presso l' I.T.C.G. "Cesare
              Battisti" , per passare poi dal palazzo comunale ad una villetta
              non troppo distante l'ospedale di Velletri. Nel mese di novembre
              dell'anno 1965 l'I.T.I.S. Vallauri, si trasferì definitivamente
              presso la sede attuale di via Salvo D' Acquisto. Nell' A. S. 1968
              / 69 divenne istituto autonomo e prese per l'appunto il nome dell'
              ingegnere "Giancarlo Vallauri". Dalla sua autonomia ad oggi, più
              di cinquemila sono stati gli studenti diplomati. Questo perché il
              numero delle sezioni e degli alunni è progressivamente cresciuto
              nel corso del tempo; fino a raggiungere, un numero complessivo di
              53 classi, 14 di esse sono state ospitate nella sede staccata di
              via Paolina a Velletri. La scuola dispone inoltre di diversi
              laboratori, dove gli alunni possono predisporre numerose
              esperienze. Al tempo stesso, dopo l'entrata in vigore dei bacini
              di utenza, (DISTRETTO N°39/42) si è precisata e definita l'area
              geografica dell'I.T.I.S. "G. Vallauri": gli allievi provengono
              ,infatti, prevalentemente da Lariano, Genzano, Albano, Ariccia,
              Lanuvio, Cecchina, S.Maria delle Mole, Castel Gandolfo, Ciampino,
              Cisterna e Artena oltre che , come ovvio, dalla stessa Velletri.
              Alla iniziale specializzazione in Elettronica Industriale si sono
              affiancati, più di recente nuovi corsi (INFORMATICA e LICEO
              SCIENTIFICO TECNOLOGICO), ciò nell'intento di rispondere con
              sempre maggiore efficacia alla domanda e alle legittime esigenze
              del mondo del lavoro che, alla scuola chiede un continuo sforzo di
              aggiornamento per adeguare i futuri periti all'apprendimento e
              all'uso delle nuove tecnologie.
            </p>
          </div>
          <div className="text-center">
            <Heading text="---Time Line ->" />
            <div className="row">
              <div className="mt-4 col">
                <div className="bg-transparent card text-light border-5 border-light rounded-4 h-100">
                  <div className="border-0 card-header">
                    <Heading text="Fondazione della scuola" />
                  </div>
                  <div className="p-2 card-text">
                    <p className="custom-txt custom-txt-sm text-light">
                      La scuola viene istituita nell' A. S. 1960 /61 come
                      succursale dell'I.T.I.S. "E. Fermi" di Roma all'epoca
                      esistevano solo tre sezioni.
                    </p>
                  </div>
                  <div className="border-0 card-footer">
                    <Heading text="Settembre 1960" />
                  </div>
                </div>
              </div>
              <div className="mt-4 col">
                <div className="bg-transparent card text-light border-5 border-light rounded-4 h-100">
                  <div className="border-0 card-header">
                    <Heading text="Transferimento sede" />
                  </div>
                  <div className="p-2 card-text">
                    <p className="custom-txt custom-txt-sm text-light">
                      Nel mese di novembre dell'anno 1965 l'I.T.I.S. Vallauri,
                      si trasferì definitivamente presso la sede attuale di via
                      Salvo D' Acquisto.
                    </p>
                  </div>
                  <div className="border-0 card-footer">
                    <Heading text="Novembre 1965" />
                  </div>
                </div>
              </div>
              <div className="mt-4 col">
                <div className="bg-transparent card text-light border-5 border-light rounded-4 h-100">
                  <div className="border-0 card-header">
                    <Heading text="Ridenominazione istituto" />
                  </div>
                  <div className="p-2 mt-4 card-text">
                    <p className="mt-4 custom-txt custom-txt-sm text-light">
                      Nell' A. S. 1968 / 69 divenne istituto autonomo e prese
                      per l'appunto il nome dell' ingegnere "Giancarlo
                      Vallauri".
                    </p>
                  </div>
                  <div className="border-0 card-footer">
                    <Heading text="Settembre 1968" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      ]}
      vertical
    />
  );
}
