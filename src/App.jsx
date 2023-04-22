import Note from './components/Note';

const App = () => {
  
  return (
    <div className='bg-slate-300 flex flex-col items-center w-full' >
      <h1 className='w-full h-16 text-center text-4xl p-2 fixed bg-slate-300 z-10' >Daily Notes</h1>
      <Note />
    </div>
  );
};

export default App;
