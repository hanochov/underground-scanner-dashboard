import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IScanEvent } from "../../interfaces/IScan";
import { fetchScanEvents } from "./scanEventsThunks";

interface ScanEventsState {
  events: IScanEvent[];
  filters: {
    type: string[];
    status: string[];
    source: string[];
  };
  selectedId: string | null;
  isLoading: boolean;
}

const initialState: ScanEventsState = {
  events: [],
  filters: {
    type: [],
    status: [],
    source: [],
  },
  selectedId: null,
  isLoading: false,
};

const scanEventsSlice = createSlice({
  name: "scanEvents",
  initialState,
  reducers: {
    addEvent(state, action: PayloadAction<IScanEvent>) {
      state.events.push(action.payload);
    },
    setFilters(
      state,
      action: PayloadAction<Partial<ScanEventsState["filters"]>>
    ) {
      state.filters = { ...state.filters, ...action.payload };
    },
    selectEvent(state, action: PayloadAction<string | null>) {
      state.selectedId = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchScanEvents.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchScanEvents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(fetchScanEvents.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addEvent, setFilters, selectEvent, setLoading } =
  scanEventsSlice.actions;

export default scanEventsSlice.reducer;
