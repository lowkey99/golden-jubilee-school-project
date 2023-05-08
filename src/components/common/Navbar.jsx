import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  let activeStyle = {
    background: "#fff0",
    color: "#444bcb",
    fontWeight: "600",
  };

  const menuItem = (
    <>
      <li>
        <NavLink
          to="/home"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          HOME
        </NavLink>
      </li>
      <li tabIndex={0}>
        <NavLink
          to="/about"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm justify-between"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          ABOUT
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </NavLink>
        <ul className="p-2 bg-orange-500 divide-y divide-black text-white">
          <li>
            <HashLink
              smooth
              
              to="/about/#ssbvgjs"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              SSBVGJS
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#founder"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              FOUNDER
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#history"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              HISTORY OF SCHOOL
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#vision"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              VISION AND MISSION
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#chairman"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              CHAIRMAN ‘S DESK
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#correspondent"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              CORRESPONDENT’S DESK
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#principal"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              PRINCIPAL’S DESK
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#board"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              BOARD OF TRUSTEES
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              
              to="/about/#committee"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              
            >
              COMMITTEE
            </HashLink>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <NavLink
          to="/admission"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm justify-between uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          admission
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </NavLink>
        <ul className="p-2 bg-orange-500 divide-y divide-black text-white">
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              ADMISSION PROCEDURE
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              AGE CRITERIA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              FEE STRUCTURE
            </NavLink>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <NavLink
          to="/academics"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm justify-between uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          academics
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </NavLink>
        <ul className="p-2 bg-orange-500 divide-y divide-black text-white">
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CURRICULUM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              RULES AND REGULATION
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CO-CURRICULAR ACTIVITES
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              ACHIEVEMENTS & AWARDS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CALENDAR
            </NavLink>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <NavLink
          to="/campus"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm justify-between uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          campus
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </NavLink>
        <ul className="p-2 bg-orange-500 divide-y divide-black text-white">
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CLASS ROOMS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              LIBRARY
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              LABORATORY
            </NavLink>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <NavLink
          to="/facility"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm justify-between uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          facility
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </NavLink>
        <ul className="p-2 bg-orange-500 divide-y divide-black text-white">
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              TRANSPORT
            </NavLink>
          </li>
        </ul>
      </li>
      <li tabIndex={0}>
        <NavLink
          to="/team"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm justify-between uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          team
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </NavLink>
        <ul className="p-2 bg-orange-500 divide-y divide-black text-white">
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              LEADERS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              ACADEMICS TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              CO-SCHOLOSTIC TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              ADMINISTRATIVE TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              HOUSE- KEEPING TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              TRANSPORT TEAM
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              SECURITY TEAM
            </NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink
          to="/mandatory-disclosure"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          mandatory disclosure (cbse)
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gallery"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          gallery
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="hover:text-[#444bcb] px-4 py-2 hover:px-4 hover:py-2 hover:rounded-sm uppercase"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          contact
        </NavLink>
      </li>

      {/* <li className="flex justify-center items-center gap-2">

        <button onClick={handleToggleClick}>
          {isDarkMode ? <CiLight className="hover:fill-[#444bcb] w-5 h-5" /> : <CiDark className="hover:fill-[#444bcb] w-5 h-5" />}
        </button>
      </li> */}
    </>
  );

  return (
    <div className="bg-[#fff] text shadow ">
      <div className="px-4 sm:py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                Menu
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-auto z-50"
              >
                {menuItem}
              </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl"></a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-sm z-50">
              {menuItem}
            </ul>
          </div>
          <div className="navbar-end"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
