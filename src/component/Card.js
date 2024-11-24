import React from 'react';

const Card = ({ children, className = '', onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className={`bg-black border-green-400 hover:border-green-300 transition-colors ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Card;
