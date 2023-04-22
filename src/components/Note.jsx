import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, updateNote, addNote } from "../redux/notesSlice";
import { TfiPencilAlt, TfiTrash } from "react-icons/tfi";

const Note = () => {


  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [unqID, setUnqID] = useState('');
  const [itemID, setItemID] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  const notes = useSelector(state => state.notes.notesList);
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
    <section className='mt-8 min-h-screen w-11/12' >

      {!isUpdate ?
        <form onSubmit={handleAddSubmit} className='flex flex-col items-center bg-fuchsia-700 gap-3 w-11/12 rounded-b-md pt-2 fixed top-16' >
          <input type="text" className='rounded-md focus:outline-none indent-2 mt-1 w-11/12 h-10' value={title} ref={titleInputEl} onChange={e => setTitle(e.target.value)} />
          <input type="text" className='rounded-md focus:outline-none indent-2 mt-1 w-11/12 h-10' value={note} onChange={e => setNote(e.target.value)} />
          <button type="submit" className='focus:outline-none hover:bg-green-700 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2' >Add Note</button>
        </form>
        :
        <form onSubmit={handleUpdateSubmit} className='flex flex-col items-center bg-fuchsia-700 gap-3 w-full rounded-b-md pt-2' >
          <input type="text" className='rounded-md focus:outline-none indent-2 mt-1 w-11/12 h-10' value={title} onChange={e => setTitle(e.target.value)} />
          <input type="text" className='rounded-md focus:outline-none indent-2 mt-1 w-11/12 h-10' value={note} onChange={e => setNote(e.target.value)} />
          <button type="submit" className='focus:outline-none hover:bg-green-700 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2' >Update Note</button>
        </form>
      }
      <div className='mt-56' >
        {notes ?
          notes.map((item) => (
            <div key={item.id} className="bg-yellow-200 flex justify-between gap-3 mt-2 mb-2 p-2 shadow-slate-900 shadow-md rounded-lg">
              <div className='w-1/2' >
                {/* <p>{item.id}</p> */}
                <p className='text-sm text-ellipsis' >{item.title}</p>
                <p className='text-lg text-ellipsis' >{item.note}</p>
              </div>
              <div className='flex gap-5 justify-evenly w-1/2 items-center' >
                <TfiTrash
                  className='w-16 h-12 pr-3 pl-3 max-h-16 cursor-pointer'
                  onClick={() => dispatch(deleteNote(item.id))}
                />
                <TfiPencilAlt
                  className='w-16 h-12 pr-3 pl-3 max-h-16 cursor-pointer'
                  onClick={() => handleUpdate(item)}
                />              
                </div>
            </div>
          ))
          :
          <p>This App is lack of note!!!</p>
        }
      </div>
    </section>
  );
};

export default Note;

