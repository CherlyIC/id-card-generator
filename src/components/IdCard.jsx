import React from "react";

function IdCard({ name, role, department, avatar, id }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg w-72 overflow-hidden border border-gray-200">
      
      {/* Blue banner - this div must close here */}
      <div className="bg-blue-600 h-16 w-full" />

      {/* Avatar - outside the blue div */}
      <div className="flex justify-center -mt-8">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full border-4 border-white object-cover"
        />
      </div>

      {/* Card body - outside the blue div */}
      <div className="text-center px-4 pb-6 pt-2">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-blue-600 font-medium text-sm">{role}</p>
        <div className="mt-4 border-t border-gray-100 pt-4 space-y-1">
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-700">Dept: </span>
            {department}
          </p>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-700">ID: </span>
            {id}
          </p>
        </div>
      </div>

    </div>
  )
}

export default IdCard;