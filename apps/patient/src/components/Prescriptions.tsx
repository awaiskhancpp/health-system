import React from "react";

interface PrescriptionsProps {
  medicines: string[]; // List of prescribed medicines
}

export const Prescriptions: React.FC<PrescriptionsProps> = ({ medicines }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Prescriptions</h2>
      {medicines.length > 0 ? (
        <ul className="list-disc pl-5">
          {medicines.map((medicine, index) => (
            <li key={index} className="text-gray-700">
              {medicine}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No medicines prescribed yet.</p>
      )}
    </div>
  );
};
