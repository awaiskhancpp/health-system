import React from "react";

interface MedicalHistoryProps {
  history: string[]; // List of diagnosed diseases
  recommendations: string; // Doctor's recommendations
}

export const MedicalHistory: React.FC<MedicalHistoryProps> = ({
  history,
  recommendations,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-2">Medical History</h2>
      {history.length > 0 ? (
        <ul className="list-disc pl-5">
          {history.map((disease, index) => (
            <li key={index} className="text-gray-700">
              {disease}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No medical history available.</p>
      )}
      {recommendations && (
        <div className="mt-4">
          <h3 className="font-semibold">Doctor's Recommendations:</h3>
          <p className="text-gray-600">{recommendations}</p>
        </div>
      )}
    </div>
  );
};
