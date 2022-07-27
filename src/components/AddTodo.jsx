import { Label, TextInput, Button, Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      <Alert color="failure" icon={HiInformationCircle}>
        <span>
          <span className="font-medium">Info alert!</span> Enter a task before
          adding!!
        </span>
      </Alert>;
      setValue("");
      return;
    }

    dispatch(
      addTask({
        task: value,
      })
    );
    setValue("");
  };

  return (
    <div className="addTodo">
      <form className="flex gap-2" onSubmit={handleFormSubmit}>
        <div className="block mb-2">
          <Label
            htmlFor="text1"
            value="Task"
            className="text-2xl text-lime-700 font-bold"
          />
          <TextInput
            className="text1"
            type="text"
            placeholder="Study more.."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required={true}
          />
        </div>
        <div className="flex justify-center items-end" >
          <Button
            className="btn text-black"
            pill={true}
            size="lg"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
