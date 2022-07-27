import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/tasksSlice";
import { Button } from "flowbite-react";

const TodoItem = ({ id, title }) => {
  const dispatch = useDispatch();

  const removeTask = () => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };

  return (
    <div className="todoItem bg-amber-600 w-11/12 flex justify-between items-center h-10">
      <div className="title">{title}</div>
      <div className="btnDel">
        <Button
          className=""
          size="xs"
          color="failure"
          pill={true}
          onClick={() => {
            removeTask();
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default TodoItem;
