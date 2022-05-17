import { Flex, IconButton, Input } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { connectSearchBox } from "react-instantsearch-dom";

const SearchBox = ({ currentRefinement, refine }) => (
  <form noValidate action="" role="search">
    <Flex gap={4} m={5} w="100%">
      <Input
        placeholder="Busca por una palabra clave o codigo"
        size="md"
        type="search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
      <IconButton
        aria-label="Search database"
        icon={<FaTrash />}
        onClick={() => refine("")}
      >
        IconButton
      </IconButton>
    </Flex>
  </form>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
