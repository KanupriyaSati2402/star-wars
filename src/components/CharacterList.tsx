import React, { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import CharacterCard from "./CharacterCard";

interface Props {
  searchTerm: string;
  selectedFilm: string;
  selectedSpecies: string;
}

const CharacterList: React.FC<Props> = ({ searchTerm, selectedFilm, selectedSpecies }) => {
  const { characters, loading, error, page, setPage, hasNext } = useCharacters();
  const [filtered, setFiltered] = useState(characters);

  useEffect(() => {
    let filteredData = characters;

    if (searchTerm) {
      filteredData = filteredData.filter((c) =>
        c.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedSpecies) {
      filteredData = filteredData.filter((c) =>
        c.species.some((s) => s.toLowerCase().includes(selectedSpecies.toLowerCase()))
      );
    }

    // Film filter can be implemented later
    setFiltered(filteredData);
  }, [characters, searchTerm, selectedFilm, selectedSpecies]);

  if (loading)
    return <p className="text-center text-gray-500 text-lg mt-10">Loading characters...</p>;

  if (error)
    return <p className="text-center text-red-500 text-lg mt-10">{error}</p>;

  if (!filtered.length)
    return <p className="text-center text-gray-600 text-lg mt-10">No characters found.</p>;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Character Grid */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center w-full px-4 py-8">
        {filtered.map((c) => (
          <CharacterCard key={c.url} character={c} />
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center items-center gap-6 mt-4 mb-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className={`px-5 py-2 rounded-lg font-medium text-white transition-all duration-200 ${
            page === 1
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          Prev
        </button>

        <span className="text-gray-600 font-medium">Page {page}</span>

        <button
          disabled={!hasNext}
          onClick={() => setPage(page + 1)}
          className={`px-5 py-2 rounded-lg font-medium text-white transition-all duration-200 ${
            !hasNext
              ? "bg-indigo-300 cursor-not-allowed"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
