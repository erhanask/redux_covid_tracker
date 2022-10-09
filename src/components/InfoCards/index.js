import { Grid } from "@mui/material";
import { CardItemInfected, CardItemRecovered, CardItemDeaths } from "./CardItems";

const columnStyle = {
    padding:'5px'
}

export const InfoCards = () => {
  return (
    <Grid container sx={{ margin: "0px", width: "100%" }}>
      <Grid sx={columnStyle} xs={12} md={4} item={true}>
        <CardItemInfected></CardItemInfected>
      </Grid>
      <Grid sx={columnStyle} xs={12} md={4} item={true}>
        <CardItemRecovered></CardItemRecovered>
      </Grid>
      <Grid sx={columnStyle} xs={12} md={4} item={true}>
        <CardItemDeaths></CardItemDeaths>
      </Grid>
    </Grid>
  );
};
