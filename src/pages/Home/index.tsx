import { useEffect } from "react";
import { Outlet } from "react-router-dom";

type Props = {};

const Home = (props: Props) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Outlet />
      sdaf
    </div>
  );
};

export default Home;
