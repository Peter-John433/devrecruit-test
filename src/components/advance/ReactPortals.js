import React from "react";

export default function ReactPortals() {
  return (
    <div>
      <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
        <span className="text-red-500">Question 6:</span> <br />
        <span>
          Explain the concept of React Portals. Provide an example of a scenario
          where React Portals would be useful.
        </span>
      </div>
      <p className="max-md:text-sm lg:leading-[28px] mt-5">
        React Portals provide a way to render a component’s output outside of
        its parent DOM hierarchy. This allows you to "portal" the children of a
        component to a different part of the DOM tree, even if that part is
        outside the normal React component tree structure.Normally, when React
        renders a component, it does so within the parent component's DOM
        container, but with portals, you can render a child component into a
        completely different part of the DOM, even outside the parent component.
        React portal is useful for things like <strong>Modal</strong>,
        <strong>Popups</strong>, <strong>Overlay</strong> e.t.c
      </p>
    </div>
  );
}
