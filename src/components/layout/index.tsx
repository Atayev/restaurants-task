import Header from "./header";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "../themeprovider";
import { Toaster } from "../ui/toaster";

const MainLayout = () => {
  return (
    <>
      <ThemeProvider>
        <Header />
        <div className="container mx-auto">
          <Outlet />
        </div>
        <Toaster />
      </ThemeProvider>
    </>
  );
};

export default MainLayout;
