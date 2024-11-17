import Jsx from "../components/basic/Jsx";
import Prop from "../components/basic/Prop";
import State from "../components/basic/State";

export default function BasicConcepts() {
  return (
    <div className="container max-md:px-5 my-10">
      <div className="text-xl lg:text-2xl font-bold mb-3 lg:mb-5">
        <span className="text-red-500">Question 1:</span> <br />
        <span>Basic Concepts</span>
      </div>
      <div>
        <State />
        <Prop />
      </div>
      <div>
        <Jsx />
      </div>
    </div>
  );
}
