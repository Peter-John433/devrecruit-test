export default function State() {
  return (
    <div>
      <div className="text-lg lg:text-xl font-bold leading-[28px]">
        Explain the difference between state and props in React. Provide an
        example of how each is used.
      </div>
      <h3 className="text-lg lg:text-xl font-bold mt-3 lg:mt-3">State</h3>
      <p className="max-md:text-sm lg:leading-[28px]">
        State is an internal data that act as the component memory, it's use to
        hold data over time, and rerender each time the data changed, state use
        a "set function" that help keep the state in sync with the ui.State is
        mainly for interactivity. e.g a button element that's been controlled be
        a state got updated each time the button is clicked causing the
        component to rerender.
      </p>
    </div>
  );
}
