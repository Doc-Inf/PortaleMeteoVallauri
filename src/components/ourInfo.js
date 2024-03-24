import React from "react";
import Container from "./container";
import Heading from "./heading";
import ScrollCard from "./scrollCard";

export default function Ourinfo() {
  return (
    <Container
      childs={[
        <Heading text="Le nostre attività" />,
        <div
          className="bg-light w-100 rounded-2 mt-4"
          style={{ height: "1px" }}
        ></div>,
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <ScrollCard
              title="Informatica"
              img="https://www.itisvallauri.net/meteo/img/infoimg1.jpg"
              text="
          Il Diplomato in Informatica e Telecomunicazioni ha competenze specifiche nel campo dei sistemi informatici, dell’elaborazione dell’informazione, delle applicazioni e tecnologie Web, delle reti e degli apparati di comunicazione.
          Ha competenze e conoscenze che si rivolgono all’analisi, progettazione, installazione e gestione di sistemi informatici, basi di dati, reti di sistemi di elaborazione, sistemi multimediali e apparati di trasmissione e ricezione dei segnali
          "
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <ScrollCard
              title="Elettronica e Robotica"
              img="https://www.itisvallauri.net/meteo/img/infoimg2.jpg"
              text="
          

Il Diplomato in Elettronica ed Elettrotecnica ha competenze specifiche nel campo dei materiali e delle tecnologie costruttive dei sistemi elettrici, elettronici e delle macchine elettriche, della generazione, elaborazione e trasmissione dei segnali elettrici ed elettronici, dei sistemi per la generazione, conversione e trasporto dell’energia elettrica e dei relativi impianti di distribuzione.

Collabora nella progettazione, costruzione e collaudo di sistemi elettrici ed elettronici di impianti elettrici e sistemi di automazione.
          "
            />
          </div>
          <div className=" col-sm-12 col-md-4">
            <ScrollCard
              title="Scientifico"
              img="https://www.itisvallauri.net/meteo/img/infoimg3.jpg"
              text="
          

Il percorso di formazione Liceale è quello classico della formazione liceale-scientifica della tradizione italiana, con un occhio di riguardo agli elementi applicativi delle conoscenze scientifiche, a partire sin dal primo anno.

In tale percorso, infatti, la scelta dell’opzione di “Scienze Applicate” avviene già dal primo giorno, e dura per l’intero quinquennio.

Tale opzione fornisce alla più completa formazione liceale una curvatura maggiormente affine all’area tecnico-scientifica, che non prevede, ad esempio, l’insegnamento della Lingua Latina.

          "
            />
          </div>
        </div>,
      ]}
      vertical
    />
  );
}
