import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const NoReservations = () => (
  <div className="min-h-[60vh] flex flex-col justify-center items-center gap-4">
    <p className="text-xl font-bold">No reservations yet.</p>
    <Button variant="secondary">
      <Link to="/">Go to restaurants</Link>
    </Button>
  </div>
);
export default NoReservations;
