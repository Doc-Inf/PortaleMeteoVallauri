import React from "react";
import Container from "./components/container";
import Heading from "./components/heading";
import Form from "./components/form";
export default function Storico() {
  // TODO: MAKE GRAPH WORK
  const graph2 = (
    <img
      src={require("./media/graph2.png")}
      width="90%"
      className="rounded-3"
    ></img>
  );
  return (
    <>
      <div className="py-5 container-lg">
        <Container
          childs={[
            <div className="mb-4 text-center ">
              <Heading text="Benvenuto, inserisci la data della misurazione che vuoi controllare" />
            </div>,
            <Form />,
          ]}
          vertical
        />
        <div className="mt-5 d-flex justify-content-center">{graph2}</div>
      </div>
    </>
  );
}
