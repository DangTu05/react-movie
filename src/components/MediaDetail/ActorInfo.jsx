import { Link } from "react-router-dom";

const ActorInfo = ({ actor }) => {
<<<<<<< HEAD
=======
  const character = actor.character
    ? actor.character
    : actor.roles?.[0]?.character; // Kiểm tra roles tồn tại trước khi truy cập [0]

  const total_episode_count = actor.roles?.[0]?.episode_count; // Sử dụng ?. để tránh lỗi

>>>>>>> eeedefc37501cff06ba457570aeb577c0417b1fa
  return (
    <Link
      to={`/people/${actor.id}`}
      className="rounded-lg border border-slate-300 bg-black text-white shadow-sm"
    >
      <img
        src={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
            : "https://placehold.co/276x350"
        }
        width={150}
        alt=""
        className="w-full rounded-lg"
      />

      <div className="p-3 text-center">
        <p className="font-bold">{actor.name}</p>
        <p>{character}</p>
        {total_episode_count > 0 && (
          <p>
            {total_episode_count}{" "}
            {total_episode_count === 1 ? "Episode" : "Episodes"}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ActorInfo;
