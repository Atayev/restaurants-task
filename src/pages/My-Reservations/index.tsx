import NoReservations from "@/components/noreservation";
import ReservationList from "@/components/reservationlist";
import Loader from "@/components/ui/loader";
import { fetchData } from "@/lib/utils";
import { useEffect, useState } from "react";

const MyReservations = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const reservationKeys = Object.keys(localStorage).filter((key) =>
      key.startsWith("reservation_id_")
    );
    const reservationIds = reservationKeys.map((key) => {
      const reservationId = localStorage.getItem(key);
      return reservationId ? reservationId : null;
    });

    Promise.all(
      reservationIds.map((id) =>
        fetchData<Reservation>(`api/reservations?reservation_id=${id}`)
      )
    )
      .then((reservationsData) => {
        const reservations = reservationsData.flat();
        setReservations(reservations);

        // Extract unique restaurant IDs
        const restaurantIds = [
          ...new Set(
            reservations.map((reservation) => reservation.restaurant_id)
          ),
        ];

        return Promise.all(
          restaurantIds.map((id) =>
            fetchData<Restaurant>(`api/restaurants/${id}`)
          )
        );
      })
      .then((restaurantsData) => {
        setRestaurants(restaurantsData.flat());
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  return (
    <div>
      {reservations.length === 0 ? (
        <NoReservations />
      ) : (
        <ReservationList
          reservations={reservations}
          restaurants={restaurants}
        />
      )}
    </div>
  );
};

export default MyReservations;
