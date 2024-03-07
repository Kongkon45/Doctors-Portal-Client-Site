import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-black text-xl ml-10 font-bold">
            Logo
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-5">
              <NavLink to="/" className="text-xl text-bold " style={{background : "none", color:"black", fontWeight: "bold"}}>Home</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/about" className="text-xl text-bold" style={{background : "none", color:"black", fontWeight: "bold"}}>About</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/dental_services" className="text-xl text-bold" style={{background : "none", color:"black", fontWeight: "bold"}}>Dental Services</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/review" className="text-white text-xl font-bold" style={{background : "none"}}>
                Reviews
              </NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/blog" className="text-white text-xl font-bold" style={{background : "none"}}>
                Blog
              </NavLink>
            </li>
            <li className="mr-10">
              <NavLink to="/contact_us" className="text-white text-xl font-bold" style={{background : "none"}}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
