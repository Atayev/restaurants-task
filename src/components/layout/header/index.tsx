import { ModeToggle } from "@/components/modeswitcher";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="sticky top-0 w-full z-50 dark:bg-primary-foreground bg-white">
      <header className="flex md:flex-row flex-col gap-4 min-h-[40px] border  rounded-b-2xl shadow-xl justify-between items-center px-6 py-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-dark dark:text-white">
            Reserve a restaurant
          </h1>
        </Link>
        <div className="flex items-center md:gap-4 gap-10">
          <Button variant="outline">
            <Link to="/my-reservations">My reservations</Link>
          </Button>
          <ModeToggle />
        </div>
      </header>
    </div>
  );
};

export default Header;
