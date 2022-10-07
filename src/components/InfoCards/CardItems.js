import { Card, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidDatas } from "../../redux/InfoSlice";


//todo: Ben yanlış anlamışım sadece country değişecek bu dördünün içine gidecek type değişmiyor...
export const CardItemInfected = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.info.status);
  const infoInfected = useSelector(state => state.info.infected);
  const lastUpdate = useSelector(state => state.info.lastUpdate);
  console.log(lastUpdate)
  useEffect(() => {
      if (status === 'idle')
          dispatch(fetchCovidDatas({country: 'turkey'}))
  },[dispatch,status])

  return (
    <>
      <Card sx={{ bgcolor: "primary.light", maxHeight: "170px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5" component="div">
            <b>{status === 'succeeded' ? infoInfected.value : 'Loading'}</b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update : {status === 'succeeded' ? lastUpdate : 'Loading'}
          </Typography>
          <Typography variant="body2">
            Active Cases Of Covid-19
            <br />
            in : country
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export const CardItemRecovered = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.info.status);
  const infoRecovered = useSelector(state => state.info.recovered);

  console.log(infoRecovered);
  useEffect(() => {
      if (status === 'idle')
          dispatch(fetchCovidDatas({country: 'turkey'}))
  },[dispatch,status])

  return (
    <>
      <Card sx={{ bgcolor: "success.light", maxHeight: "170px" }}>
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
            Recovered Caused By Covid-19
            <br />
            in : country
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export const CardItemDeaths = () => {

  const dispatch = useDispatch();
  const status = useSelector(state => state.info.status);
  const infoRecovered = useSelector(state => state.info.recovered);

  console.log(infoRecovered);
  useEffect(() => {
      if (status === 'idle')
          dispatch(fetchCovidDatas({country: 'turkey'}))
  },[dispatch,status])

  return (
    <>
      <Card sx={{ bgcolor: "error.light", maxHeight: "170px" }}>
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
            Deaths Caused By Covid-19
            <br />
            in : country
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};