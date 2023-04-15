import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote, updateNote } from '../redux/notesSlice';

const AddNoteForm = ({title, note, setNote, setTitle, isUpdate, setIsUpdate}) => {

  const dispatch = useDispatch();

  const handleAddSubmit = e => {
    e.preventDefault();
    if (title) {
      dispatch(addNote({ title, note }));
      setTitle('');
      setNote('');
    }
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (title) {
      dispatch(updateNote({ title, note }));
      setTitle('');
      setNote('');
      setIsUpdate(!isUpdate);
    }
  }

  return (
  <>
{!isUpdate ? 
    <form onSubmit={handleAddSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" value={note} onChange={e => setNote(e.target.value)} />
      <button type="submit">Add Note</button>
    </form>
    :
    <form onSubmit={handleUpdateSubmit}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" value={note} onChange={e => setNote(e.target.value)} />
      <button type="submit">Update Note</button>
    </form>
  }
    </>
  );
};

export default AddNoteForm;

