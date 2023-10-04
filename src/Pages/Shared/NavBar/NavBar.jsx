import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Initialize menu state
  const [isMenuIconClose, setIsMenuIconClose] = useState(false); // Initialize icon state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    setIsMenuIconClose(!isMenuIconClose); // Toggle the icon state
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" className="hover:text-[#EEFF25]  duration-300">
          Home
        </Link>
      </li>

      <li>
        <Link to="/contact" className="hover:text-[#EEFF25]  duration-300">
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="hover:text-[#EEFF25]  duration-300">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/menu" className="hover:text-[#EEFF25]  duration-300">
          Our Menu
        </Link>
      </li>
      <li>
        <Link to="/shop" className="hover:text-[#EEFF25]  duration-300">
          Our Shop
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="max-w-screen-xl mx-auto navbar md:fixed z-40 md:z-10 md:opacity-75 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuIconClose ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              )}
            </label>

            {isMenuOpen && (
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52"
              >
                {navOptions}
              </ul>
            )}
          </div>
          <a href="/" className="normal-case text-xl">
            Brick Oven <br /> Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-bold menu-horizontal px-1  md:text-lg ">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
