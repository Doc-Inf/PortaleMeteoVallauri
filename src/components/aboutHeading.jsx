import React from "react";
export default function AboutHeading() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-5 text-4xl tracking-tight text-center scroll-m-20 xl:text-8xl lg:text-7xl md:text-6xl">
        ITIS G.{" "}
        <span className={`font-bold tracking-wide text-primary mr-4`}>
          Vallauri
        </span>
        Velletri
      </h1>
      <p className="text-lg font-light text-center lg:text-3xl md:text-xl text-muted-foreground">
        Questo progetto è stato sviluppato per rendere fruibile i dati raccolti
        dalle rilevazioni della nostra stazione meteorologica in modo semplice e
        veloce, attraverso il Web.
      </p>
    </div>
  );
}
