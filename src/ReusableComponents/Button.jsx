import React from 'react';

const Button = ({ type, label, className, icon, onClick }) => {
  return (
    <button
      type={type || 'button'}
      className={`btn ${className}`}
      onClick={onClick}
    >
      {icon && <i className={`fas fa-${icon}`} />} {label}
    </button>
  );
};

export default Button;