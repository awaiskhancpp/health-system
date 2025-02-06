// packages/ui/src/components/Button.tsx
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const InfoButton: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};