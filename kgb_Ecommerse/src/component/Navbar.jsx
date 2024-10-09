import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#fae9e6] flex justify-between items-center px-5 py-3 shadow-md relative text-[#fa7fab] font-semibold">
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
        className={`fixed md:relative top-16 md:top-0 right-0 bg-[#fae9e6] transition-transform duration-300 ease-in-out transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } md:translate-x-0 z-50`}
      >
        <ul className="flex flex-col md:flex-row gap-5 justify-center items-center p-8 md:p-0">
          <li>
            <Link
              to="/products"
              className={`hover:underline hover:text-[#e67e22] transition-colors duration-200 ${pathname === "/products" && 'text-[#ff006c]'}`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blog?page=1"
              className={`hover:underline hover:text-[#e67e22] transition-colors duration-200 ${pathname === "/blog" && 'text-[#ff006c]'}`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className={`hover:text-[#e67e22] transition-colors duration-200 ${pathname === "/cart" && 'text-[#ff006c]'}`}
              onClick={() => setIsOpen(false)}
            >
              <FaCartPlus size={24} />
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className={`hover:text-[#e67e22] transition-colors duration-200 ${pathname === "/profile" && 'text-[#ff006c]'}`}
              onClick={() => setIsOpen(false)}
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
