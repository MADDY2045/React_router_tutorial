import React from 'react';
//import { Link } from 'react-router-dom';//can't use styling props
import { NavLink } from 'react-router-dom'; //styling props can be used

const Navbar = () => {
  /**
   *
   * @param {boolean} isActive
   * @returns styles
   */

  const navStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'none' : 'underline',
      fontWeight: isActive ? 'bold' : 'inherit',
    };
  };

  /**
   * In react-router-dom, both Link and NavLink are components used for navigation, but they serve slightly different purposes:
   * Link
   * -----
   * Link is a simple component used to create links to different routes in your application.
   * It's very straightforward and doesn't have any built-in styling or active link features.
   *
   * NavLink
   * -------
   * NavLink, on the other hand, extends Link and is used specifically for navigation bars.
   * It allows you to apply styles to the active link (the link that matches the current URL).
   * With NavLink, you can specify activeClassName or activeStyle props to style the active link differently.
   *
   * In essence, use Link for regular links and NavLink when you need to indicate the active route in a navigation menu
   */

  return (
    <div className="navbar-main">
      {/* <Link style={navStyles} to={'/'}>
        Home
      </Link>
      <Link style={navStyles} to={'/about'}>
        About
      </Link> */}
      {/* use navlink to have more options to style*/}
      <NavLink style={navStyles} to={'/'}>
        Home
      </NavLink>
      <NavLink style={navStyles} to={'/about'}>
        About
      </NavLink>
      <NavLink style={navStyles} to={'/products'}>
        Products
      </NavLink>
      <NavLink style={navStyles} to={'/users'}>
        Users
      </NavLink>
      <NavLink style={navStyles} to={'/dashboard'}>
        Dashboard
      </NavLink>
    </div>
  );
};

export default Navbar;
