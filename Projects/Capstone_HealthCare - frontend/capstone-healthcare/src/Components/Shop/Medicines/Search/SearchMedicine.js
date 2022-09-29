import { SearchIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

function SearchMedicine({ searchMedicine, searchTerm, onSearchTermChange }) {
  return (
    <InputGroup width={"25%"}>
      <InputRightElement
        padding={"1.7rem"}
        children={
          <IconButton
            onClick={searchMedicine}
            background={"transparent"}
            icon={<SearchIcon boxSize={"6"}></SearchIcon>}
          />
        }
      />
      <Input
        placeholder={"Search for medicine..."}
        padding={"1.7rem"}
        fontSize={"1.5rem"}
        borderRadius={"2rem 0 1rem 0"}
        border={".3rem solid"}
        borderColor={"rgba(178,245,234, 0.8)"}
        borderTop={"none"}
        borderLeft={"none"}
        value={searchTerm}
        onChange={onSearchTermChange}
      ></Input>
    </InputGroup>
  );
}

export default SearchMedicine;
