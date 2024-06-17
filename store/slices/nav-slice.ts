import { createSlice } from "@reduxjs/toolkit";
import { Destination, Origin } from "@/types/location-types";
interface NavState {
  origin: Origin | null;
  destination: Destination | null;
  travelTimeInformation: null;
}

const initialState: NavState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state: { nav: NavState }) => state.nav.origin;
export const selectDestination = (state: { nav: NavState }) =>
  state.nav.destination;
export const selectTravelTimeInformation = (state: { nav: NavState }) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
