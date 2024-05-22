"use client";

import { useEffect, useState } from "react";
import { Person } from "../lib/definitions";
import Image from "next/image";

function List() {
  // const persons = await getData();
  async function getData() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const { results } = data;
      return results;
    } catch {
      throw new Error("Failed to fetch data a catch block");
    }
  }
  const [persons, setPersons] = useState<Person[]>([]);
  const [searchPerson, setSearchPerson] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      const personArr = await getData();
      setPersons(personArr);
    };
    fetchData();
  }, []);

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchPerson.toLowerCase())
  );

  return (
    <>
      <h2 className="text-2xl text-center text-red-700 text-bold">
        Lists of person
      </h2>
      <div>
        <input
          type="text"
          value={searchPerson}
          placeholder="Search person"
          onChange={(e) => setSearchPerson(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center flex-wrap">
        {filteredPersons.map((person: Person) => (
          <div className="m-4" key={person.id}>
            <Image
              src={person.image}
              alt={person.name}
              width={300}
              height={300}
            />

            <div className="text-center mt-2">{person.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default List;
