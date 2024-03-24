import React from "react";

export default function Heading(props) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-8xl md:text-6xl">
          Meteo <span className="text-primary"> Vallauri</span> Velletri
        </h1>
        <p className="text-lg text-center lg:text-3xl md:text-xl text-muted-foreground">
          Benvenuto. Su questo sito potrai trovare le condizioni climatiche di
          Velletri.
        </p>
      </div>
    </>
  );
}
