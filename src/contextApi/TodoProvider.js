import { createContext, useState, useEffect, useContext } from "react";

//i will create context
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //fetch task from localstorage on initial load using useEffect
  useEffect(() => {
    const saveTask = JSON.parse(localStorage.getItem("task")) || [];
    setTasks(saveTask);
  }, []);

  //add task
  const addTask = (myTask) => {
    const newTask = [...tasks, myTask];
    setTasks(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));
  };

  //edit task
  const editTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updatedTask } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  //delete task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };

  return (
    <TodoContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TodoContext.Provider>
  );
};

// am using Custom hook for easy access to context
export const useTodoContext = () => {
  return useContext(TodoContext);
};
