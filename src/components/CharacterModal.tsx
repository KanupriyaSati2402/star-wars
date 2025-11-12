import React, { useEffect, useState } from "react";

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
  homeworld: string;
}

const CharacterModal: React.FC<{ character: Character; onClose: () => void }> = ({
  character,
  onClose,
}) => {
  const [homeworld, setHomeworld] = useState<any>(null);

  useEffect(() => {
    fetch(character.homeworld)
      .then(res => res.json())
      .then(data => setHomeworld(data))
      .catch(() => setHomeworld(null));
  }, [character.homeworld]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button className="absolute top-3 right-3 text-gray-500" onClick={onClose}>✕</button>
        <h2 className="text-2xl font-bold mb-4">{character.name}</h2>

        <p><strong>Height:</strong> {Number(character.height) / 100} m</p>
        <p><strong>Mass:</strong> {character.mass} kg</p>
        <p><strong>Birth Year:</strong> {character.birth_year}</p>
        <p><strong>Films:</strong> {character.films.length}</p>
        {homeworld && (
          <>
            <h3 className="mt-4 font-semibold">Homeworld</h3>
            <p><strong>Name:</strong> {homeworld.name}</p>
            <p><strong>Terrain:</strong> {homeworld.terrain}</p>
            <p><strong>Climate:</strong> {homeworld.climate}</p>
            <p><strong>Population:</strong> {homeworld.population}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterModal;
