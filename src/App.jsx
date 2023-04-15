import React, { useState } from 'react';
import AddNoteForm from './components/AddNoteForm';
import NotesList from './components/NotesList';

const App = () => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  return (
    <div className='m-1 bg-slate-400' >
      
      <AddNoteForm title={title} note={note} setTitle={setTitle} setNote={setNote} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
      <NotesList title={title} note={note} setTitle={setTitle} setNote={setNote} isUpdate={isUpdate} setIsUpdate={setIsUpdate}/>
    </div>
  );
};

export default App;
