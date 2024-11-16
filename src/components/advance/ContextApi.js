export default function ContextApi() {
  return (
    <div>
      <div className="text-xl lg:text-2xl font-bold mt-5 lg:mt-8">
        <span className="text-red-500">Question 5:</span> <br />
        <span>
          Describe the Context API and provide an example of how it can manage
          the global state in a React application.
        </span>
      </div>
      <p className="max-md:text-sm lg:leading-[28px] mt-5">
        The Context API is a built-in React feature that pass value throughout
        the app manually without passing props down the tree,it's especially
        useful for managing global state.
        <br />
        how context api manage global state, e.g, Let’s say you are building a
        simple React app that manages a user’s authentication state globally.
        The global state will track whether a user is logged in or logged out.
        This state needs to be accessible across various parts of the
        application, such as a login form, a user profile page, and a header
        that displays the login status.
      </p>
    </div>
  );
}
