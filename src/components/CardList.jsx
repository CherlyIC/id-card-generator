import React from "react";
import people from "../data/people";
import IdCard from "./IdCard"

function CardList(){
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-2xl font-bold text-center text-gray-800">ID Cards</h1>
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
  )
}
export default CardList;