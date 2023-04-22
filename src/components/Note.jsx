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
    <section className='mt-8 bg-blue-500' >

      {!isUpdate ?
        <form onSubmit={handleAddSubmit} className='flex flex-col gap-3' >
          <input type="text" className='rounded-md focus:outline-none indent-2' value={title} ref={titleInputEl} onChange={e => setTitle(e.target.value)} />
          <input type="text" className='rounded-md focus:outline-none indent-2' value={note} onChange={e => setNote(e.target.value)} />
          <button type="submit" className='bg-lime-700 rounded-e-md pr-3 pl-3' >Add Note</button>
        </form>
        :
        <form onSubmit={handleUpdateSubmit} className='flex flex-col gap-3' >
          <input type="text" className='rounded-md focus:outline-none indent-2' value={title} onChange={e => setTitle(e.target.value)} />
          <input type="text" className='rounded-md focus:outline-none indent-2' value={note} onChange={e => setNote(e.target.value)} />
          <button type="submit" className='bg-lime-700 rounded-e-md pr-3 pl-3' >Update Note</button>
        </form>
      }
      <div className='bg-white min-h-[30rem] mt-3' >
        {notes ?
          notes.map((item) => (
            <div key={item.id} className="bg-yellow-400 flex justify-between gap-3 mt-2 mb-2 p-2 shadow-slate-900 shadow-md rounded-lg">
              <div className='bg-fuchsia-500 w-1/2' >
              {/* <p>{item.id}</p> */}
              <p className='text-sm' >{item.title}</p>
              <p className='text-lg' >{item.note}</p>
              </div>
              <div className='flex gap-5 justify-evenly bg-gray-400 w-1/2' >
                <button
                  className='bg-lime-700 rounded-e-md pr-3 pl-3'
                  onClick={() => dispatch(deleteNote(item.id))}
                >Delete
                </button>
                <button
                  className='bg-lime-700 rounded-e-md pr-3 pl-3'
                  onClick={() => handleUpdate(item)}
                >Update
                </button>
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

