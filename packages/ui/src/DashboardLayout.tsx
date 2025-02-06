// packages/ui/src/layouts/DashboardLayout.tsx
import React from 'react';
import { Sidebar } from './Sidebar';

interface DashboardLayoutProps {
  sidebarTitle: string;
  sidebarItems: string[];
  onSidebarItemClick: (item: string) => void;
  children: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  sidebarTitle,
  sidebarItems,
  onSidebarItemClick,
  children,
}) => {
  return (
    <div className="flex h-screen">
      <Sidebar title={sidebarTitle} items={sidebarItems} onItemClick={onSidebarItemClick} />
      <div className="w-1 bg-gray-300"></div>
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
};