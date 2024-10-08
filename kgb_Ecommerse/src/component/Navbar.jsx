import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#fae9e6] flex justify-between items-center px-5 py-3 shadow-md">
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="KGB"
          className="hover:scale-105 transition-transform duration-200 w-12 h-12"
        />
      </Link>
      <div className="block md:hidden ml-3 cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      <nav
        className={`absolute md:static w-full md:w-auto bg-[#fae9e6] transition-all duration-300 ease-in-out ${
          isOpen ? "top-14" : "top-[-300px]"
        } md:top-0 md:block md:flex md:items-center md:p-0`}
      >
        <ul className="flex flex-col md:flex-row gap-3 justify-center items-center p-4 md:p-0">
          <li>
            <Link
              to="/products"
              className="hover:underline hover:text-[#e67e22] transition-colors duration-200"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blog?page=1"
              className="hover:underline hover:text-[#e67e22] transition-colors duration-200"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-[#e67e22] transition-colors duration-200"
            >
              <FaCartPlus size={24} />
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:text-[#e67e22] transition-colors duration-200"
            >
              <CgProfile size={24} />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
