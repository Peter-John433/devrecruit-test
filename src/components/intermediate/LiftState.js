export default function LiftState() {
  return (
    <div>
      <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
        <span className="text-red-500">Question 4:</span> <br />
        <span>
          Explain the concept of lifting state up in React. Provide an example
          where this is necessary.
        </span>
      </div>
      <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">
        Lifting State Up
      </h3>
      <p className="max-md:text-sm mt-5 lg:leading-[28px]">
        Is the practice of moving state from the child component to the common
        parent component so that different component will be able to use it.this
        is done when different child component need to intereact with thesame
        state, the state will be lifted up to the parent component making all
        the children component have access to it through prop. example is found
        in form, todo-list etc.
      </p>
    </div>
  );
}
