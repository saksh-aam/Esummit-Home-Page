import React from "react";
import "./NavBar.css";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="text-white m-2 mx-4">
      <div className=" container flex flex-wrap justify-between items-center">
        <a href="" className="navbar-brand">
          E-SUMMIT
        </a>
        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button">
            <svg
              className=" w-6 h-6 text-gray-500 hover:text-green-500 "
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className="hidden md:block">
          <ul className="flex  justify-between items-center flex-row space-x-8 font-medium">
            <li>
              <a href="">HOME</a>
            </li>
            <li>
              <a href="">TEAM</a>
            </li>
            <li>
              <a href="">EVENTS</a>
            </li>
            <li>
              <a href="">SPEAKERS</a>
            </li>
            <li>
              <a href="">SPONSORS</a>
            </li>
          </ul>
        </div>
        <button
          type="submit"
          className="text-white border-2 hover:bg-white border-white hover:text-black font-semibold rounded-full m-2 p-2 px-4"
        >
          REGISTER NOW
        </button>
      </div>
    </nav>
  );
}

export default App;
