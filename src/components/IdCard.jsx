import React from "react";
function IdCard({name, role, department, avatar, id}){
  return(
    <div className="bg-white rounded-2xl shadow-lg w-72 overflow-hidden border border-gray-200">
      <div className="bg-blue-600 h-16 w-full">
        <div className="flex justify-center -mt-8">
          <img src={avatar} alt={name} className="w-16 h-16 rounded-full border-2 border-white" />

        </div>
        <div className="text-center px-4 pb-6 pt-2">
          <h2 className="text-lg font-semibold text-white">{name}</h2>
          <p className="text-sm text-gray-200">{role}</p>
          <p className="text-sm text-gray-200">{department}</p>
          <p className="text-xs text-gray-300 mt-2">ID: {id}</p>

        </div>

      </div>

    </div>
  )
}
export default IdCard;