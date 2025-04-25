"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const DeleteConfirmation = ({ params }) => {
  const router = useRouter();
  const [character, setCharacter] = useState(null);
  const { id } = params;

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`http://localhost/termproject/api/actor/${id}`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  const handleDelete = async () => {
    const response = await fetch(`http://localhost/termproject/api/actor/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Character deleted successfully');
      router.push('/');
    } else {
      alert('Failed to delete character');
    }
  };

  if (!character) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Delete Character</h1>
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-800 mb-4">Are you sure you want to delete <strong>{character.CharacterName}</strong>?</p>
        <div className="flex justify-between mt-4">
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={() => router.back()}>
            Back
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
