import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note';

const NotesList = ({setNote, setTitle, isUpdate, setIsUpdate}) => {

  const notes = useSelector(state => state.notes);

  return (
    <div>
      { notes 
      ?
      notes?.map( (item, index) => (<Note key={index} title={item.title} note={item.note} id={item.id} setNote={setNote} setTitle={setTitle} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>)  )
      : '' }
    </div>
  );
};

export default NotesList;
