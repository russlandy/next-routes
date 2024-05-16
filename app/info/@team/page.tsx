import Image from "next/image";

export default async function Team() {
  const films = await fetch("https://swapi.tech/api/films").then((res) =>
    res.json()
  );
  const people = [
    {
      name: "Leslie Alexander",
      role: "Co-Founder / CEO",
    },
  ];

  return (
    <div className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 ">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
