import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRecord, getRecords, addRecord } from "../api";

const fetchRecords = createAsyncThunk("api/getRecords", async () => {
  return getRecords();
});

const fethDeleteRecord = createAsyncThunk(
  "api/deleteRecord",
  async (recordId) => {
    return deleteRecord(recordId);
  }
);

const fetchAddRecord = createAsyncThunk("api/addRecord", async (recordId) => {
  return addRecord(recordId);
});

const recordSlise = createSlice({
  name: "record",
  initialState: {
    records: [
      {
        id: 0,
        dateTime: "20.12.2024 13:30",
        nameTel: "Илья 89105027873",
        auto: "Toyota Camry 2013",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio reprehenderit quod aliquam quaerat nisi. Commodi velit, ullam soluta labore ratione mollitia fugit quos vero corrupti sunt obcaecati aut sit!",
      },
    ],
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchRecords.fulfilled, (state, action) => {
      state.records = [...action.payload];
    });
    builder.addCase(fethDeleteRecord.fulfilled, (state, action) => {
      state.records = state.records.filter((x) => x.id !== action.payload.id);
    });
    builder.addCase(fetchAddRecord.fulfilled, (state, action) => {
      console.log(action.payload);
      state.records.push(action.payload);
    });
  },
});

export { fetchRecords, fethDeleteRecord, fetchAddRecord };

export default recordSlise.reducer;
