import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { IScanEvent } from "../../interfaces/IScan";

export const fetchScanEvents = createAsyncThunk<IScanEvent[], void>(
  "scanEvents/fetchScanEvents",
  async () => {
    const res = await axios.get<IScanEvent[]>("http://localhost:4000/api/scans");
    return res.data;
  }
);
