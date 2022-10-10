import { Card, CardContent, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCovidDatas } from "../../redux/InfoSlice";

//todo: Ben yanlış anlamışım sadece country değişecek bu dördünün içine gidecek type değişmiyor...
export const CardItemInfected = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.info.status);
  const informations = useSelector((state) => state.info.informations);
  const country = useSelector((state) => state.info.country);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCovidDatas({ country: 'global' }));
  }, [dispatch, status]);

  useEffect(() => {
    dispatch(fetchCovidDatas({ country: country }));
  }, [dispatch,country])

  return (
    <>
      <Card sx={{ bgcolor: "primary.light", maxHeight: "195px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Infected
          </Typography>
          <Typography variant="h5" component="div">
            <b>
              {status === "succeeded"
                ? informations.confirmed.value.toLocaleString()
                : "Loading"}
            </b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update :{" "}
            {status === "succeeded" ? informations.lastUpdate : "Loading"}
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
  const status = useSelector((state) => state.info.status);
  const informations = useSelector((state) => state.info.informations);
  const country = useSelector((state) => state.info.country);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCovidDatas({ country: 'global' }));
  }, [dispatch, status]);

  useEffect(() => {
    dispatch(fetchCovidDatas({ country: country }));
  }, [dispatch,country])

  return (
    <>
      <Card sx={{ bgcolor: "success.light", maxHeight: "195px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Recovered
          </Typography>
          <Typography variant="h5" component="div">
            <b>
              {status === "succeeded"
                ? informations.recovered.value.toLocaleString()
                : "Loading"}
            </b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update :{" "}
            {status === "succeeded" ? informations.lastUpdate : "Loading"}
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
  const status = useSelector((state) => state.info.status);
  const informations = useSelector((state) => state.info.informations);
  const country = useSelector((state) => state.info.country);

  useEffect(() => {
    if (status === "idle") dispatch(fetchCovidDatas({ country: 'global' }));
  }, [dispatch, status]);

  useEffect(() => {
    dispatch(fetchCovidDatas({ country: country }));
  }, [dispatch,country])

  return (
    <>
      <Card sx={{ bgcolor: "error.light", maxHeight: "195px" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Deaths
          </Typography>
          <Typography variant="h5" component="div">
            <b>
              {status === "succeeded"
                ? informations.deaths.value.toLocaleString()
                : "Loading"}
            </b>
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Last Update :{" "}
            {status === "succeeded" ? informations.lastUpdate : "Loading"}
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
