export default function Jsx() {
  return (
    <div>
      <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
        <span className="text-red-500">Question 2:</span> <br />
        <span>What is JSX? Why is it used in React?</span>
      </div>
      <div>
        <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">Jsx</h3>
        <p className="max-md:text-sm lg:leading-[28px]">
          Jsx is a declarative syntax that help to describe how components look
          like and how they work, each component must return a single jsx
          syntax. jsx is an extension of javascript which allow us to embed css,
          react components and javascript into html. jsx is been converted into
          javascript through bable.
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
  );
}
