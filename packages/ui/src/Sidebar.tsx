// packages/ui/src/components/Sidebar.tsx
import React from 'react';

interface SidebarProps {
  title: string;
  items: string[];
  onItemClick: (item: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ title, items, onItemClick }) => {
  return (
    <div className="w-1/5 bg-gray-100 p-4 border-r-2 border-gray-300">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="cursor-pointer hover:text-blue-500"
            onClick={() => onItemClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};