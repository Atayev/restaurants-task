import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import InfoBadge from "../infotext";

interface ReservationItemProps {
  restaurant: Restaurant;
  reservations: Reservation[];
  index: number;
}

const ReservationItem: React.FC<ReservationItemProps> = ({
  restaurant,
  reservations,
  index,
}) => {
  return (
    <AccordionItem
      value={`item-${index}`}
      key={`item-${index + restaurant?.id}`}
      className="hover:shadow-lg  hover:opacity-85 transition duration-300 ease-in-out bg-primary-foreground rounded-lg w-full my-4 px-2 max-w-[50%]"
    >
      <AccordionTrigger>
        <div className="flex w-full justify-between px-4 items-center">
          <img
            src={restaurant?.image}
            alt={restaurant?.name}
            className="w-[150px] h-[150px] object-cover rounded-lg shadow-md"
          />
          <span className="text-2xl font-semibold">{restaurant?.name}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="bg-primary-foreground rounded-t-lg">
        {reservations.map((reservation) => {
          const formattedDate = new Date(reservation?.date).toLocaleDateString(
            "en-Us",
            {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }
          );
          return (
            <div
              className="flex flex-col items-start px-4 py-6 w-full border border-y-white my-2 rounded-lg"
              key={reservation.id}
            >
              <InfoBadge
                label="Reservation ID:"
                text={reservation?.reservation_id}
              />
              <InfoBadge label="Reservation Date:" text={formattedDate} />
              <InfoBadge label="Reservation Time:" text={reservation?.time} />
              <InfoBadge label="For:" text={`${reservation?.guests} people`} />
            </div>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};
export default ReservationItem;
