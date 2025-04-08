import React from "react";
import { FaHome, FaTools } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineContactPhone } from "react-icons/md";

function Navbar() {
  const handleCheck = (value) => {
    if (value === "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const links = [
    { icon: <FaHome size={20} />, name: "Home" },
    { icon: <FaTools size={20} />, name: "Skills", path: "#skill" },
    { icon: <SiBookstack size={20} />, name: "Education", path: "#education" },
    { icon: <BiCodeAlt size={20} />, name: "Work", path: "#project" },
    { icon: <CgProfile size={20} />, name: "About", path: "#about" },
    {
      icon: <MdOutlineContactPhone size={20} />,
      name: "Contact",
      path: "#contact",
    },
  ];
  return (
    <div className="lg:px-32 sticky top-0 z-50  backdrop-blur-sm  bg-primary/10">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown ">
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
              className={`menu uppercase menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-48 bg-black-gradient`}
            >
              {links.map((link, index) => {
                return (
                  <a
                    href={link.path}
                    alt="nav-links"
                    key={index}
                    onClick={() => {
                      handleCheck(link.name);
                    }}
                  >
                    <p className="font-poppins hover:text-secondary hover:cursor-pointer py-2 flex flex-row gap-3 items-center group">
                      <span className="text-secondary">{link.icon}</span>
                      <span className="transition ease-in-out delay-150 duration-150 group-hover:translate-x-3">{link.name}</span>
                    </p>
                  </a>
                );
              })}
            </ul>
          </div>
          <span className="font-poppins text-3xl flex gap-1">
            <p className="text-secondary">Ansh</p>{" "}
            <p className="text-white">Kumar</p>
          </span>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-2 uppercase font-poppins">
            {links.map((link, index) => {
              return (
                <a
                  href={link.path}
                  alt="nav-links"
                  key={index}
                  onClick={() => {
                    handleCheck(link.name);
                  }}
                >
                  <li
                    className={`pl-4 hover:cursor-pointer hover:text-secondary`}
                  >
                    {link.name}
                  </li>
                </a>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
