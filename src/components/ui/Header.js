//react imports
import { useState } from "react";

//reuseable button component
import Button from "../button/Button";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleMobileView = () => {
    setOpen((show) => !show);
  };

  return (
    <div className="bg-black text-white">
      <nav className="container relative flex lg:flex-row justify-between items-center font-bold lg:text-lg capitalize p-5 md:p-0">
        <Link to="/">devRecruit</Link>
        <>
          {/* destop view */}
          <div className="hidden md:flex">
            <ul className="flex flex-col lg:flex-row justify-center items-center">
              <NavLink to="/" className="py-3 px-6 ">
                home
              </NavLink>
              <NavLink to="basic concepts" className="py-3 px-6 ">
                basic
              </NavLink>
              <NavLink to="intermediate concepts" className="py-3 px-6 ">
                intermediate
              </NavLink>
              <NavLink to="advanced concepts" className="py-3 px-6 ">
                advance
              </NavLink>
              <NavLink to="practical task" className="py-3 px-6 ">
                practical
              </NavLink>
            </ul>
          </div>

          <span className="flex lg:hidden" onClick={handleMobileView}>
            <Button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </span>

          {/* mobile view */}
          {open && (
            <div className="flex md:hidden absolute top-[100%] inset-x-0">
              <ul className="flex flex-col lg:flex-row justify-start items-center w-full">
                <NavLink
                  to="/"
                  className="py-5 ps-5 bg-[#0d0d0d]  w-full inset-x-0"
                >
                  home
                </NavLink>
                <NavLink
                  to="basic concepts"
                  className="py-5 ps-5 bg-[#0d0d0d]  w-full inset-x-0"
                >
                  basic
                </NavLink>
                <NavLink
                  to="intermediate concepts"
                  className="py-5 ps-5 bg-[#0d0d0d]  w-full inset-x-0"
                >
                  intermediate
                </NavLink>
                <NavLink
                  to="advanced concepts"
                  className="py-5 ps-5 bg-[#0d0d0d]  w-full inset-x-0"
                >
                  advance
                </NavLink>
                <NavLink
                  to="practical task"
                  className="py-5 ps-5 bg-[#0d0d0d]  w-full inset-x-0"
                >
                  practical
                </NavLink>
              </ul>
            </div>
          )}
        </>
      </nav>
    </div>
  );
}
