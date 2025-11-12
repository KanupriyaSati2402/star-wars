import React, { useState } from "react";
import CharacterModal from "./CharacterModal";

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
  homeworld: string;
  species: string[];
}

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative bg-white border-2 border-transparent hover:border-blue-400 rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 w-56"
        onClick={() => setOpen(true)}
      >
        {/* Smaller Character Image */}
        <img
          src={`https://picsum.photos/200/160?random=${character.name}`}
          alt={character.name}
          className="w-full h-40 object-cover"
        />

        {/* Character Name */}
        <div className="p-3 text-center bg-white">
          <h2 className="text-gray-800 font-semibold text-base">{character.name}</h2>
        </div>
      </div>

      {open && <CharacterModal character={character} onClose={() => setOpen(false)} />}
    </>
  );
};

export default CharacterCard;
