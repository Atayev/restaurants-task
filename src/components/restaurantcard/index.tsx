import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <Card className="shadow-md">
      <CardHeader className="p-2">
        {restaurant.image && (
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="rounded-lg max-w-[300px] md:w-[250px]  h-[250px] object-cover"
          />
        )}
        <CardTitle>{restaurant.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col w-full items-start justify-center">
        <div className="flex gap-2">
          {restaurant.category.split(",").map((item) => (
            <Badge key={item}>{item.trim()}</Badge>
          ))}
        </div>
        <p>
          Available tables :
          <span className="font-bold text-green-600">
            {" "}
            {restaurant.available_tables}
          </span>
        </p>
        <p>
          Working hours :{" "}
          <span className="font-bold">{restaurant.hours.join("-")}</span>
        </p>
      </CardContent>
      <CardFooter className="flex items-center w-full justify-end">
        <Button variant="secondary">
          <Link to={`/restaurant/${restaurant.id}`}>Reserve</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
