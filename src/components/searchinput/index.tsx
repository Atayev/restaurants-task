import { ChangeEvent, useState } from "react";
import { Input } from "../ui/input";

interface SearchInputProps {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className=" flex w-full max-w-sm items-center space-x-2">
      <Input
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Type name of restaurant to search"
        className=""
      />
    </div>
  );
};

export default SearchInput;
