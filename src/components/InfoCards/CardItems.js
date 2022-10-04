import { Card, CardContent, Typography } from "@mui/material";

let itemsCommonStyles = {
  maxHeight: '255px'
}

export const CardItemInfected = () => {
  return (
    <>
      <Card sx={{ bgcolor : 'primary.light',itemsCommonStyles  }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5" component="div">
            <b>2.500.000</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update : 02.10.2022 6:21:55PM
          </Typography>
          <Typography variant="body2">
            Number Of Active Cases Of Covid-19
            <br />
            in : country
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};


export const CardItemRecovered = () => {
  return (
    <>
      <Card sx={{ bgcolor : 'success.light'  }}>
        <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5" component="div">
            <b>2.500.000</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update : 02.10.2022 6:21:55PM
          </Typography>
          <Typography variant="body2">
            Number Of Recovered Caused By Covid-19
            <br />
            in : country
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};


export const CardItemDeaths = () => {
  return (
    <>
      <Card sx={{ bgcolor : 'error.light',  }}>
      <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5" component="div">
            <b>2.500.000</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update : 02.10.2022 6:21:55PM
          </Typography>
          <Typography variant="body2">
            Number Of Deaths Caused By Covid-19
            <br />
            in : country
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};


export const CardItemActive = () => {
  return (
    <>
      <Card sx={{ bgcolor : 'warning.light'  }}>
      <CardContent>
         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Active
          </Typography>
          <Typography variant="h5" component="div">
            <b>2.500.000</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update : 02.10.2022 6:21:55PM
          </Typography>
          <Typography variant="body2">
            Number Of Active Cases Of Covid-19
            <br />
            in : country
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};