import React from 'react';

const ErrorList = ({ errors }) => {
  if (errors.length === 0) {
    return null;
  }

  return (
    <ul>
      {errors.map(error => <li key={error}>{error}</li>)}
    </ul>
  );
};

export default ErrorList;
