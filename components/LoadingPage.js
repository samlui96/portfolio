import React, { useState, useEffect } from 'react';

const LoadingPage = ( { content}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div className="loader-container">
           <div className="loader"></div>
        </div>
      ) : (
        content
      )}
    </div>
  );
};

export default LoadingPage;
