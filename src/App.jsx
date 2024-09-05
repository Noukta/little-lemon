import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/";
import Reservations from "./pages/Reservations/";
import ConfirmedReservation from "./pages/Reservations/ConfirmedReservation";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route
          path="/confirmed-reservation"
          element={<ConfirmedReservation />}
        />
        {/* <Route path="*" element={<UnderConstruction />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
