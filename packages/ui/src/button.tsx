import React from "react"

// Define the ButtonProps type annotations
type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
};

export function Button({ children, onClick, variant = "primary" }: ButtonProps):React.ReactNode {
  // Define base styles and variant styles
  const baseStyles = "px-4 py-2 font-semibold rounded-lg transition-all";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}