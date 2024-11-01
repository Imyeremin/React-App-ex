import { configureStore } from "@reduxjs/toolkit";
import recordReduser from "./recordSlise";

export default configureStore({
  reducer: {
    records: recordReduser,
  },
});
