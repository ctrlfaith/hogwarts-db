"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

const ListUser = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('http://localhost/termproject/api/actor/');
      const data = await response.json();
      setCharacters(data);
    };

    fetchCharacters();
  }, []);

  return (
    <table className="min-w-full border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 p-2 text-left">ID</th>
          <th className="border border-gray-300 p-2 text-left">Character Name</th>
          <th className="border border-gray-300 p-2 text-left">Actor Name</th>
          <th className="border border-gray-300 p-2 text-left">House</th>
          <th className="border border-gray-300 p-2 text-left">Role Type</th>
          <th className="border border-gray-300 p-2 text-left">First Appearance</th>
          <th className="border border-gray-300 p-2 text-left">Final Appearance</th>
          <th className="border border-gray-300 p-2 text-left">Wand Type</th>
          <th className="border border-gray-300 p-2 text-left">Blood Status</th>
          <th className="border border-gray-300 p-2 text-left">Occupation</th>
          <th className="border border-gray-300 p-2 text-left">Species</th>
          <th className="border border-gray-300 p-2 text-left">Pet</th>
          <th className="border border-gray-300 p-2 text-left">Skills</th>
          <th className="border border-gray-300 p-2 text-left">Birth Date</th>
          <th className="border border-gray-300 p-2 text-left">Parents</th>
          <th className="border border-gray-300 p-2 text-left">Gender</th>
          <th className="border border-gray-300 p-2 text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr key={character.ID} className="hover:bg-gray-100">
            <td className="border border-gray-300 p-2">{character.ID}</td>
            <td className="border border-gray-300 p-2">{character.CharacterName}</td>
            <td className="border border-gray-300 p-2">{character.ActorName}</td>
            <td className="border border-gray-300 p-2">{character.House}</td>
            <td className="border border-gray-300 p-2">{character.RoleType}</td>
            <td className="border border-gray-300 p-2">{character.FirstAppearance}</td>
            <td className="border border-gray-300 p-2">{character.FinalAppearance}</td>
            <td className="border border-gray-300 p-2">{character.WandType}</td>
            <td className="border border-gray-300 p-2">{character.BloodStatus}</td>
            <td className="border border-gray-300 p-2">{character.Occupation}</td>
            <td className="border border-gray-300 p-2">{character.Species}</td>
            <td className="border border-gray-300 p-2">{character.Pet}</td>
            <td className="border border-gray-300 p-2">{character.Skills}</td>
            <td className="border border-gray-300 p-2">{character.BirthDate}</td>
            <td className="border border-gray-300 p-2">{character.Parents}</td>
            <td className="border border-gray-300 p-2">{character.Gender}</td>
            <td className="border border-gray-300 p-2">
              <Link href={`/actor/view/${character.ID}`}>
                <button className="bg-green-500 text-white py-1 px-2 rounded mr-2">View</button>
              </Link>
              <Link href={`/actor/edit/${character.ID}`}>
                <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2">Edit</button>
              </Link>
              <Link href={`/actor/delete/${character.ID}`}>
                <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListUser;
