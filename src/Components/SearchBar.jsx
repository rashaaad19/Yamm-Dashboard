import { SearchContainer,SearchInput } from "./Styled-Components/SearchComponent";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Search by ID..." />
      <CiSearch size={25} />
    </SearchContainer>
  );
};

export default SearchBar;
