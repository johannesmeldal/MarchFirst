import { Container, Grid, Paper, Typography, useTheme } from "@mui/material";
import React from "react";
import "./Home.css";

export default function Home() {
  const theme = useTheme();
  return (
    <>
      <Paper
        className="background"
        sx={{ backgroundColor: theme.palette.secondary.main }}
      >
        <Grid container spacing={2} padding={2}>
          <Grid item xs={6}>
            <Paper style={{ height: "100%", width: "100%" }} elevation={3}>
              <h1>Salg av selskaper</h1>
              <Typography>
                Vurderer du å selge virksomheten din ? Vi hjelper klienter i å
                planlegge, strukturere og gjennomføre salg av selskaper, aksjer
                eller eiendeler. Basert på omfattende erfaring på dette området,
                er vi i stand til å skreddersy salgsprosessen til hver kundes
                spesielle behov og situasjon. Vi har et betydelig nettverk i
                kapitalmarkedet som inkluderer PE, private finansielle aktører,
                industrielle miljøer og utenlandske systemer.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: "100%", width: "100%" }} elevation={3}>
              <h1>Salg av selskaper</h1>
              <Typography>
                Vurderer du å selge virksomheten din ? Vi hjelper klienter i å
                planlegge, strukturere og gjennomføre salg av selskaper, aksjer
                eller eiendeler. Basert på omfattende erfaring på dette området,
                er vi i stand til å skreddersy salgsprosessen til hver kundes
                spesielle behov og situasjon. Vi har et betydelig nettverk i
                kapitalmarkedet som inkluderer PE, private finansielle aktører,
                industrielle miljøer og utenlandske systemer.
              </Typography>{" "}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: "100%", width: "100%" }} elevation={3}>
              <h1>Salg av selskaper</h1>
              <Typography>
                Vurderer du å selge virksomheten din ? Vi hjelper klienter i å
                planlegge, strukturere og gjennomføre salg av selskaper, aksjer
                eller eiendeler. Basert på omfattende erfaring på dette området,
                er vi i stand til å skreddersy salgsprosessen til hver kundes
                spesielle behov og situasjon. Vi har et betydelig nettverk i
                kapitalmarkedet som inkluderer PE, private finansielle aktører,
                industrielle miljøer og utenlandske systemer.
              </Typography>{" "}
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper style={{ height: "100%", width: "100%" }} elevation={3}>
              <h1>Salg av selskaper</h1>
              <Typography>
                Vurderer du å selge virksomheten din ? Vi hjelper klienter i å
                planlegge, strukturere og gjennomføre salg av selskaper, aksjer
                eller eiendeler. Basert på omfattende erfaring på dette området,
                er vi i stand til å skreddersy salgsprosessen til hver kundes
                spesielle behov og situasjon. Vi har et betydelig nettverk i
                kapitalmarkedet som inkluderer PE, private finansielle aktører,
                industrielle miljøer og utenlandske systemer.
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
