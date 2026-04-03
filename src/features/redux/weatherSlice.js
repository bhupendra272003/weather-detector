import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchWeatherAPI } from "./weatherService";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async ({ city, unit }) => {
    return await fetchWeatherAPI(city, unit);
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    forecast: null,
    loading: false,
    error: null,
    unit: "metric",
  },
  reducers: {
    toggleUnit: (state) => {
      state.unit = state.unit === "metric" ? "imperial" : "metric";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.weather;
        state.forecast = action.payload.forecast;
      })
      .addCase(fetchWeather.rejected, (state) => {
        state.loading = false;
        state.error = "City not found";
      });
  },
});

export const { toggleUnit } = weatherSlice.actions;
export default weatherSlice.reducer;

