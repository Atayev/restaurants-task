import Header from "./header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../themeprovider";

const MainLayout = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
