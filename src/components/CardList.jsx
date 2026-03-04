import React from "react";
import people from "../data/people";
import IdCard from "./IdCard";

function CardList() {
  return (
    <div className="min-h-screen bg-slate-950 py-16 px-4">

      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">
          Employee <span className="text-cyan-400">Directory</span>
        </h1>
        <p className="text-slate-400 mt-2 text-sm">NguvuTEch. — Official ID Cards</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {people.map((person) => (
          <IdCard
            key={person.id}
            id={person.id}
            name={person.name}
            role={person.role}
            department={person.department}
            avatar={person.avatar}
          />
        ))}
      </div>

    </div>
  );
}

export default CardList;