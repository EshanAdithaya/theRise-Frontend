import React from 'react';

export const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4">
      {children}
    </div>
  );
};

export const CardHeader = ({ children }) => {
  return (
    <h3 className="text-lg font-bold mb-2">{children}</h3>
  );
};

export const CardContent = ({ children }) => {
  return (
    <div>{children}</div>
  );
};