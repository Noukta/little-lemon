import { useReducer } from "react";
import { fetch } from "../../util/mockAPI";
import ReservationForm from "./ReservationForm";
import "../../styles/reservations.css";

const updateTimes = (availableTimes, date) => {
  const response = fetch(new Date(date));
  return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
  ...initialAvailableTimes,
  ...fetch(new Date()),
];

const Reservations = () => {
  // const { isLoading, submit } = useSubmit();
  const [availableTimes, dispatchOnDateChange] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  // const navigate = useNavigate();

  // const submitData = (formData) => {
  //   const response = submit(formData);
  //   if (response) navigate("/confirmed-reservation");
  // };

  return (
    <main className="reservations">
      <h2>Table reservation</h2>
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        // submitData={submitData}
        // isLoading={isLoading}
      />
    </main>
  );
};

export default Reservations;
