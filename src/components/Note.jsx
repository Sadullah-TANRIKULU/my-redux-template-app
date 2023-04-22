import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, updateNote, addNote } from "../redux/notesSlice";

const Note = () => {

  
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [unqID, setUnqID] = useState('');
  const [itemID, setItemID] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  
  const notes = useSelector(state => state.notes.notesList);
  console.log(notes);
  const dispatch = useDispatch();
  
  const titleInputEl = useRef(null);
  
  
  const handleAddSubmit = e => {
    let time = Date.now();
    setUnqID(time);
    e.preventDefault();
    if (unqID) {
      dispatch(addNote({ id: unqID, title: title, note: note }));
      setTitle('');
      setNote('');
    }
    titleInputEl.current.focus();
  };

  const handleUpdate = (item) => {
    setItemID(item.id);
    setNote(item.note);
    setTitle(item.title);
    setIsUpdate(true);
  }

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    dispatch(updateNote({ id: itemID, title: title, note: note }));
    setTitle('');
    setNote('');
    setIsUpdate(false);
  }


  return (
    <section className='' >

      {!isUpdate ?
        <form onSubmit={handleAddSubmit}>
          <input type="text" value={title} ref={titleInputEl} onChange={e => setTitle(e.target.value)} />
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
      {
        notes.map((item) => (
          <div key={item.id} className="bg-yellow-400 flex gap-3 mb-1">
            <p>{item.id}</p>
            <p>{item.title}</p>
            <p>{item.note}</p>
            <div className='flex gap-3' >
              <button
                className='deletebtn'
                onClick={() => dispatch(deleteNote(item.id))}
              >Delete
              </button>
              <button
                className='updatebtn'
                onClick={() => handleUpdate(item)}
              >Update
              </button>
            </div>
          </div>
        ))
      }

    </section>
  );
};

export default Note;

