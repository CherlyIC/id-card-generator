import React from "react";

function IdCard({ name, role, department, avatar, id }) {
  return (
    <div className="relative w-72 rounded-2xl overflow-hidden shadow-2xl bg-linear-to-b from-slate-800 to-slate-900 border border-slate-700 text-white">

      <div className="px-5 pt-5 pb-3">
        <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">NguvuTEch.</span>
      </div>

      <div className="mx-5 border-t border-slate-700" />

      <div className="flex items-center gap-4 px-5 py-5">
        <img
          src={avatar}
          alt={name}
          className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400 shrink-0"
        />
        <div>
          <h2 className="text-base font-bold text-white leading-tight">{name}</h2>
          <p className="text-cyan-400 text-sm font-medium mt-0.5">{role}</p>
          <span className="inline-block mt-2 text-xs bg-slate-700 text-slate-300 px-2 py-0.5 rounded-full">
            {department}
          </span>
        </div>
      </div>

      <div className="mx-5 mb-5 border-t border-slate-700 pt-3 flex justify-between items-center">
        <span className="text-xs text-slate-500">Employee ID</span>
        <span className="text-xs font-mono text-cyan-400 font-bold">{id}</span>
      </div>

    </div>
  );
}

export default IdCard;