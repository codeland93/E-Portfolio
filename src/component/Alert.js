import React from 'react';

const Alert = ({ children, className = '' }) => {
  return (
    <div className={`alert ${className}`}>
      <div className="alert-content">
        {children}
      </div>
    </div>
  );
};

export default Alert;
