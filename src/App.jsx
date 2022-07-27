import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div className="App font-ffKanit bg-teal-400 flex flex-col justify-center items-center h-screen">
      <h2 className="appTitle text-2xl text-stone-900">My Tasks</h2>
      <div className="main flex flex-col justify-center items-center gap-5 ">
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
