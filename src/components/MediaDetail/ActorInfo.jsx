import React from "react";

const ActorInfo = ({ actor }) => {
  return (
    <div className="rounded-lg border border-slate-300 bg-black text-white shadow-sm">
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : "https://placehold.co/276x350"
        }
        width={150}
        alt=""
        className="rounded-lg"
      />

      <div className="p-3">
        <p className="font-bold">{actor.name}</p>
        <p>{actor.character}</p>
      </div>
    </div>
  );
};

export default ActorInfo;
