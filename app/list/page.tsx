import React from "react";
import { Person } from "../lib/definitions";
import Image from "next/image";

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
      <h2 className="text-2xl text-center text-red-700 text-bold">
        Lists of person
      </h2>

      <div className="flex justify-center items-center">
        {persons.map((person: Person) => (
          <div className="w-1/4" key={person.id}>
            <Image
              src={person.image}
              alt={person.name}
              width={300}
              height={300}
            />

            <div>{person.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
