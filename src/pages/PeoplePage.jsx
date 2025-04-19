import ImageComponentWithAnimation from "@components/Image";
import RelativeMediaList from "@components/MediaDetail/RelativeMediaList";
import { useLoaderData } from "react-router-dom";

const PeoplePage = () => {
  const data = useLoaderData();

  return (
    <div className="bg-black text-[1.2vw] text-white">
      <div className="container">
        <div className="flex-1">
          <ImageComponentWithAnimation
            src={"https://image.tmdb.org/t/p/w400" + data.profile_path}
            width={400}
            height={500}
            className="mb-6"
          />

          <div>
            {" "}
            <p className="mb-6 text-[1.4vw] font-bold">Personnal Info</p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">know for</p>
                <p>{data.known_for_department}</p>
              </div>
              <div>
                <p className="font-bold">Gender</p>
                <p>{data.gender === 1 ? "Female" : "Male"}</p>
              </div>
              <div>
                <p className="font-bold">Place of Birth</p>
                <p>{data.place_of_birth}</p>
              </div>
              <div>
                <p className="font-bold">Birthday</p>
                <p>{data.birthday}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-[2]">
          <p className="mb-6 text-2xl font-bold">Math Smith</p>
          <div className="mb-6">
            <p className="mb-4 text-lg font-bold">Biograhpy</p>
            <p className="whitespace-pre-line">
              {data.biography
                ? data.biography
                : "We don't have a biography for this person yet."}
            </p>
          </div>
          <RelativeMediaList
            title="Know For"
            mediaList={data.combined_credits?.cast || []}
          />
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
