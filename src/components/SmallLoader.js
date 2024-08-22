import React from 'react';

const SmallLoader = () => {
  return (
    <div className="text-center my-3">
      <div className="spinner-border" role="status" style={{ width: '1.5rem', height: '1.5rem' }}>
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    </div>
  );
};

export default SmallLoader;
