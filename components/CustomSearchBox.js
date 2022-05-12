import { IconButton, Input } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { connectSearchBox } from "react-instantsearch-dom";

const SearchBox = ({ currentRefinement, isSearchStalled, refine }) => (
  <form noValidate action="" role="search">
    <Input
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
    {/* <button onClick={() => refine("")}>Limpiar</button> */}
    <IconButton
      aria-label="Search database"
      icon={<FaTrash />}
      onClick={() => refine("")}
    >
      IconButton
    </IconButton>
    {isSearchStalled ? "Buscar" : ""}
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
