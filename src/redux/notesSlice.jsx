import { createSlice } from '@reduxjs/toolkit';


const notesSlice = createSlice({
  name: 'notes',
  initialState: { notesList : [] },
  reducers: {
    addNote: (state, action) => {
      state.notesList.push(action.payload);
    },
    deleteNote: (state, action) => {
      state.notesList = state.notesList.filter(item => item.id !== action.payload);
    },
    updateNote: (state, action) => {
      state.notesList = state.notesList.map(item => {
        console.log(item.id);
        console.log(action.payload);
        if (item.id === action.payload.id) {
          item.title = action.payload.title;
          item.note = action.payload.note;
        }
        return item;
      })
    }
  },
});

export const { addNote, deleteNote, updateNote } = notesSlice.actions;

export default notesSlice.reducer;
