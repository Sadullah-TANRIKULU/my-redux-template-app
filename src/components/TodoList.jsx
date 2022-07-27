import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

    const todos = useSelector((state) => {
        return state.tasks;
    });
    console.log(todos);



    return ( 
        <div className="todoList flex flex-col gap-5 w-full justify-center items-center ">
            { todos.map((todo) => (
                <TodoItem key={todo.id} id={todo.id} title={todo.name} completed={todo.status} />
            )) }
        </div>
     );
}
 
export default TodoList;