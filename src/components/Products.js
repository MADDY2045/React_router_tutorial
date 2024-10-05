import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

/**
 * Nested routes in react-router-dom v6 allow you to create routes within routes, which is super handy for
 * structuring your application's layout hierarchically.
 */

const Products = () => {
  return (
    <div>
      <div>
        <input type="text" placeholder="search products" />
      </div>
      <div className="products">
        {/**
         * Note the path to url does not contain forward slash
         * as it will be automatically appended from it's
         * immediate parent route
         * in our case, it's products
         */}
        <NavLink to={'featured'}>Featured</NavLink>
        <NavLink to={'new'}>New</NavLink>
      </div>
      {/* this Outlet component is necessary to render the matching child  */}
      <Outlet />
    </div>
  );
};

export default Products;
