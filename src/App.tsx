import { Route, Routes } from "react-router-dom";
import "./App.css";

import MainLayout from "./components/layout";
import { ErrorPage, Home, MyReservations, NotFound, Restaurant } from "@/pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="restaurant/:id" element={<Restaurant />} />
        <Route path="my-reservations" element={<MyReservations />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
