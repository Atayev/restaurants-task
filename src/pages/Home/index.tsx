import RestaurantCard from "@/components/restaurantcard";
import { fetchData } from "@/lib/utils";
import useSWR from "swr";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
import SearchInput from "@/components/searchinput";
import ErrorMessage from "@/components/errormessage";
const Home = () => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 800);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const { data, error, isLoading } = useSWR(
    `/api/restaurants?name=${debouncedSearch}`,
    fetchData<Restaurant[]>
  );

  return (
    <div>
      <div className="ml-[110px] mt-4 w-full">
        <SearchInput onSearch={setSearch} />
      </div>
      <div className="gap-4 flex flex-wrap justify-center md:flex-row flex-col py-5">
        {error && <ErrorMessage message={error.message} />}
        {isLoading && <Loader />}
        {data?.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Home;
