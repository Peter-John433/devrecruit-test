import { useState } from "react";
import { useTodoContext } from "../../context/TodoProvider";
import TaskList from "./TaskList";
import Button from "../button/Button";

export default function TodoApp() {
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
    <div>
      <div className="text-lg lg:text-xl font-bold leading-[28px]">
        A form with validation. A list that can be filtered based on user input.
        A component that uses the Context API to manage state. Implement a
        search bar that filters a list of items in real-time as the user types.
        Ensure the search is case-insensitive. Create a reusable modal component
        using React Portals. The modal should be able to display dynamic content
        passed as props. Build a to-do list application where users can add,
        edit, and delete tasks. Use local storage to persist the tasks between
        page reloads. Develop a component that fetches and displays paginated
        data from an API. Include buttons to navigate between pages. Create a
        multi-step form wizard. Each step should be a separate component, and
        the form should validate inputs at each step before allowing the user to
        proceed.
      </div>
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
      <TaskList />
    </div>
  );
}
