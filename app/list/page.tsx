"use client";

import { useEffect, useState } from "react";
import { Person } from "../lib/definitions";
import Image from "next/image";
import Link from "next/link";

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
    <div className="p-4 bg-slate-100">
      <h2 className="text-2xl text-center text-red-700 text-bold">
        Lists of person
      </h2>
      <div className="flex justify-between">
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          value={searchPerson}
          placeholder="Search person"
          onChange={(e) => setSearchPerson(e.target.value)}
        />
        <Link href="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded">
            Login
          </button>
        </Link>
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
    </div>
  );
}

export default List;
