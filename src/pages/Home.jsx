import { useRef, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Tabs,
  TabsList,
  TabsContent,
  TabsTrigger,
} from "../components/ui/tabs";

import { motion, useInView, useScroll } from "framer-motion";

import { ChevronDown, Cloud, Droplet, ParkingMeter, Wind } from "lucide-react";

import { ContainerCols, Container } from "../components/container";
import Heading from "../components/heading";
import Info from "../components/info";
import Day from "../components/day";
import MyChart from "../components/myChart";

export default function Home() {
  // week info collapsable
  const [isOpen, setIsOpen] = useState(false);
  // scroll animations
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  // menu onclick animation
  const btnVariant = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };
  // load graph only when in view
  const graph = useRef(null);
  const IsInViewGraph = useInView(graph);
  return (
    <>
      {/* HERO TEXT */}
      <motion.div
        className="relative flex items-center justify-center h-[75vh] md:h-dvh"
        initial={{ scale: 0, y: 100 }}
        animate={{ scale: 1, y: 0 }}
      >
        <Heading />
        {/* CUSTOM BG THINGHY */}
        <div className="absolute z-10 bg-primary h-[400px] lg:w-[800px] lg:h[800px] w-[400px] left-[40%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40rem] pointer-events-none opacity-25 dark:opacity-20"></div>
        <div className="absolute z-10 bg-orange-700 h-[400px] lg:w-[800px] lg:h[800px] w-[400px] left-[60%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[40rem] pointer-events-none opacity-20 dark:opacity-20"></div>
      </motion.div>
      {/* CARDS FOR INFO */}
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          filter: `blur(${scrollYProgress * 20}rem)`,
        }}
      >
        <ContainerCols>
          <Info
            title="Temperatura"
            icon={<Cloud stroke="#17A34A" />}
            value="15.2"
            unit="°C"
            subtitle="+5.2% da ieri"
          />
          <Info
            title="Umidità"
            icon={<Droplet stroke="#17A34A" />}
            value="84"
            unit="%"
            subtitle="+6.2% da ieri"
          />
          <Info
            title="Direzione Vento"
            icon={<Wind stroke="#17A34A" />}
            value="NW"
            subtitle="ieri era NW"
          />
          <Info
            title="Pressione"
            icon={<ParkingMeter stroke="#17A34A" />}
            value="1024"
            unit="hPa"
            subtitle="+2.2% da ieri"
          />
        </ContainerCols>
      </motion.div>
      {/* WEEK INFO */}
      <div className="justify-center max-w-screen-lg px-5 m-auto mt-10 lg:grid-cols-5 lg:grid lg:gap-x-4 lg:px-0">
        {/* OVERVIEW OF THE WEEK */}
        <Container className="order-2 col-span-2 lg:m-0 lg:h-full">
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="flex flex-col space-y-3 lg:h-full lg:justify-between"
          >
            <div className="flex items-center justify-between">
              {/* TAB TITLE */}
              <h4 className="text-2xl font-semibold">
                Informazioni sulla settimana
              </h4>
            </div>
            {/* CONTENT CONTAINER */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {/* ALWAYS SHOWN */}
              <Day
                icon={<Cloud stroke="#17A34A" />}
                max="10"
                min="7"
                day="27"
                day2="Gen, Sab"
              />
              <Day
                icon={<Cloud stroke="#17A34A" />}
                max="12"
                min="2"
                day="26"
                day2="Gen, Ven"
              />
              <Day
                icon={<Cloud stroke="#17A34A" />}
                max="7"
                min="6"
                day="25"
                day2="Gen, Gio"
              />

              {/* COLLAPSED */}
              <CollapsibleContent>
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  className="space-y-3"
                >
                  <Day
                    icon={<Cloud stroke="#17A34A" />}
                    max="9"
                    min="0"
                    day="24"
                    day2="Gen, Mer"
                  />
                  <Day
                    icon={<Cloud stroke="#17A34A" />}
                    max="8"
                    min="6"
                    day="23"
                    day2="Gen, Mar"
                  />
                  <Day
                    icon={<Cloud stroke="#17A34A" />}
                    max="10"
                    min="4"
                    day="22"
                    day2="Gen, Lun"
                  />
                  <Day
                    icon={<Cloud stroke="#17A34A" />}
                    max="15"
                    min="6"
                    day="21"
                    day2="Gen, Dom"
                  />
                  <Day
                    icon={<Cloud stroke="#17A34A" />}
                    max="12"
                    min="2"
                    day="21"
                    day2="Gen, Sab"
                  />
                </motion.div>
              </CollapsibleContent>
            </motion.div>
            {/* TRIGGER CONTAINER */}
            <div className="flex justify-center">
              <CollapsibleTrigger asChild>
                <Button>
                  {/* ANIMATED WITH ROTATION */}
                  <motion.div
                    animate={isOpen ? "open" : "closed"}
                    variants={btnVariant}
                  >
                    <ChevronDown />
                  </motion.div>
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
          </Collapsible>
        </Container>
        {/* GRAPHS OVERVIEW */}
        <Container className="order-1 w-full col-span-3 lg:h-full lg:mt-0">
          {/* TABS FOR THE GRAPHS */}
          <Tabs defaultValue="temperature">
            {/* TITLE */}
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-2xl font-semibold" ref={graph}>
                Grafici della settimana
              </h4>
            </div>
            <TabsList className="grid grid-cols-4 w-[100%]">
              <TabsTrigger value="temperature">Temperatura</TabsTrigger>
              <TabsTrigger value="humidity">Umidità</TabsTrigger>
              <TabsTrigger value="pressure">Pressione</TabsTrigger>
              <TabsTrigger value="rain">Precipitazioni</TabsTrigger>
            </TabsList>
            <TabsContent value="temperature">
              {" "}
              <MyChart
                IsInView={IsInViewGraph}
                name="temperatura"
                data={[10, 12, 7, 9, 8, 10, 15, 12]}
                unit="°C"
              />
            </TabsContent>
            <TabsContent value="humidity">
              {" "}
              <MyChart
                IsInView={IsInViewGraph}
                name="umidità"
                data={[80, 74, 82, 64, 72, 76, 54, 91]}
                unit="%"
              />
            </TabsContent>
            <TabsContent value="pressure">
              {" "}
              <MyChart
                IsInView={IsInViewGraph}
                name="pressione"
                data={[1004, 1020, 1012, 1018, 1008, 1028, 1011, 1012]}
                unit="hPa"
              />
            </TabsContent>
            <TabsContent value="rain">
              {" "}
              <MyChart
                IsInView={IsInViewGraph}
                name="precipitazioni"
                data={[0, 2, 0, 0, 8, 10, 7]}
                unit="mm"
              />
            </TabsContent>
          </Tabs>
        </Container>
      </div>
    </>
  );
}
