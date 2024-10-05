import React, { Suspense } from 'react';
import Home from './components/Home';
//import About from './components/About';
import OrderSummary from './components/OrderSummary';
import FeaturedProduct from './components/FeaturedProduct';
import NewProduct from './components/NewProduct';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch';
import Navbar from './Layout/Navbar';
import './App.css';
import Users from './components/Users';
import User from './components/User';
import Admin from './components/Admin';
import ProtectedRoute from './Layout/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Login from './Layout/Login';
/**
 *  placing of this important statement is important
 *  otherwise component will err out importing modules
 */
const About = React.lazy(() => import('./components/About'));

/**
 * difference between absolute path and relative path in react-router-dom
 * Absolute Path
 * -------------
 * An absolute path specifies a full URL from the root, regardless of the current location.
 * It’s like giving precise GPS coordinates. No matter where you are in the app, it always points to the same location.
 *
 * Relative Path
 * -------------
 * A relative path is defined based on the current route, similar to giving directions based on your current location.
 * It changes depending on where you are in the app, making it more flexible for nested routes.
 */

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        {/* Note the path wouldn't be having slash*/}
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          {/* to make featured product as default view nested page in products*/}
          <Route index element={<FeaturedProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<User />} />
        {/**
         * Note: Please note that eventhough we have a route to get /:userId above,
         * React will first look for an exact matching url like below "/admin"
         * and renders the same
         */}
        <Route path="users/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
};

export default App;
