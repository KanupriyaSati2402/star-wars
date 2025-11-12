import React, { useState } from "react";
import { useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import CharacterList from "./components/CharacterList";

function App() {
  const { isAuthenticated, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilm, setSelectedFilm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");

  if (!isAuthenticated) return <LoginForm />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">Star Wars Characters</h1>
        <button
          onClick={logout}
          className="text-red-500 font-medium hover:underline"
        >
          Logout
        </button>
      </header>

      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Filters
        selectedFilm={selectedFilm}
        setSelectedFilm={setSelectedFilm}
        selectedSpecies={selectedSpecies}
        setSelectedSpecies={setSelectedSpecies}
      />
      <CharacterList
        searchTerm={searchTerm}
        selectedFilm={selectedFilm}
        selectedSpecies={selectedSpecies}
      />
    </div>
  );
}

export default App;
