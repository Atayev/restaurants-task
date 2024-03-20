import ReservationItem from "../reservationitem";
import { Accordion } from "../ui/accordion";

const ReservationList = ({
  reservations,
  restaurants,
}: {
  reservations: Reservation[];
  restaurants: Restaurant[];
}) => {
  const groupedReservations = reservations.reduce(
    (acc: { [key: string]: Reservation[] }, reservation) => {
      (acc[reservation.restaurant_id] =
        acc[reservation.restaurant_id] || []).push(reservation);
      return acc;
    },
    {}
  );

  return (
    <Accordion type="single" collapsible className="flex flex-col items-center">
      <h1 className="text-2xl font-bold my-4">
        {reservations.length > 0 && "Your Reservations"}
      </h1>
      {Object.entries(groupedReservations).map(
        ([restaurantId, reservations], index) => {
          const restaurant = restaurants.find((r) => r.id === restaurantId);
          return (
            <ReservationItem
              key={restaurantId + index}
              index={index}
              reservations={reservations}
              restaurant={restaurant!}
            />
          );
        }
      )}
    </Accordion>
  );
};

export default ReservationList;
