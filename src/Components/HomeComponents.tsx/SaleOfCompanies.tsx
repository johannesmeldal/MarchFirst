import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { BsCircle } from "react-icons/bs";

function Consulting() {
  return (
    <div className="h-auto text-[#351725] bg-[#F5F5F7] flex flex-row justify-evenly">
      <div className="flex flex-col w-6/12 text-xl mt-10 mb-10">
        <p className="text-2xl mb-10">Rådgivning</p>
        <p>
          Marchfirst tilbyr alle typer finansiell rådgivning. Marchfirst er en
          uavhengig sparringpartner som er vant til å håndtere komplekse
          prosesser knyttet til endring i eierstrukturer.
        </p>
        <p>
          Vi maksimerer verdier for våre kunder gjennom grundige forberedelser
          som danner grunnlag for vellykkede transaksjoner. Dype analyser og
          forståelse av markedet det opereres i, er forutsetninger i våre
          prosjekter.
        </p>
        <p>
          Dette er viktig ikke bare for å identifisere riktig kjøper eller
          målselskap, men også for å avdekke vesentlige risikofaktorer som
          senere blir en del av de forventede forhandlingene. Vi er ofte
          involvert i taktiske, juridiske og kommersielle vurderinger i
          forbindelse med våre oppdrag.
        </p>
      </div>
      <div className="flex flex-col items-center mt-10 gap-5 ">
        <BsCircleFill className="text-[100px]" />
        <BsCircle />
        <BsCircle />
        <BsCircle />
      </div>
    </div>
  );
}

export default Consulting;
