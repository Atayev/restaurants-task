import ReserveForm from "@/components/reserveform";
import { Badge } from "@/components/ui/badge";
import Loader from "@/components/ui/loader";
import { fetchData } from "@/lib/utils";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const Restaurant = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useSWR(
    `/api/restaurants/${id}`,
    fetchData<Restaurant>
  );
  if (isLoading) return <Loader />;
  if (error || !data) return <div>{error?.message || "Not found"}</div>;
  const { category, image, name, id: restID, description } = data;
  return (
    <div className="flex flex-col space-y-4 items-center w-full">
      <h1 className="text-2xl md:text-4xl font-bold mt-6 text-start">{name}</h1>
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-[400px]  md:max-w-[50%] object-cover object-center rounded-lg shadow-md"
        />
      )}
      <div className="flex gap-2 w-[50%]">
        <span className="font-bold">Main categories:</span>
        {category.split(",").map((item) => (
          <Badge key={item} className="text-sm font-bold text-accent">
            {item.trim()}
          </Badge>
        ))}
      </div>
      <div className="md:max-w-[50%] flex flex-col items-start">
        <p className="text-xl font-bold">About the restaurant :</p>
        <p className="font-semibold text-start mt-6">{description}</p>
      </div>
      <div className="md:w-[50%] w-full flex flex-col items-start mb-4">
        <p className="text-xl font-bold">Reserve a table :</p>
        <ReserveForm restaurantId={restID} />
      </div>
    </div>
  );
};

export default Restaurant;
