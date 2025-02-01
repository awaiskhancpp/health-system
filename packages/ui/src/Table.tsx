import React from "react";

interface TableProps {
  columns: string[];
  data: any[];
}

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          {columns.map((col) => (
            <th key={col} className="border p-2">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border">
            {columns.map((col) => (
              <td key={col} className="border p-2">{row[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
