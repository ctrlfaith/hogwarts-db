"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ViewCharacter = ({ params }) => {
  const router = useRouter();
  const [character, setCharacter] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchCharacter = async () => {
      if (id) {
        const response = await fetch(`http://localhost/termproject/api/actor/${id}`);
        const data = await response.json();
        setCharacter(data);
      }
    };

    fetchCharacter();
  }, [id]);

  if (!character) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Character Details</h1>
        <div className="space-y-4">
          <p className="text-lg"><strong>Character Name:</strong> <span className="font-medium">{character.CharacterName}</span></p>
          <p className="text-lg"><strong>Actor Name:</strong> <span className="font-medium">{character.ActorName}</span></p>
          <p className="text-lg"><strong>House:</strong> <span className="font-medium">{character.House}</span></p>
          <p className="text-lg"><strong>Role Type:</strong> <span className="font-medium">{character.RoleType}</span></p>
          <p className="text-lg"><strong>First Appearance:</strong> <span className="font-medium">{character.FirstAppearance}</span></p>
          <p className="text-lg"><strong>Final Appearance:</strong> <span className="font-medium">{character.FinalAppearance}</span></p>
          <p className="text-lg"><strong>Wand Type:</strong> <span className="font-medium">{character.WandType}</span></p>
          <p className="text-lg"><strong>Blood Status:</strong> <span className="font-medium">{character.BloodStatus}</span></p>
          <p className="text-lg"><strong>Occupation:</strong> <span className="font-medium">{character.Occupation}</span></p>
          <p className="text-lg"><strong>Species:</strong> <span className="font-medium">{character.Species}</span></p>
          <p className="text-lg"><strong>Pet:</strong> <span className="font-medium">{character.Pet}</span></p>
          <p className="text-lg"><strong>Skills:</strong> <span className="font-medium">{character.Skills}</span></p>
          <p className="text-lg"><strong>Birth Date:</strong> <span className="font-medium">{character.BirthDate}</span></p>
          <p className="text-lg"><strong>Parents:</strong> <span className="font-medium">{character.Parents}</span></p>
          <p className="text-lg"><strong>Gender:</strong> <span className="font-medium">{character.Gender}</span></p>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={() => router.back()}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewCharacter;
