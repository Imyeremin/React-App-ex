import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteRecord, getRecords, addRecord, updateRecord } from "../api";

const fetchRecords = createAsyncThunk("api/getRecords", async () => {
  return getRecords();
});

const fethDeleteRecord = createAsyncThunk(
  "api/deleteRecord",
  async (recordId) => {
    return deleteRecord(recordId);
  }
);
const fetchUpdateRecord = createAsyncThunk(
  "api/updateBook",
  async (book, thunkApi) => {
     return updateRecord(book.id, book);
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
        id: "1",
        dateTime: "20.12.2024 13:30",
        nameTel: "Илья 89105027873",
        auto: "Toyota Camry 2013",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odio reprehenderit quod aliquam quaerat nisi. Commodi velit, ullam soluta labore ratione mollitia fugit quos vero corrupti sunt obcaecati aut sit!",
      },
    ],
  },
  reducers: {},
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
    builder.addCase(fetchUpdateRecord.fulfilled, (state, action) => {
      const idx = state.records.findIndex((x) => x.id === action.payload.id);
      state.records[idx] = { ...action.payload };
    });
  },
});

export { fetchRecords, fethDeleteRecord, fetchAddRecord, fetchUpdateRecord };

export default recordSlise.reducer;
