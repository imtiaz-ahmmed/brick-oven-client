import { Link } from "react-router-dom";

const NavBar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <a>Contact Us</a>
      </li>
      <li>
        <a>Dashboard</a>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <a>Our Shop</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="max-w-screen-xl mx-auto navbar fixed z-40 md:z-10 opacity-75 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black text-white rounded-box w-52 "
            >
              {navOptions}
            </ul>
          </div>
          <a href="/" className=" normal-case text-xl">
            Brick Oven <br /> Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  md:text-lg ">
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
