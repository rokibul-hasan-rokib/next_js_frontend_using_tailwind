'use client'
import React from 'react';

const ErrorPage = ({ error, reset }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Something went wrong!</h1>
      <p>{error?.message || 'An unexpected error occurred.'}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default ErrorPage;
