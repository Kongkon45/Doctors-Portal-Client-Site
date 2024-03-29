import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#3a4256] opacity-95 sticky top-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-white text-xl ml-10 font-bold">
            Doctor
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mr-5">
              <NavLink to="/" className="text-[16px]" style={{background : "none", color:"white"}}>Home</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/about" className="text-[16px]" style={{background : "none", color:"white"}}>About</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/dashboard" className="text-[16px]" style={{background : "none", color:"white"}}>Dashboard</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/dental_services" className="text-[16px]" style={{background : "none", color:"white"}}>Dental Services</NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/review" className="text-white text-[16px]" style={{background : "none"}}>
                Reviews
              </NavLink>
            </li>
            <li className="mr-5">
              <NavLink to="/blog" className="text-white text-[16px]" style={{background : "none"}}>
                Blog
              </NavLink>
            </li>
            <li className="mr-10">
              <NavLink to="/contact_us" className="text-white text-[16px]" style={{background : "none"}}>
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
