export default function BasicConcepts() {
  return (
    <div className="container mt-10">
      <div className="text-xl lg:text-2xl font-bold mb-3 lg:mb-5">
        Basic Concepts
      </div>
      <div>
        <div className="text-lg lg:text-xl font-bold">
          Explain the difference between state and props in React. Provide an
          example of how each is used.
        </div>
        <p className="max-md:text-sm">
          State is an inbuilt react hook present in all react components. each
          component has it own state, also state is an internal data that act as
          the component memory, it's use to hold data over time, and rerender
          each time the data changed, state use a "set function" that help keep
          the state in sync with the ui.State is mainly for interactivity.
        </p>
      </div>
    </div>
  );
}
