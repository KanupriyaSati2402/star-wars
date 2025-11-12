export const fetchPeople = async (page: number) => {
  const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
  if (!response.ok) throw new Error("Failed to fetch people");
  return response.json();
};
