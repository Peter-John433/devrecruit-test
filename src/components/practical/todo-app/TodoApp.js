import TaskList from "../TaskList";
import Form from "./Form";

export default function TodoApp() {
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
      <Form />
      <TaskList />
    </div>
  );
}
