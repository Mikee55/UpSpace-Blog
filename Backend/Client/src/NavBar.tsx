import { Link } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { useState } from "react";

const NavBar = () => {
  const { isLoggedIn, logout } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="fixed z-10 top-0 flex py-3 w-full items-center justify-between bg-gray-100 ">
      <h1 className="px-10 text-2xl  font-bold cursor-pointer text-stone-500 sm:mr-0">
        <Link to="/">UpSpace</Link>
      </h1>

      <div className="flex flex-row items-center">
        <div className="flex flex-col relative sm:hidden">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {showMenu && (
            <ul className="absolute top-5 -left-9 flex items-center m-2 flex-col w-24 bg-slate-100 sm:flex-row">
              <li className="px-3">
                <Link to="/">Home</Link>
              </li>
              <li className="px-3">
                <Link to="/categories">Categories</Link>
              </li>
              <li className="px-3">
                <Link to="/about">About</Link>
              </li>
            </ul>
          )}
        </div>

        <ul className="flex items-center m-2 hidden sm:flex">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/categories">Categories</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
        </ul>

        <div className="flex mr-2">
          <li className="flex items-center px-1 mx-2 text-sm text-slate-800 bg-opacity-85 rounded-lg h-6 border-2 border-sky-700 hover:bg-orange-600 sm:px-5 sm:mx-4 sm:h-7 sm:text-base">
            <Link to={isLoggedIn ? "/newblog" : "/login"}>Add Blog</Link>
          </li>
          <li className="flex items-center px-1 text-sm text-slate-100 border-2 border-sky-700 bg-sky-700 bg-opacity-85 rounded-lg h-6  hover:bg-orange-600 sm:px-5 sm:h-7 sm:text-base">
            {isLoggedIn ? (
              <button onClick={logout}>Logout</button>
            ) : (
              <Link to="/login">Login/Register</Link>
            )}
          </li>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
