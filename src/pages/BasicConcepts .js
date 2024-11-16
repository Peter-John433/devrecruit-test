export default function BasicConcepts() {
  return (
    <div className="container max-md:px-5 my-10">
      <div className="text-xl lg:text-2xl font-bold mb-3 lg:mb-5">
        <span className="text-red-500">Question 1:</span> <br />
        <span>Basic Concepts</span>
      </div>
      <div>
        <div className="text-lg lg:text-xl font-bold leading-[28px]">
          Explain the difference between state and props in React. Provide an
          example of how each is used.
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">State</h3>
          <p className="max-md:text-sm lg:leading-[28px]">
            State is an internal data that act as the component memory, it's use
            to hold data over time, and rerender each time the data changed,
            state use a "set function" that help keep the state in sync with the
            ui.State is mainly for interactivity. e.g a button element that's
            been controlled be a state got updated each time the button is
            clicked causing the component to rerender.
          </p>
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">Prop</h3>
          <p className="max-md:text-sm lg:leading-[28px]">
            Prop is an external data owned by the parent component, prop is a
            channel in which parent component easily communicate with the child
            component. it's like a function parameter,prop is immutable by the
            child component(readonly).recieving new prop causes the child
            compoent to rerender usually when the parent component is been
            updated. <br />
            Prop give parent component the ability to configure the child
            component. e.g a prop function passed to child component will only
            work when the child component recieve the prop function, when the
            prop function is updated from the parent component, this will make
            the child component to rerender.
          </p>
        </div>
      </div>
      <div>
        <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
          <span className="text-red-500">Question 2:</span> <br />
          <span>What is JSX? Why is it used in React?</span>
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">Jsx</h3>
          <p className="max-md:text-sm lg:leading-[28px]">
            Jsx is a declarative syntax that help to describe how components
            look like and how they work, each component must return a single jsx
            syntax. jsx is an extension of javascript which allow us to embed
            css, react components and javascript into html. jsx is been
            converted into javascript through bable.
          </p>
        </div>
        <div>
          <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">
            Why is it used in React?
          </h3>
          <ul className="max-md:text-sm lg:leading-[28px]">
            <li>-for declarative purposes</li>
            <li>-for easy rendering of components</li>
            <li>-it's improve readability e.t.c</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
