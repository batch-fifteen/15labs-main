import React from "react";

interface TeamsCardsProps {
  nickname: string;
  photo: string;
  role: string;
  alt: string;
}

export default function TeamsCards({
  nickname,
  photo,
  role,
  alt,
}: TeamsCardsProps): React.ReactElement {
  return (
    <div className="w-60 h-96 rounded overflow-hidden shadow-lg px-2">
      <div className="bg-blue-gray-400 h-72">
        <img src={photo} alt={alt} className="w-full h-full object-cover" />
      </div>
      <div className="px-5 py-4">
        <h2 className="font-medium text-lg mb-3">{nickname}</h2>
        <h3 className="font-normal text-sm">{role}</h3>
      </div>
    </div>
  );
}
