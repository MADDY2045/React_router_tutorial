import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const User = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <strong>Hello, User {userId}</strong>
      <div>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default User;
