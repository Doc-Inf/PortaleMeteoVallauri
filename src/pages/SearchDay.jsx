import React from "react";

import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/datePicker";
import { Cloud, Droplet, ParkingMeter, Search, Wind } from "lucide-react";

import { ContainerCols } from "@/components/container";
import Info from "@/components/info";

export default function SearchDay() {
  return (
    <>
      {/* TITLE */}
      <h2 className="mt-40 text-4xl md:text-6xl font-medium tracking-tight scroll-m-20 drop-shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] text-center">
        Cerca in base alla data
      </h2>
      {/* SEARCHER */}
      <div className="relative md:w-[50%] lg:w-[40%] w-[80%] m-auto mt-20">
        <DatePicker className="w-[100%] outline outline-primary/10" />
        <Button className="absolute top-0 right-0 rounded-s-none">
          <Search />
        </Button>
      </div>
      {/* DAY INFO */}
      <h4 className="mt-40 text-2xl md:text-3xl font-medium tracking-tight scroll-m-20 drop-shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-14 text-center">
        Informazioni del 20/01/24:
      </h4>
      {/* COL CARDS */}
      <div className="mt-10">
        <ContainerCols>
          <Info
            title="Temperatura"
            icon={<Cloud stroke="#17A34A" />}
            value="15.2"
            unit="°C"
          />
          <Info
            title="Umidità"
            icon={<Droplet stroke="#17A34A" />}
            value="84"
            unit="%"
          />
          <Info
            title="Direzione Vento"
            icon={<Wind stroke="#17A34A" />}
            value="NW"
          />
          <Info
            title="Pressione"
            icon={<ParkingMeter stroke="#17A34A" />}
            value="1024"
            unit="hPa"
          />
        </ContainerCols>
      </div>
    </>
  );
}
