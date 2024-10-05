import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  /**
   * useNavigate is a hook in react-router-dom that lets you programmatically navigate through your application.
   * The replace option is one of its features, useful in scenarios where you want to replace the current entry
   * in the history stack instead of adding a new one.
   * This is particularly handy in a few situations:
   * -----------------------------------------------
   * Form Submissions: After a successful form submission, you might not want users to return to the form by pressing
   * the back button. Using replace ensures that the form page is replaced in history.
   * Redirection After Login: If a user logs in successfully, you might redirect them to a different page using replace
   * to prevent them from navigating back to the login page.
   * 404 Pages: If you redirect users from a 404 page to a valid route, using replace helps keep the navigation smooth
   * and intuitive, avoiding stacking the error page in history.
   */

  const navigate = useNavigate();
  return (
    <div>
      <div>Home</div>
      <div>
        <button onClick={() => navigate('order-summary', { replace: false })}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Home;
