import React from "react";

async function getData() {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = res.json();
    const { results } = await data;
    return results;
  } catch {
    throw new Error("Failed to fetch data a catch block");
  }
}
async function List() {
  const persons = await getData();
  return (
    <>
      <div>Lists of person</div>;
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
