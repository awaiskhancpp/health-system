// packages/ui/src/Input.tsx
import React from "react";

type InputProps = {
  type: "text" | "email" | "password";
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function Input({ type, placeholder, value, onChange }: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
    />
  );
}