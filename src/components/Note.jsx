import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteNote, updateNote } from "../redux/notesSlice";

const Note = ({ title, note, id, setNote, setTitle, isUpdate, setIsUpdate }) => {

const dispatch = useDispatch();

const handleDelete = (title) => {
  if (note) {
    dispatch(deleteNote(title));
  }
}

const handleUpdate = (title, isUpdate) => {
  setNote(note);
  setTitle(title);
  setIsUpdate(!isUpdate);
}


// if (note) {
//   dispatch(updateNote(title));
// }


  return (
    <div className='bg-orange-500'>
      <h3>{title}</h3>
      <p>{note}</p>
      <button onClick={() => handleUpdate(title)} >update</button>
      <button onClick={() => handleDelete(title)} >delete</button>
    </div>
  );
};

export default Note;

