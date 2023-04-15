import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./notesSlice";

export default configureStore({
    reducer: {
        notes: notesSlice,
    }
});

// here we create store and reducer(s)