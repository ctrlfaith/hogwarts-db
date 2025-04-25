"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateCharacter = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost/termproject/api/actor/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push('/');
    } else {
      console.error('Failed to add character');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Add New Character</h1>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key} className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {key.replace(/([A-Z])/g, ' $1')}:
              </label>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                required
              />
            </div>
          ))}
          <div className="flex justify-between mt-6">
            <button type="button" className="bg-gray-500 text-white py-2 px-4 rounded" onClick={() => router.back()}>
              Back
            </button>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New Character
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCharacter;
