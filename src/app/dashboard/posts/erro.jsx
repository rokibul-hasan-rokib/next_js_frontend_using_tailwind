// app/dashboard/posts/error.jsx
import React from 'react';

const ProductsError = ({ error, reset }) => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Product Error</h1>
      <p>{error?.message || 'An unexpected error occurred while loading posts.'}</p>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
};

export default ProductsError;
 