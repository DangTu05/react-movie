import { useEffect, useState } from "react";
import MovieCard from "../MovieCard";


const MediaList = (props) => {
  const { title, tabs } = props;
  const [mediaList, setMediaList] = useState([]);
  const [activeTabId, setActiveTabId] = useState("all");
  useEffect(() => {
    const token =
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWI5MzA1MzdkMGM1NWFlOWM3YjkyZDk4ZWEzOThhMyIsIm5iZiI6MTc0MzAxMTUxOC4xNjgsInN1YiI6IjY3ZTQzZWJlMGVlNTNkNGU3MWYwZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UwUpDINQsA4l1Qh0r8-a6zln0yfINS7-9I0iH2EvAkM";

    const selectedTab =
      tabs.find((tab) => tab.id === activeTabId) ||
      tabs.find((tab) => tab.id === "movie") ||
      tabs.find((tab) => tab.id === "tv");
    // Nếu không tìm thấy tab hoặc activeTabId không phải "all", thay bằng "movie"

    setActiveTabId(selectedTab?.id ?? "movie");

    const url = selectedTab?.url || ""; // Đảm bảo `url` không bị undefined

    if (url) {
      fetch(`${url}`, {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        console.log("Data:::", data);
        const trendingMedia = data.results.slice(0, 12);
        setMediaList(trendingMedia);
      });
    }
  }, [activeTabId, tabs]);
  return (
    <div className="bg-black px-8 py-10 text-[1.2vw] text-white">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex gap-4 rounded border border-white">
          {tabs.map((tab) => (
            <button
              onClick={() => setActiveTabId(tab.id)}
              key={tab.id}
              className={`cursor-pointer rounded px-2 py-1 ${tab.id === activeTabId ? "bg-white text-black" : ""} `}
            >
              {tab.name}
            </button>
          ))}
        </ul>
      </div>

      <div className="sm:cols-4 grid grid-cols-2 gap-4 lg:grid-cols-6 lg:gap-6">
        {mediaList.map((media) => (
          <MovieCard
            key={media.id}
            media={media}
            mediaType={media.media_type || activeTabId}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaList;
