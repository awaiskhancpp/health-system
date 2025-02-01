import React from "react";
import { useRouter } from "next/router";

const links = [
  { label: "Dashboard", path: "/" },
  { label: "Appointments", path: "/appointments" },
  { label: "Profile", path: "/profile" },
];

export const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Menu</h2>
      <ul>
        {links.map((link) => (
          <li key={link.path} className="mb-2">
            <button className="w-full text-left p-2 hover:bg-gray-700" onClick={() => router.push(link.path)}>
              {link.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};
