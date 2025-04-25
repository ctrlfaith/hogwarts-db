"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const EditCharacter = ({ params }) => {
  const router = useRouter();
  const [character, setCharacter] = useState({
    CharacterName: '',
    ActorName: '',
    House: '',
    RoleType: '',
    FirstAppearance: '',
    FinalAppearance: '',
    WandType: '',
    BloodStatus: '',
    Occupation: '',
    Species: '',
    Pet: '',
    Skills: '',
    BirthDate: '',
    Parents: '',
    Gender: '',
  });


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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCharacter((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost/termproject/api/actor/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });

    if (response.ok) {
      router.push('/');
    } else {
      alert('Failed to update character');
    }
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">Edit Character</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        {Object.keys(character).map((key) => {
          if (key === "ID") return null;
          return (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {key.replace(/([A-Z])/g, ' $1')}:
              </label>
              <input
                type="text"
                name={key}
                value={character[key]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
          );
        })}
        <div className="flex justify-between mt-4">
          <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded" onClick={() => router.back()}>
            Back
          </button>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Update Character
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditCharacter;
