import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const title = action.payload.title;
      const note = action.payload.note;
      state.push({ title, note });
    },
    deleteNote: (state, action) => {
      const title = action.payload.title;
      const index = state.findIndex(item => item.title === title);
      state.splice(index, 1);
    },
    updateNote: (state, action) => {
      const title = action.payload.title;
      const note = action.payload.note;
      const index = state.findIndex(item => item.title === title);
      console.log(title, note);
      state.push({ title, note });
    }
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
