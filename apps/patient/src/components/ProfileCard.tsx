import React, { useState, useEffect } from "react";

interface ProfileCardProps {
  name: string;
  phone: string;
  email: string;
  cnic: string;
  relation: string; // Son of, Daughter of, etc.
  profileImage?: string; // Optional profile image
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  phone,
  email,
  cnic,
  relation,
  profileImage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full max-w-lg p-4 bg-white rounded-lg shadow-lg transition-all">
      {/* Profile Image */}
      <div
        className={`w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-3xl font-bold text-white ${
          isScrolled
            ? "fixed top-4 right-4 w-12 h-12 text-sm transition-all"
            : ""
        }`}
        style={{
          backgroundColor: profileImage ? "transparent" : "#4A90E2",
          backgroundImage: profileImage ? `url(${profileImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {!profileImage && name.charAt(0)}
      </div>

      {/* Profile Details */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-600"><a>📞 {phone}</a></p>
        <p className="text-gray-600">✉️ {email}</p>
        <p className="text-gray-600">🆔 CNIC: {cnic}</p>
        <p className="text-gray-600">👨‍👩‍👦 {relation}</p>
      </div>
    </div>
  );
};
