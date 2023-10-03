import React from "react";
import "./Home.css";
import img from "../Images/Munkedamsveien.png";

export default function Home() {
  return (
    <>
      <div className="background">
        <div className="header">
          <h1>Rådgiving</h1>
          <p>
            Marchfirst tilbyr alle typer finansiell rådgivning. Marchfirst er en
            uavhengig sparringpartner som er vant til å håndtere komplekse
            prosesser knyttet til endring i eierstrukturer. Vi maksimerer
            verdier for våre kunder gjennom grundige forberedelser som danner
            grunnlag for vellykkede transaksjoner. Dype analyser og forståelse
            av markedet det opereres i, er forutsetninger i våre prosjekter.
            Dette er viktig ikke bare for å identifisere riktig kjøper eller
            målselskap, men også for å avdekke vesentlige risikofaktorer som
            senere blir en del av de forventede forhandlingene. Vi er ofte
            involvert i taktiske, juridiske og kommersielle vurderinger i
            forbindelse med våre oppdrag.
          </p>
        </div>
        <div className="grid-container">
          <div className="grid-child">
            <h1>Salg av selskaper</h1>
            <p>
              Vurderer du å selge virksomheten din ? Vi hjelper klienter i å
              planlegge, strukturere og gjennomføre salg av selskaper, aksjer
              eller eiendeler. Basert på omfattende erfaring på dette området,
              er vi i stand til å skreddersy salgsprosessen til hver kundes
              spesielle behov og situasjon. Vi har et betydelig nettverk i
              kapitalmarkedet som inkluderer PE, private finansielle aktører,
              industrielle miljøer og utenlandske systemer.
            </p>
          </div>
          <div className="grid-child">
            <h1>Strategiske allianser & partnersøk</h1>
            <p>
              Vi bistår ofte klienter som søker den rette strategiske partneren.
              Vi kan hjelpe med selve søket, så vel som med prosessen med å
              inngå en strategisk allianse eller økonomisk partnerskap. Vi
              bruker vår bransjekunnskap, erfaring og kontaktnett for å sikre
              riktig match.
            </p>
          </div>
          <div className="grid-child">
            <h1>Verdivurderinger</h1>
            <p>
              Lurer du på hva bedriften din er verdt eller hvilket maksimale
              verdipotensial den har? Gjennom vår verdivurderingsmetodikk og
              modellerfaring, kan vi anslå et selskaps verdi «as is» eller
              verdien i en eventuell transaksjon. Vi tilbyr også «fairness
              opinions».
            </p>
          </div>
          <div className="grid-child">
            <h1>Oppkjøp & Fusjoner</h1>
            <p>
              Vi hjelper våre kunder å kjøpe selskaper, aksjer eller eiendeler.
              Denne type rådgivning omfatter vanligvis identifisering og
              verifikasjon av targets, verdivurderinger, strategisk- og taktisk
              rådgivning og forhandlings-støtte. Vi gjennomfører også fusjoner
              på vegne av kunder. Her vurderer vi blant annet industriell logikk
              for sammenslåing, absolutte og relative bytteforhold,
              forhandlingsopplegg og taktikk - samt avtalemessige
              problemstillinger som kan oppstå.
            </p>
          </div>
        </div>
        <img src={img} alt="munkedamsveien 36" />
      </div>
    </>
  );
}
