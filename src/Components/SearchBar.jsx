import {
  SearchContainer,
  SearchInput,
} from "./Styled-Components/SearchComponent";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ value, onChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search by ID..."
        value={value}
        onChange={onChange}
      />
      <CiSearch size={25} />
    </SearchContainer>
  );
};

export default SearchBar;
