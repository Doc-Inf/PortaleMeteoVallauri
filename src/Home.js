import Nav from "./components/nav";
import Heading from "./components/heading";
import Container from "./components/container";
import Info from "./components/info";
import SmallInfo from "./components/small-info";
function Home() {
  // icons to be updated
  const partCloudy = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-cloud-moon"
      viewBox="0 0 16 16"
    >
      <path d="M7 8a3.5 3.5 0 0 1 3.5 3.555.5.5 0 0 0 .625.492A1.503 1.503 0 0 1 13 13.5a1.5 1.5 0 0 1-1.5 1.5H3a2 2 0 1 1 .1-3.998.5.5 0 0 0 .509-.375A3.5 3.5 0 0 1 7 8m4.473 3a4.5 4.5 0 0 0-8.72-.99A3 3 0 0 0 3 16h8.5a2.5 2.5 0 0 0 0-5z" />
      <path d="M11.286 1.778a.5.5 0 0 0-.565-.755 4.595 4.595 0 0 0-3.18 5.003 5.5 5.5 0 0 1 1.055.209A3.6 3.6 0 0 1 9.83 2.617a4.593 4.593 0 0 0 4.31 5.744 3.58 3.58 0 0 1-2.241.634q.244.477.394 1a4.59 4.59 0 0 0 3.624-2.04.5.5 0 0 0-.565-.755 3.593 3.593 0 0 1-4.065-5.422z" />
    </svg>
  );
  const clock = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-clock"
      viewBox="0 0 16 16"
    >
      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
    </svg>
  );
  // REQUIRES ATTRIBUTION
  // TO DO: UPDATE
  const video = (
    <>
      <video
        autoPlay={true}
        src={require("./media/video/cloud-bg.MOV")}
        type="video/mp4"
        muted
        loop
        className="video-bg"
      ></video>
      <div className="backup-bg"></div>
    </>
  );
  // TO DO: MAKE GRAPH WORK
  const graph = <img src={require("./media/graph.png")} width="100%"></img>;
  return (
    <>
      {video}
      {/* HEADER */}
      <div className="my-5 container-lg">
        <div className="row">
          <div className="col">
            <Container childs={<Heading text="Meteo Velletri" />} />
          </div>
          <div className="col">
            <Container
              childs={
                <Heading
                  text="Parzialmente nuvoloso"
                  icon={partCloudy}
                  subtxt="10.1"
                />
              }
            />
          </div>
          <div className="col">
            <Container childs={<Heading text="21:00:00" icon={clock} />} />
          </div>
        </div>
        <div className="mt-3 row">
          <h2 className="text-center text-light">
            Benvenuto nel nostro sito, qui potrai trovare tutti i dati relativi
            alle condizioni climatiche della nostra città
          </h2>
        </div>
      </div>
      {/* CURRENT INFO*/}
      <div className="my-5 container-lg">
        <Container
          childs={[
            <Info
              items={[
                "Ultima rilevazione: 12-01-2024 ore: 09:30:00",
                "Condizione atmosferica: Parzialmente nuvoloso",
                "Temperatura: 10.1°",
                "Umidità: 60%",
                "Pressione: 1016.4 hPa",
                "Direzione vento: SW",
                "Velocità vento: 6.4 Km/h",
              ]}
            />,
            ,
            graph,
          ]}
          vertical="true"
        />
      </div>
      {/* TEMPS */}
      <div className="my-5 container-lg">
        <div className="row">
          <div className="my-4 col-12 col-md-6 col-lg-3 ">
            <Container
              childs={
                <SmallInfo
                  title="Temperatura max:"
                  text="Temperatura Max: 10.1° - Ora: 09:30"
                />
              }
              vertical="true"
              noPadding="true"
            />
          </div>
          <div className="my-4 col-12 col-md-6 col-lg-3 ">
            <Container
              childs={
                <SmallInfo
                  title="Temperatura min:"
                  text="Temperatura Min: 6.4° - Ora: 05:30"
                />
              }
              vertical="true"
              noPadding="true"
            />
          </div>
          <div className="my-4 col-12 col-md-6 col-lg-3 ">
            <Container
              childs={
                <SmallInfo
                  title="Temperatura media:"
                  text="Temperatura Media: 7.3°"
                />
              }
              vertical="true"
              noPadding="true"
            />
          </div>
          <div className="my-4 col-12 col-md-6 col-lg-3 ">
            <Container
              childs={<SmallInfo title="Umidità media:" text="66.4%" />}
              vertical="true"
              noPadding="true"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
