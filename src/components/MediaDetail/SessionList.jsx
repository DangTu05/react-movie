import CicalorProgessBar from "../CicalorProgessBar";
import ImageComponentWithAnimation from "../Image";

const SessionList = ({ sessions = [] }) => {
  console.log("sessions", sessions);

  return (
    <div className="mt-8 text-[1.3vw]">
      <p className="mb-4 text-[1.4vw] font-bold">SessionList</p>
      {sessions.map((session) => (
        <div
          className="flex gap-4 rounded-lg border border-slate-200 p-3 shadow-md"
          key={session.id}
        >
      <div className="flex items-center">
            
            <ImageComponentWithAnimation
              width={130}
              height={195}
              className="w-1/4 rounded-lg object-cover "
              src={
                "https://image.tmdb.org/t/p/w300" +
                session.poster_path
              }
            />
  
      </div>
          <div className="space-y-1">
            <p className="text-[1.4vw] font-bold">{session.name}</p>
            <div className="flex items-center gap-2">
              <p className="font-bold"> Rating</p>
              <CicalorProgessBar
                percent={Math.round(session.vote_average * 10)}
                size={2.5}
                strokeWidth={0.2}
              />
            </div>
            <p>
              <span className="font-bold">Release Date</span> {session.air_date}
            </p>
            <p>{session.episode_count} Espises</p>
            <p>{session.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SessionList;
