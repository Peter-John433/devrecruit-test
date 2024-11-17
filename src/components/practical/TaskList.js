import { useTodoContext } from "../../contextApi/TodoProvider";
import Button from "../button/Button";

export default function TaskList() {
  const { tasks, editTask, deleteTask } = useTodoContext();

  //edit task function
  const handleEdit = (id, newtitle) => {
    editTask(id, { title: newtitle });
  };

  //delete task function
  const handleDelete = (id) => {
    deleteTask(id);
  };

  //css in js for the edit button
  const buttonStyle1 = {
    color: "white",
    backgroundColor: "green",
    paddingLeft: "3px",
    paddingRight: "3px",
    borderRadius: "8px",
    fontSize: "10px",
    fontWeight: 300,
  };

  //css in js for the delete button
  const buttonStyle2 = {
    color: "white",
    backgroundColor: "red",
    paddingLeft: "3px",
    paddingRight: "3px",
    borderRadius: "8px",
    fontSize: "10px",
    fontWeight: 300,
  };
  return (
    <div>
      <ul className="flex flex-row flex-wrap justify-start items-start lg:items-center gap-y-5 gap-x-5 mb-20">
        {tasks.map((product) => (
          <li
            className="bg-[#0d0d0d] text-white p-2 font-bold rounded-md shadow-md flex justify-center items-center gap-x-3 text-sm "
            key={product.id}
          >
            {product.title}
            <Button
              buttonStyle={buttonStyle1}
              onClick={() =>
                handleEdit(product.id, prompt("edit product:", product.title))
              }
            >
              Edit
            </Button>
            <Button
              buttonStyle={buttonStyle2}
              onClick={() => handleDelete(product.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
