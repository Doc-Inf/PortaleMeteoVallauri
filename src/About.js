import Menu from "./components/menu";
import People from "./components/people";
import Container from "./components/container";
import React from "react";
import "./index.css"; // for custom-txt, custom-hover

export default function About() {
  return (
    <>
      {/* ABOUT SCHOOL */}
      <div className="container-md mb-5">
        <div className="row pt-5">
          <a href="https://www.itisvallauri.edu.it/" className="custom-txt">
            <h1 className="text-light text-center ">
              ITIS G. Vallauri di Velletri
            </h1>
          </a>
        </div>
        <div className="row pt-3">
          <p className="fw-bold text-light p-sm-5 p-md-0 custom-txt">
            Questo progetto è stato sviluppato per rendere fruibile i dati
            raccolti dalle rilevazioni della nostra stazione meteorologica in
            modo semplice e veloce, attraverso il Web. Per la creazione della
            piattaforma, il reperimento e la catalogazione dei dati hanno
            lavorato gruppi di studenti provenienti dalle classi 3F, 5e e 5G
            nell'a.s. 2022/2023
          </p>
        </div>
      </div>
      {/* MENU */}
      <div className="container px-lg-5 px-sm-0 mb-5">
        <Menu />
      </div>
      {/* PEOPLE */}
      <div className="container-lg px-5 pt-5 my-5">
        <Container
          childs={[
            <People
              type="Professori"
              people={[
                ["Bonifazi Andrea", "Informatica"],
                ["Rispoli Maria", "Scienze e Biologia"],
              ]}
            />,
          ]}
          vertical
        />
      </div>
      <div className="container-lg px-5 mb-5">
        <Container
          childs={[
            <People
              type="Informatica"
              people={[
                ["Boaretto Lorenzo"],
                ["Cipolla Emilio"],
                ["Fonti Luca"],
                ["Fruncillo Carmine"],
                ["Imbastari Riccardo"],
                ["Pietrosanti Francesco"],
                ["Somma Francesco"],
              ]}
            />,
          ]}
          vertical
        />
      </div>
      <div className="container-lg px-5 mb-5">
        <Container
          childs={[
            <People
              type="Scientifico"
              people={[
                ["Bastianelli Tommaso"],
                ["Cresou Edoardo"],
                ["Masi Gabriele"],
              ]}
            />,
          ]}
          vertical
        />
      </div>
    </>
  );
}
