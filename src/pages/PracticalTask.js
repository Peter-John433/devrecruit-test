import TodoApp from "../components/practical/TodoApp";
import { TodoProvider } from "../context/TodoProvider";
// import Modal from "../components/practical/modal/Modal";
import SearchBar from "../components/practical/SearchBar";
import Pagination from "../components/practical/Pagination";
import MultiStepForm from "../components/practical/milti-form/MuiltiStepForm";

export default function PracticalTask() {
  return (
    <TodoProvider>
      <div className="container max-md:px-5 my-10">
        <TodoApp />
        <SearchBar />
        <Pagination />
        <MultiStepForm />
      </div>
    </TodoProvider>
  );
}
