import { useState } from "react";
import { useTodoContext } from "../../../contextApi/TodoProvider";
import Button from "../../button/Button";

export default function Form() {
  const { addTask } = useTodoContext();
  const [error, setError] = useState("");
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTask) {
      setError("Please type in a prods");
      return;
    }

    const newTaskItem = {
      title: newTask,
      id: crypto.randomUUID(),
    };

    setError("");
    addTask(newTaskItem);
    setNewTask("");
  };

  //css in js for button
  const buttonStyles = {
    color: "white",
    backgroundColor: "green",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "4px",
    paddingBottom: "4px",
    fontSize: "12px",
    width: "100px",
    fontWeight: 300,
  };
  return (
    <form
      className="w-full lg:w-[50%] relative bg-white shadow-sm px-5 py-6 mt-14 mb-5 rounded-md flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <input
        className="w-full placeholder:text-xs placeholder:text-gray-500  border-[1px] border-gray-300 shadowm-lg outline-none px-3 py-1 text-xs"
        placeholder="add a product..."
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      {/* display error message */}
      <span className="absolute bottom-[8%] left-[3.5%] text-xs">
        {error && <p style={{ color: "red" }}>{error}</p>}
      </span>
      <Button buttonStyle={buttonStyles}>Submit</Button>
    </form>
  );
}
