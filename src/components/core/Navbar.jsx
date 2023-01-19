// import Link from "next/link";

import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";

const NavItems = (
  <>
    <Link to={`/`}>
      <button className="btn btn-ghost">Home</button>
    </Link>
    <Link to={`/allproducts`}>
      <button className="btn btn-ghost">All Products</button>
    </Link>
    <Link to={`/addproduct`}>
      <button className="btn btn-ghost">Add product</button>
    </Link>
  </>
);

const Navbar = () => {
  const { token } = useToken();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch(`http://localhost:8000/auth/token/logout/`, {
        method: "POST",
      });
      const data = await response.json();
      if (data.detail === "Authentication credentials were not provided.") {
        localStorage.removeItem("auth_token");
        toast.success("Logout Successful");
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavItems}
            </ul>
          </div>
          <Link to={`/`} className="btn btn-ghost normal-case text-xl">
            Sasol Products
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
        <div className="navbar-end">
          {token ? (
            <Link onClick={handleLogout} to="/register" className="btn">
              Logout
            </Link>
          ) : (
            <Link to="/login" className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
