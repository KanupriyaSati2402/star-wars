import { useEffect, useState } from "react";

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  films: string[];
  homeworld: string;
  species: string[];
  url: string;
}

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        setCharacters(data.results);
        setHasNext(!!data.next);
      } catch (err) {
        setError("Failed to load characters. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [page]);

  return { characters, loading, error, page, setPage, hasNext };
};
