import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// /api/confirmed: global cases per region sorted by confirmed cases
// /api/recovered: global cases per region sorted by recovered cases
// /api/deaths: global cases per region sorted by death toll
// /api/daily: global cases per day

export const fetchCovidDatas = createAsyncThunk(
  "info/getCovidDatas",
  async ({ country }) => {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    return res.data;
  }
);

export const InfoSlice = createSlice({
  name: "info",
  initialState: {
    infected: null,
    recovered: null,
    deaths: null,
    lastUpdate: null,
    status: "idle",
  },
  reducers: {},
  extraReducers: {
    [fetchCovidDatas.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.infected = action.payload.confirmed;
      state.recovered = action.payload.recovered;
      state.deaths = action.payload.deaths;
      state.lastUpdate = action.payload.lastUpdate;
    },
    [fetchCovidDatas.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCovidDatas.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export const { fetchDataByType } = InfoSlice.actions;
export default InfoSlice.reducer;
