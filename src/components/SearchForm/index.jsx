import { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import GenreTypeInput from "./FormInput/GenreTypeInput";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import RatingInput from "./FormInput/RatingInput";

const SearchForm = ({ setSearch }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: "movie",
      Genres: [],
      rating: "All",
    },
  });

  const formatValue = watch();


  useEffect(() => {
    setSearch(formatValue);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formatValue), setSearch]);

  const onSubmit = (data) => console.log("data" + JSON.stringify(data));
  return (
    <div className="rounded-lg border p-4 shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={control}
          name="mediaType"
          label="media Type"
          Component={MediaTypeInput}
        />

        <FormField
          control={control}
          name="Genres"
          label="Genres"
          Component={GenreTypeInput}
        />
        <FormField
          control={control}
          name="rating"
          label="rating"
          Component={RatingInput}
        />

      </form>
    </div>
  );
};

export default SearchForm;
