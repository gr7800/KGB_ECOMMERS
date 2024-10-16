import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes } from "react-icons/fa";
import { optionOfCurrencyExchange } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { fetchExchangeRate, selectCurrency } from "../redux/slices/currencySlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { token } = useSelector((state) => state.auth);
  const {items} = useSelector(state=>state.cart);
  const { currentCurrency } = useSelector((state) => state.currency);

  const dispatch = useDispatch();


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchExchangeRate(currentCurrency))
  }, [dispatch, currentCurrency])

  return (
    <div className="w-full bg-[#fae9e6] flex justify-between items-center px-10 py-3 shadow-md fixed top-0 z-20 text-[#fa7fab] font-semibold">
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
        className={`fixed md:relative top-16 md:top-0 right-0 bg-[#fae9e6] transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 z-50`}
      >
        <ul className="flex flex-col md:flex-row gap-5 justify-center items-center md:p-0">
          <li>
            <select
              name="currency"
              className="bg-transparent text-[#fa7fab] outline-none cursor-pointer  py-1 pl-4 rounded-md hover:bg-[#fa7fab] hover:text-[#fae9e6] transition-colors duration-200"
              onChange={(e) => dispatch(selectCurrency(e.target.value))}
              value={currentCurrency}
            >
              {optionOfCurrencyExchange.map((item, index) => (
                <option
                  key={index}
                  value={item.value}
                  className="bg-[#fae9e6] text-[#fa7fab]"
                >
                  {item.name} {item.symbol}
                </option>
              ))}
            </select>
          </li>
          <li>
            <Link
              to="/products?page=1"
              className={`hover:underline hover:text-rose-900 transition-colors duration-200 ${
                pathname === "/products" && "text-[#ff006c]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/blog?page=1"
              className={`hover:underline hover:text-rose-900 transition-colors duration-200 ${
                pathname === "/blog" && "text-[#ff006c]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/cart"
              className={`hover:text-rose-900 transition-colors duration-200 ${
                pathname === "/cart" && "text-[#ff006c]"
              }`}
              onClick={() => setIsOpen(false)}
            >
              <FaCartPlus size={24} />
              <span className={`absolute -top-2 -right-2 hover:bg-rose-900 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center ${pathname === "/cart"? "bg-[#ff006c]":"bg-[#fa7fab]"}`}>
                {items.length || 0}
              </span>
            </Link>
          </li>
          {token ? (
            <li>
              <Link
                to="/profile"
                className={`hover:text-rose-900 transition-colors duration-200 ${
                  pathname === "/profile" && "text-[#ff006c]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <CgProfile size={24} />
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/cart"
                className={`hover:text-rose-900 transition-colors duration-200 ${
                  pathname === "/login" && "text-[#ff006c]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
