import RelativeMediaList from "@components/MediaDetail/RelativeMediaList";
import SearchForm from "@components/SearchForm";
import useFetch from "@hooks/useFetch";
import { useCallback, useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState({
    mediaType: "movie",
    Genres: [],
    rating: "All",
  });

  const stableSetSearch = useCallback(setSearch, [setSearch]);

  const [min, max] =
    search.rating !== "All" ? [0, 100] : search.rating.split(",");

  const { data } = useFetch({
    url: `/discover/${search.mediaType}?with_genres=${search.Genres.join(
      ",",
    )}&vote_average_gte=${min / 10}&vote_average_lte=${max / 10}&sort_by=popularity.desc`,
  });

  console.log("data", data);
  const mediaList = (data?.results || []).map((item) => ({
    ...item,
    media_type: search.mediaType,
  }));
  return (
    <div className="container flex-col">
      <p className="text-2xl font-bold">Search</p>
      <div>
        <div className="flex gap-6">
          <div className="flex-1">
            <SearchForm setSearch={stableSetSearch} />
          </div>
          <div className="flex-[3]">
            <RelativeMediaList mediaList={mediaList} title="List Result" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
