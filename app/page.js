"use client";
import MyTable from "./components/table";
import ChartGauge from "./components/gauge";
import TickPlacementBars from "./components/bars";
import { useState } from "react";


export default function Home() {

  const [disponibilidad, setDisponibles] = useState(0);
  return (
    <div className="relative bg-[#d9d9d9] h-screen overflow-visible">
      <div className="w-full h-[40%] bg-[#353535]">
      </div>
      <div className="absolute top-0 left-0 w-[60%] h-[90%] bg-[#fff] border-2px border-none rounded-2xl mt-8 ml-12 shadow-xl flex items-center justify-center">
        <MyTable setDisponibles={setDisponibles}></MyTable>
      </div>
      <div className="absolute top-0 right-6 w-[35%] h-[99.1%] flex flex-col gap-8 p-8">
        <div className="w-full h-[50%] bg-white border-2 border-none rounded-2xl shadow-xl flex flex-col items-center justify-center font-bold">
          <h2 className="mt-4 font-bold">Servidores disponibles</h2>
          <ChartGauge disponibilidad={disponibilidad}></ChartGauge>
        </div>
        <div className="w-full h-[50%] bg-white border-2 border-none rounded-2xl shadow-xl flex flex-col items-center justify-center">
          <h2 className="font-bold mt-4">Resumen Semanal</h2>
          <TickPlacementBars className="mb-2"></TickPlacementBars>
        </div>
      </div>
    </div>
  );
}
