import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 gap-2 bg-[#fae9e6] px-12 shadow-md max-sm:px-4 max-sm:py-1 max-sm:justify-normal ">
      <div className="max-sm:flex-1">
        <Link to="/">
          <img
            src={logo}
            alt="KGB"
            className="w-28 hover:scale-105 max-sm:w-20"
          />
        </Link>
      </div>

      <div>
        <ul className="flex gap-3">
          <Link to="/products">Products</Link>
          <Link to="/blog?page=1">Blog</Link>
          <Link to="/cart">{`Cart`}</Link>
        </ul>
      </div>
      <div className="hidden max-sm:block">
      
      </div>
    </div>
  );
};

export default Navbar;
