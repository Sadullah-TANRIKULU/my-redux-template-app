import Note from './components/Note';

const App = () => {
  
  return (
    <div className='m-1 bg-slate-300' >
      <h1 className='w-full text-center text-4xl mb-3' >Daily Notes</h1>
      <Note />
    </div>
  );
};

export default App;
