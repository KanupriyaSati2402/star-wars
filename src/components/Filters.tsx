import React from "react";

interface FiltersProps {
  selectedFilm: string;
  setSelectedFilm: (value: string) => void;
  selectedSpecies: string;
  setSelectedSpecies: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  selectedFilm,
  setSelectedFilm,
  selectedSpecies,
  setSelectedSpecies,
}) => (
  <div className="flex flex-wrap gap-4 mb-4 mt-2 justify-end">
    {/* Film Filter */}
    <select
      value={selectedFilm}
      onChange={(e) => setSelectedFilm(e.target.value)}
      className="border rounded p-2 "
    >
      <option value="">All Films</option>
      <option value="1">Film 1</option>
      <option value="2">Film 2</option>
      <option value="3">Film 3</option>
        <option value="1">Film 4</option>
      <option value="2">Film 5</option>
      <option value="3">Film 6</option>
    </select>

    {/* Species Filter */}
    <select
      value={selectedSpecies}
      onChange={(e) => setSelectedSpecies(e.target.value)}
      className="border rounded p-2"
    >
      <option value="">All Species</option>
      <option value="human">Human</option>
      <option value="droid">Droid</option>
    </select>
  </div>
);

export default Filters;
