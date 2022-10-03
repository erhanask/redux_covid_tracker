import { Grid } from "@mui/material";
import { CardItemInfected, CardItemRecovered, CardItemDeaths, CardItemActive } from "./CardItems";

const columnStyle = {
    padding:'5px'
}

export const InfoCards = () => {
  return (
    <Grid container sx={{ margin: "0px", width: "100%" }}>
      <Grid sx={columnStyle} xs={6} md={3}>
        <CardItemInfected></CardItemInfected>
      </Grid>
      <Grid sx={columnStyle} xs={6} md={3}>
        <CardItemRecovered></CardItemRecovered>
      </Grid>
      <Grid sx={columnStyle} xs={6} md={3}>
        <CardItemDeaths></CardItemDeaths>
      </Grid>
      <Grid sx={columnStyle} xs={6} md={3}>
        <CardItemActive></CardItemActive>
      </Grid>
    </Grid>
  );
};
