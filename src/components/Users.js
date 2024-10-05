import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const userArray = [
  { label: 'USER ONE', id: 1 },
  { label: 'USER TWO', id: 2 },
  { label: 'USER THREE', id: 3 },
];

/**
 * useSearchParams is a hook provided by react-router-dom to manipulate the query parameters in the URL. 
 * It works similarly to useState, giving you access to the current search parameters and a function to update them. 
 * Here's a quick breakdown:
 * const [searchParams, setSearchParams] = useSearchParams();
 * Key Features
 * -------------
 * Reading Parameters: searchParams.get('key') gets the value of the specified query parameter.
 * Setting Parameters: setSearchParams({ key: 'value' }) updates the query parameter in the URL. 
 * You can also pass a URLSearchParams instance for more complex scenarios.
 * Keeping Previous Parameters: To keep the existing query parameters, merge them with the new ones:
 * setSearchParams(prev => ({ ...prev, newKey: 'newValue' }));

*/
const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams?.get('filter') || '';
  const showActiveUsers = filter === 'active';
  return (
    <div>
      <h1>
        <u>USERS</u>
      </h1>
      <div>
        {userArray?.map((eachUser) => {
          return (
            <div key={eachUser?.id}>
              <Link to={`/users/${eachUser?.id}`}>User {eachUser?.label}</Link>
            </div>
          );
        })}
        <div>
          <button onClick={() => setSearchParams({ filter: 'active' })}>
            Active Users
          </button>
          <button onClick={() => setSearchParams({})}>Reset Filters</button>
        </div>
      </div>
      <div>
        {showActiveUsers ? (
          <h1>Showing Active Users</h1>
        ) : (
          <h1>Showing All Users</h1>
        )}
      </div>
    </div>
  );
};

export default Users;
