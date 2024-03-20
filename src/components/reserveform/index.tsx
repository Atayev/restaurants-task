import { Button } from "../ui/button";
import { DatePickerWithPresets } from "../datepicker";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { useToast } from "../ui/use-toast";
import { Link } from "react-router-dom";

type Props = {
  restaurantId: string;
};
const ReserveForm = ({ restaurantId }: Props) => {
  //   const params = useSearchParams();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    time: "",
    guests: 1,
    date: new Date(),
  });
  const [formErrors, setFormErrors] = useState({
    date: "",
    time: "",
    guests: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDateChange = (date: Date) => {
    setFormData({
      ...formData,
      date,
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let isValid = true;
    let errors = { date: "", time: "", guests: "" };

    if (!formData.date) {
      isValid = false;
      errors.date = "Date is required";
    }

    if (!formData.time) {
      isValid = false;
      errors.time = "Time is required";
    }

    if (!formData.guests || formData.guests < 1) {
      isValid = false;
      errors.guests = "Number of guests is required";
    }

    setFormErrors(errors);
    if (!isValid) return;
    const reservation_id = Math.random().toString(36).substring(7);
    const reservationdata = {
      ...formData,
      restaurant_id: restaurantId,
      reservation_id: reservation_id,
    };

    const res = await fetch(
      import.meta.env.VITE_APP_MOCK_API_URL + "/api/reservations",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationdata),
      }
    );
    if (!res.ok) {
      toast({
        title: "Error",
        description:
          "There was an error reserving a table, please try again later",
      });
      return;
    }
    localStorage.setItem(
      `reservation_id_${reservation_id.slice(0, 1)}`,
      reservation_id
    );
    const formattedDate = formData.date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
    });
    const toastData = {
      title: "Reservation successful",
      description: `Thanks for reserving a table, we will be waiting for you on: ${formattedDate} at ${formData.time}. To view your reservations click the button below.`,
      action: (
        <Button variant="secondary" size="sm">
          <Link to={"/my-reservations"} className="text-sm">
            My reservations
          </Link>
        </Button>
      ),
    };
    toast(toastData);
  };

  return (
    <form
      action=""
      className="flex flex-col gap-2 mt-4 w-full"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col gap-1 items-start font-semibold">
        <span>Visit date</span>
        <DatePickerWithPresets
          date={formData.date}
          setDate={handleDateChange}
        />
      </label>
      {formErrors.date && (
        <p className="text-start text-red-500 text-xs">{formErrors.date}</p>
      )}

      <label className="flex flex-col gap-1 items-start font-semibold">
        <span>Visit hour:</span>
        <Input
          name="time"
          type="time"
          value={formData.time}
          onChange={handleChange}
        />
      </label>
      {formErrors.time && (
        <p className="text-start text-red-500 text-xs">{formErrors.time}</p>
      )}
      <label className="flex flex-col gap-1 items-start font-semibold">
        <span>Guests :</span>
        <Input
          name="guests"
          type="number"
          value={formData.guests}
          onChange={handleChange}
        />
      </label>
      {formErrors.guests && (
        <p className="text-start text-red-500 text-xs">{formErrors.guests}</p>
      )}
      <Button variant="secondary" className="my-4">
        Reserve
      </Button>
    </form>
  );
};

export default ReserveForm;
