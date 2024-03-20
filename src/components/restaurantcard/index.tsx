import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import ReserveForm from "../reserveform";
import { Button } from "../ui/button";
import { Link, useNavigate, useNavigation } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const { available_tables, category, hours, id, image, name } = restaurant;
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Card className="shadow-md">
      <CardHeader className="p-2">
        {image && (
          <img
            src={image}
            alt={name}
            className="rounded-lg md:max-w-[300px] md:w-[250px] h-[250px] object-cover"
          />
        )}
        <CardTitle className="overflow-hidden overflow-ellipsis whitespace-nowrap md:max-w-[18ch] text-start">
          {name}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col w-full items-start justify-center p-2">
        <div className="flex gap-2">
          {category.split(",").map((item) => (
            <Badge key={item}>{item.trim()}</Badge>
          ))}
        </div>
        <p>
          Available tables :
          <span className="font-bold text-green-600"> {available_tables}</span>
        </p>
        <p>
          Working hours : <span className="font-bold">{hours.join("-")}</span>
        </p>
      </CardContent>
      <CardFooter className="flex items-center w-full justify-end">
        {/* <Button variant="secondary">
          <Link to={`/${id}`}>Reserve</Link>
        </Button> */}
        {/* <ReserveForm restaurantId={id} /> */}
        <Button variant="secondary">
          <Link to={`restaurant/${id}`}>Reserve</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RestaurantCard;
