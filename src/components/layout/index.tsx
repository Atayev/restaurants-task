import Header from "./header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../themeprovider";

const MainLayout = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <Outlet />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
